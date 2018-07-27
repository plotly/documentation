(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.supercluster = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var kdbush = require('kdbush');

module.exports = supercluster;

function supercluster(options) {
    return new SuperCluster(options);
}

function SuperCluster(options) {
    this.options = extend(Object.create(this.options), options);
    this.trees = new Array(this.options.maxZoom + 1);
}

SuperCluster.prototype = {
    options: {
        minZoom: 0,   // min zoom to generate clusters on
        maxZoom: 16,  // max zoom level to cluster the points on
        radius: 40,   // cluster radius in pixels
        extent: 512,  // tile extent (radius is calculated relative to it)
        nodeSize: 64, // size of the KD-tree leaf node, affects performance
        log: false,   // whether to log timing info

        // a reduce function for calculating custom cluster properties
        reduce: null, // function (accumulated, props) { accumulated.sum += props.sum; }

        // initial properties of a cluster (before running the reducer)
        initial: function () { return {}; }, // function () { return {sum: 0}; },

        // properties to use for individual points when running the reducer
        map: function (props) { return props; } // function (props) { return {sum: props.my_value}; },
    },

    load: function (points) {
        var log = this.options.log;

        if (log) console.time('total time');

        var timerId = 'prepare ' + points.length + ' points';
        if (log) console.time(timerId);

        this.points = points;

        // generate a cluster object for each point
        var clusters = points.map(createPointCluster);
        if (log) console.timeEnd(timerId);

        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for (var z = this.options.maxZoom; z >= this.options.minZoom; z--) {
            var now = +Date.now();

            // index input points into a KD-tree
            this.trees[z + 1] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);

            clusters = this._cluster(clusters, z); // create a new set of clusters for the zoom

            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);
        }

        // index top-level clusters
        this.trees[this.options.minZoom] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);

        if (log) console.timeEnd('total time');

        return this;
    },

    getClusters: function (bbox, zoom) {
        var tree = this.trees[this._limitZoom(zoom)];
        var ids = tree.range(lngX(bbox[0]), latY(bbox[3]), lngX(bbox[2]), latY(bbox[1]));
        var clusters = [];
        for (var i = 0; i < ids.length; i++) {
            var c = tree.points[ids[i]];
            clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.id]);
        }
        return clusters;
    },

    getChildren: function (clusterId, clusterZoom) {
        var origin = this.trees[clusterZoom + 1].points[clusterId];
        var r = this.options.radius / (this.options.extent * Math.pow(2, clusterZoom));
        var points = this.trees[clusterZoom + 1].within(origin.x, origin.y, r);
        var children = [];
        for (var i = 0; i < points.length; i++) {
            var c = this.trees[clusterZoom + 1].points[points[i]];
            if (c.parentId === clusterId) {
                children.push(c.numPoints ? getClusterJSON(c) : this.points[c.id]);
            }
        }
        return children;
    },

    getLeaves: function (clusterId, clusterZoom, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;

        var leaves = [];
        this._appendLeaves(leaves, clusterId, clusterZoom, limit, offset, 0);

        return leaves;
    },

    getTile: function (z, x, y) {
        var tree = this.trees[this._limitZoom(z)];
        var z2 = Math.pow(2, z);
        var extent = this.options.extent;
        var r = this.options.radius;
        var p = r / extent;
        var top = (y - p) / z2;
        var bottom = (y + 1 + p) / z2;

        var tile = {
            features: []
        };

        this._addTileFeatures(
            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
            tree.points, x, y, z2, tile);

        if (x === 0) {
            this._addTileFeatures(
                tree.range(1 - p / z2, top, 1, bottom),
                tree.points, z2, y, z2, tile);
        }
        if (x === z2 - 1) {
            this._addTileFeatures(
                tree.range(0, top, p / z2, bottom),
                tree.points, -1, y, z2, tile);
        }

        return tile.features.length ? tile : null;
    },

    getClusterExpansionZoom: function (clusterId, clusterZoom) {
        while (clusterZoom < this.options.maxZoom) {
            var children = this.getChildren(clusterId, clusterZoom);
            clusterZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return clusterZoom;
    },

    _appendLeaves: function (result, clusterId, clusterZoom, limit, offset, skipped) {
        var children = this.getChildren(clusterId, clusterZoom);

        for (var i = 0; i < children.length; i++) {
            var props = children[i].properties;

            if (props.cluster) {
                if (skipped + props.point_count <= offset) {
                    // skip the whole cluster
                    skipped += props.point_count;
                } else {
                    // enter the cluster
                    skipped = this._appendLeaves(
                        result, props.cluster_id, clusterZoom + 1, limit, offset, skipped);
                    // exit the cluster
                }
            } else if (skipped < offset) {
                // skip a single point
                skipped++;
            } else {
                // add a single point
                result.push(children[i]);
            }
            if (result.length === limit) break;
        }

        return skipped;
    },

    _addTileFeatures: function (ids, points, x, y, z2, tile) {
        for (var i = 0; i < ids.length; i++) {
            var c = points[ids[i]];
            tile.features.push({
                type: 1,
                geometry: [[
                    Math.round(this.options.extent * (c.x * z2 - x)),
                    Math.round(this.options.extent * (c.y * z2 - y))
                ]],
                tags: c.numPoints ? getClusterProperties(c) : this.points[c.id].properties
            });
        }
    },

    _limitZoom: function (z) {
        return Math.max(this.options.minZoom, Math.min(z, this.options.maxZoom + 1));
    },

    _cluster: function (points, zoom) {
        var clusters = [];
        var r = this.options.radius / (this.options.extent * Math.pow(2, zoom));

        // loop through each point
        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            // if we've already visited the point at this zoom level, skip it
            if (p.zoom <= zoom) continue;
            p.zoom = zoom;

            // find all nearby points
            var tree = this.trees[zoom + 1];
            var neighborIds = tree.within(p.x, p.y, r);

            var numPoints = p.numPoints || 1;
            var wx = p.x * numPoints;
            var wy = p.y * numPoints;

            var clusterProperties = null;

            if (this.options.reduce) {
                clusterProperties = this.options.initial();
                this._accumulate(clusterProperties, p);
            }

            for (var j = 0; j < neighborIds.length; j++) {
                var b = tree.points[neighborIds[j]];
                // filter out neighbors that are too far or already processed
                if (zoom < b.zoom) {
                    var numPoints2 = b.numPoints || 1;
                    b.zoom = zoom; // save the zoom (so it doesn't get processed twice)
                    wx += b.x * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += b.y * numPoints2;
                    numPoints += numPoints2;
                    b.parentId = i;

                    if (this.options.reduce) {
                        this._accumulate(clusterProperties, b);
                    }
                }
            }

            if (numPoints === 1) {
                clusters.push(p);
            } else {
                p.parentId = i;
                clusters.push(createCluster(wx / numPoints, wy / numPoints, numPoints, i, clusterProperties));
            }
        }

        return clusters;
    },

    _accumulate: function (clusterProperties, point) {
        var properties = point.numPoints ?
            point.properties :
            this.options.map(this.points[point.id].properties);

        this.options.reduce(clusterProperties, properties);
    }
};

function createCluster(x, y, numPoints, id, properties) {
    return {
        x: x, // weighted cluster center
        y: y,
        zoom: Infinity, // the last zoom the cluster was processed at
        id: id, // index of the first child of the cluster in the zoom level tree
        properties: properties,
        parentId: -1, // parent cluster id
        numPoints: numPoints
    };
}

function createPointCluster(p, id) {
    var coords = p.geometry.coordinates;
    return {
        x: lngX(coords[0]), // projected point coordinates
        y: latY(coords[1]),
        zoom: Infinity, // the last zoom the point was processed at
        id: id, // index of the source feature in the original input array
        parentId: -1 // parent cluster id
    };
}

function getClusterJSON(cluster) {
    return {
        type: 'Feature',
        properties: getClusterProperties(cluster),
        geometry: {
            type: 'Point',
            coordinates: [xLng(cluster.x), yLat(cluster.y)]
        }
    };
}

function getClusterProperties(cluster) {
    var count = cluster.numPoints;
    var abbrev = count >= 10000 ? Math.round(count / 1000) + 'k' :
                 count >= 1000 ? (Math.round(count / 100) / 10) + 'k' : count;
    return extend(extend({}, cluster.properties), {
        cluster: true,
        cluster_id: cluster.id,
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    var sin = Math.sin(lat * Math.PI / 180),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 :
           y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    var y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

function extend(dest, src) {
    for (var id in src) dest[id] = src[id];
    return dest;
}

function getX(p) {
    return p.x;
}
function getY(p) {
    return p.y;
}

},{"kdbush":2}],2:[function(require,module,exports){
'use strict';

var sort = require('./sort');
var range = require('./range');
var within = require('./within');

module.exports = kdbush;

function kdbush(points, getX, getY, nodeSize, ArrayType) {
    return new KDBush(points, getX, getY, nodeSize, ArrayType);
}

function KDBush(points, getX, getY, nodeSize, ArrayType) {
    getX = getX || defaultGetX;
    getY = getY || defaultGetY;
    ArrayType = ArrayType || Array;

    this.nodeSize = nodeSize || 64;
    this.points = points;

    this.ids = new ArrayType(points.length);
    this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        this.ids[i] = i;
        this.coords[2 * i] = getX(points[i]);
        this.coords[2 * i + 1] = getY(points[i]);
    }

    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
}

KDBush.prototype = {
    range: function (minX, minY, maxX, maxY) {
        return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    },

    within: function (x, y, r) {
        return within(this.ids, this.coords, x, y, r, this.nodeSize);
    }
};

function defaultGetX(p) { return p[0]; }
function defaultGetY(p) { return p[1]; }

},{"./range":3,"./sort":4,"./within":5}],3:[function(require,module,exports){
'use strict';

module.exports = range;

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

},{}],4:[function(require,module,exports){
'use strict';

module.exports = sortKD;

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    var m = Math.floor((left + right) / 2);

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

},{}],5:[function(require,module,exports){
'use strict';

module.exports = within;

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2tkYnVzaC5qcyIsIm5vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwibm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvc29ydC5qcyIsIm5vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtkYnVzaCA9IHJlcXVpcmUoJ2tkYnVzaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cGVyY2x1c3RlcjtcblxuZnVuY3Rpb24gc3VwZXJjbHVzdGVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFN1cGVyQ2x1c3RlcihvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gU3VwZXJDbHVzdGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoT2JqZWN0LmNyZWF0ZSh0aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICB0aGlzLnRyZWVzID0gbmV3IEFycmF5KHRoaXMub3B0aW9ucy5tYXhab29tICsgMSk7XG59XG5cblN1cGVyQ2x1c3Rlci5wcm90b3R5cGUgPSB7XG4gICAgb3B0aW9uczoge1xuICAgICAgICBtaW5ab29tOiAwLCAgIC8vIG1pbiB6b29tIHRvIGdlbmVyYXRlIGNsdXN0ZXJzIG9uXG4gICAgICAgIG1heFpvb206IDE2LCAgLy8gbWF4IHpvb20gbGV2ZWwgdG8gY2x1c3RlciB0aGUgcG9pbnRzIG9uXG4gICAgICAgIHJhZGl1czogNDAsICAgLy8gY2x1c3RlciByYWRpdXMgaW4gcGl4ZWxzXG4gICAgICAgIGV4dGVudDogNTEyLCAgLy8gdGlsZSBleHRlbnQgKHJhZGl1cyBpcyBjYWxjdWxhdGVkIHJlbGF0aXZlIHRvIGl0KVxuICAgICAgICBub2RlU2l6ZTogNjQsIC8vIHNpemUgb2YgdGhlIEtELXRyZWUgbGVhZiBub2RlLCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgIGxvZzogZmFsc2UsICAgLy8gd2hldGhlciB0byBsb2cgdGltaW5nIGluZm9cblxuICAgICAgICAvLyBhIHJlZHVjZSBmdW5jdGlvbiBmb3IgY2FsY3VsYXRpbmcgY3VzdG9tIGNsdXN0ZXIgcHJvcGVydGllc1xuICAgICAgICByZWR1Y2U6IG51bGwsIC8vIGZ1bmN0aW9uIChhY2N1bXVsYXRlZCwgcHJvcHMpIHsgYWNjdW11bGF0ZWQuc3VtICs9IHByb3BzLnN1bTsgfVxuXG4gICAgICAgIC8vIGluaXRpYWwgcHJvcGVydGllcyBvZiBhIGNsdXN0ZXIgKGJlZm9yZSBydW5uaW5nIHRoZSByZWR1Y2VyKVxuICAgICAgICBpbml0aWFsOiBmdW5jdGlvbiAoKSB7IHJldHVybiB7fTsgfSwgLy8gZnVuY3Rpb24gKCkgeyByZXR1cm4ge3N1bTogMH07IH0sXG5cbiAgICAgICAgLy8gcHJvcGVydGllcyB0byB1c2UgZm9yIGluZGl2aWR1YWwgcG9pbnRzIHdoZW4gcnVubmluZyB0aGUgcmVkdWNlclxuICAgICAgICBtYXA6IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gcHJvcHM7IH0gLy8gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiB7c3VtOiBwcm9wcy5teV92YWx1ZX07IH0sXG4gICAgfSxcblxuICAgIGxvYWQ6IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgdmFyIGxvZyA9IHRoaXMub3B0aW9ucy5sb2c7XG5cbiAgICAgICAgaWYgKGxvZykgY29uc29sZS50aW1lKCd0b3RhbCB0aW1lJyk7XG5cbiAgICAgICAgdmFyIHRpbWVySWQgPSAncHJlcGFyZSAnICsgcG9pbnRzLmxlbmd0aCArICcgcG9pbnRzJztcbiAgICAgICAgaWYgKGxvZykgY29uc29sZS50aW1lKHRpbWVySWQpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIGEgY2x1c3RlciBvYmplY3QgZm9yIGVhY2ggcG9pbnRcbiAgICAgICAgdmFyIGNsdXN0ZXJzID0gcG9pbnRzLm1hcChjcmVhdGVQb2ludENsdXN0ZXIpO1xuICAgICAgICBpZiAobG9nKSBjb25zb2xlLnRpbWVFbmQodGltZXJJZCk7XG5cbiAgICAgICAgLy8gY2x1c3RlciBwb2ludHMgb24gbWF4IHpvb20sIHRoZW4gY2x1c3RlciB0aGUgcmVzdWx0cyBvbiBwcmV2aW91cyB6b29tLCBldGMuO1xuICAgICAgICAvLyByZXN1bHRzIGluIGEgY2x1c3RlciBoaWVyYXJjaHkgYWNyb3NzIHpvb20gbGV2ZWxzXG4gICAgICAgIGZvciAodmFyIHogPSB0aGlzLm9wdGlvbnMubWF4Wm9vbTsgeiA+PSB0aGlzLm9wdGlvbnMubWluWm9vbTsgei0tKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gK0RhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIGluZGV4IGlucHV0IHBvaW50cyBpbnRvIGEgS0QtdHJlZVxuICAgICAgICAgICAgdGhpcy50cmVlc1t6ICsgMV0gPSBrZGJ1c2goY2x1c3RlcnMsIGdldFgsIGdldFksIHRoaXMub3B0aW9ucy5ub2RlU2l6ZSwgRmxvYXQzMkFycmF5KTtcblxuICAgICAgICAgICAgY2x1c3RlcnMgPSB0aGlzLl9jbHVzdGVyKGNsdXN0ZXJzLCB6KTsgLy8gY3JlYXRlIGEgbmV3IHNldCBvZiBjbHVzdGVycyBmb3IgdGhlIHpvb21cblxuICAgICAgICAgICAgaWYgKGxvZykgY29uc29sZS5sb2coJ3olZDogJWQgY2x1c3RlcnMgaW4gJWRtcycsIHosIGNsdXN0ZXJzLmxlbmd0aCwgK0RhdGUubm93KCkgLSBub3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5kZXggdG9wLWxldmVsIGNsdXN0ZXJzXG4gICAgICAgIHRoaXMudHJlZXNbdGhpcy5vcHRpb25zLm1pblpvb21dID0ga2RidXNoKGNsdXN0ZXJzLCBnZXRYLCBnZXRZLCB0aGlzLm9wdGlvbnMubm9kZVNpemUsIEZsb2F0MzJBcnJheSk7XG5cbiAgICAgICAgaWYgKGxvZykgY29uc29sZS50aW1lRW5kKCd0b3RhbCB0aW1lJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdldENsdXN0ZXJzOiBmdW5jdGlvbiAoYmJveCwgem9vbSkge1xuICAgICAgICB2YXIgdHJlZSA9IHRoaXMudHJlZXNbdGhpcy5fbGltaXRab29tKHpvb20pXTtcbiAgICAgICAgdmFyIGlkcyA9IHRyZWUucmFuZ2UobG5nWChiYm94WzBdKSwgbGF0WShiYm94WzNdKSwgbG5nWChiYm94WzJdKSwgbGF0WShiYm94WzFdKSk7XG4gICAgICAgIHZhciBjbHVzdGVycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGMgPSB0cmVlLnBvaW50c1tpZHNbaV1dO1xuICAgICAgICAgICAgY2x1c3RlcnMucHVzaChjLm51bVBvaW50cyA/IGdldENsdXN0ZXJKU09OKGMpIDogdGhpcy5wb2ludHNbYy5pZF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbHVzdGVycztcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRyZW46IGZ1bmN0aW9uIChjbHVzdGVySWQsIGNsdXN0ZXJab29tKSB7XG4gICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLnRyZWVzW2NsdXN0ZXJab29tICsgMV0ucG9pbnRzW2NsdXN0ZXJJZF07XG4gICAgICAgIHZhciByID0gdGhpcy5vcHRpb25zLnJhZGl1cyAvICh0aGlzLm9wdGlvbnMuZXh0ZW50ICogTWF0aC5wb3coMiwgY2x1c3Rlclpvb20pKTtcbiAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMudHJlZXNbY2x1c3Rlclpvb20gKyAxXS53aXRoaW4ob3JpZ2luLngsIG9yaWdpbi55LCByKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMudHJlZXNbY2x1c3Rlclpvb20gKyAxXS5wb2ludHNbcG9pbnRzW2ldXTtcbiAgICAgICAgICAgIGlmIChjLnBhcmVudElkID09PSBjbHVzdGVySWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMubnVtUG9pbnRzID8gZ2V0Q2x1c3RlckpTT04oYykgOiB0aGlzLnBvaW50c1tjLmlkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH0sXG5cbiAgICBnZXRMZWF2ZXM6IGZ1bmN0aW9uIChjbHVzdGVySWQsIGNsdXN0ZXJab29tLCBsaW1pdCwgb2Zmc2V0KSB7XG4gICAgICAgIGxpbWl0ID0gbGltaXQgfHwgMTA7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICAgIHZhciBsZWF2ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYXBwZW5kTGVhdmVzKGxlYXZlcywgY2x1c3RlcklkLCBjbHVzdGVyWm9vbSwgbGltaXQsIG9mZnNldCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIGxlYXZlcztcbiAgICB9LFxuXG4gICAgZ2V0VGlsZTogZnVuY3Rpb24gKHosIHgsIHkpIHtcbiAgICAgICAgdmFyIHRyZWUgPSB0aGlzLnRyZWVzW3RoaXMuX2xpbWl0Wm9vbSh6KV07XG4gICAgICAgIHZhciB6MiA9IE1hdGgucG93KDIsIHopO1xuICAgICAgICB2YXIgZXh0ZW50ID0gdGhpcy5vcHRpb25zLmV4dGVudDtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm9wdGlvbnMucmFkaXVzO1xuICAgICAgICB2YXIgcCA9IHIgLyBleHRlbnQ7XG4gICAgICAgIHZhciB0b3AgPSAoeSAtIHApIC8gejI7XG4gICAgICAgIHZhciBib3R0b20gPSAoeSArIDEgKyBwKSAvIHoyO1xuXG4gICAgICAgIHZhciB0aWxlID0ge1xuICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fYWRkVGlsZUZlYXR1cmVzKFxuICAgICAgICAgICAgdHJlZS5yYW5nZSgoeCAtIHApIC8gejIsIHRvcCwgKHggKyAxICsgcCkgLyB6MiwgYm90dG9tKSxcbiAgICAgICAgICAgIHRyZWUucG9pbnRzLCB4LCB5LCB6MiwgdGlsZSk7XG5cbiAgICAgICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRpbGVGZWF0dXJlcyhcbiAgICAgICAgICAgICAgICB0cmVlLnJhbmdlKDEgLSBwIC8gejIsIHRvcCwgMSwgYm90dG9tKSxcbiAgICAgICAgICAgICAgICB0cmVlLnBvaW50cywgejIsIHksIHoyLCB0aWxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PT0gejIgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaWxlRmVhdHVyZXMoXG4gICAgICAgICAgICAgICAgdHJlZS5yYW5nZSgwLCB0b3AsIHAgLyB6MiwgYm90dG9tKSxcbiAgICAgICAgICAgICAgICB0cmVlLnBvaW50cywgLTEsIHksIHoyLCB0aWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWxlLmZlYXR1cmVzLmxlbmd0aCA/IHRpbGUgOiBudWxsO1xuICAgIH0sXG5cbiAgICBnZXRDbHVzdGVyRXhwYW5zaW9uWm9vbTogZnVuY3Rpb24gKGNsdXN0ZXJJZCwgY2x1c3Rlclpvb20pIHtcbiAgICAgICAgd2hpbGUgKGNsdXN0ZXJab29tIDwgdGhpcy5vcHRpb25zLm1heFpvb20pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oY2x1c3RlcklkLCBjbHVzdGVyWm9vbSk7XG4gICAgICAgICAgICBjbHVzdGVyWm9vbSsrO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPT0gMSkgYnJlYWs7XG4gICAgICAgICAgICBjbHVzdGVySWQgPSBjaGlsZHJlblswXS5wcm9wZXJ0aWVzLmNsdXN0ZXJfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsdXN0ZXJab29tO1xuICAgIH0sXG5cbiAgICBfYXBwZW5kTGVhdmVzOiBmdW5jdGlvbiAocmVzdWx0LCBjbHVzdGVySWQsIGNsdXN0ZXJab29tLCBsaW1pdCwgb2Zmc2V0LCBza2lwcGVkKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oY2x1c3RlcklkLCBjbHVzdGVyWm9vbSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gY2hpbGRyZW5baV0ucHJvcGVydGllcztcblxuICAgICAgICAgICAgaWYgKHByb3BzLmNsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZCArIHByb3BzLnBvaW50X2NvdW50IDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHRoZSB3aG9sZSBjbHVzdGVyXG4gICAgICAgICAgICAgICAgICAgIHNraXBwZWQgKz0gcHJvcHMucG9pbnRfY291bnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW50ZXIgdGhlIGNsdXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgc2tpcHBlZCA9IHRoaXMuX2FwcGVuZExlYXZlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCwgcHJvcHMuY2x1c3Rlcl9pZCwgY2x1c3Rlclpvb20gKyAxLCBsaW1pdCwgb2Zmc2V0LCBza2lwcGVkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhpdCB0aGUgY2x1c3RlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2tpcHBlZCA8IG9mZnNldCkge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgYSBzaW5nbGUgcG9pbnRcbiAgICAgICAgICAgICAgICBza2lwcGVkKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBhIHNpbmdsZSBwb2ludFxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSBsaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2tpcHBlZDtcbiAgICB9LFxuXG4gICAgX2FkZFRpbGVGZWF0dXJlczogZnVuY3Rpb24gKGlkcywgcG9pbnRzLCB4LCB5LCB6MiwgdGlsZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGMgPSBwb2ludHNbaWRzW2ldXTtcbiAgICAgICAgICAgIHRpbGUuZmVhdHVyZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogW1tcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh0aGlzLm9wdGlvbnMuZXh0ZW50ICogKGMueCAqIHoyIC0geCkpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHRoaXMub3B0aW9ucy5leHRlbnQgKiAoYy55ICogejIgLSB5KSlcbiAgICAgICAgICAgICAgICBdXSxcbiAgICAgICAgICAgICAgICB0YWdzOiBjLm51bVBvaW50cyA/IGdldENsdXN0ZXJQcm9wZXJ0aWVzKGMpIDogdGhpcy5wb2ludHNbYy5pZF0ucHJvcGVydGllc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2xpbWl0Wm9vbTogZnVuY3Rpb24gKHopIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub3B0aW9ucy5taW5ab29tLCBNYXRoLm1pbih6LCB0aGlzLm9wdGlvbnMubWF4Wm9vbSArIDEpKTtcbiAgICB9LFxuXG4gICAgX2NsdXN0ZXI6IGZ1bmN0aW9uIChwb2ludHMsIHpvb20pIHtcbiAgICAgICAgdmFyIGNsdXN0ZXJzID0gW107XG4gICAgICAgIHZhciByID0gdGhpcy5vcHRpb25zLnJhZGl1cyAvICh0aGlzLm9wdGlvbnMuZXh0ZW50ICogTWF0aC5wb3coMiwgem9vbSkpO1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHBvaW50XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIC8vIGlmIHdlJ3ZlIGFscmVhZHkgdmlzaXRlZCB0aGUgcG9pbnQgYXQgdGhpcyB6b29tIGxldmVsLCBza2lwIGl0XG4gICAgICAgICAgICBpZiAocC56b29tIDw9IHpvb20pIGNvbnRpbnVlO1xuICAgICAgICAgICAgcC56b29tID0gem9vbTtcblxuICAgICAgICAgICAgLy8gZmluZCBhbGwgbmVhcmJ5IHBvaW50c1xuICAgICAgICAgICAgdmFyIHRyZWUgPSB0aGlzLnRyZWVzW3pvb20gKyAxXTtcbiAgICAgICAgICAgIHZhciBuZWlnaGJvcklkcyA9IHRyZWUud2l0aGluKHAueCwgcC55LCByKTtcblxuICAgICAgICAgICAgdmFyIG51bVBvaW50cyA9IHAubnVtUG9pbnRzIHx8IDE7XG4gICAgICAgICAgICB2YXIgd3ggPSBwLnggKiBudW1Qb2ludHM7XG4gICAgICAgICAgICB2YXIgd3kgPSBwLnkgKiBudW1Qb2ludHM7XG5cbiAgICAgICAgICAgIHZhciBjbHVzdGVyUHJvcGVydGllcyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVkdWNlKSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlclByb3BlcnRpZXMgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY3VtdWxhdGUoY2x1c3RlclByb3BlcnRpZXMsIHApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5laWdoYm9ySWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0cmVlLnBvaW50c1tuZWlnaGJvcklkc1tqXV07XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBuZWlnaGJvcnMgdGhhdCBhcmUgdG9vIGZhciBvciBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgICAgICAgICAgIGlmICh6b29tIDwgYi56b29tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1Qb2ludHMyID0gYi5udW1Qb2ludHMgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgYi56b29tID0gem9vbTsgLy8gc2F2ZSB0aGUgem9vbSAoc28gaXQgZG9lc24ndCBnZXQgcHJvY2Vzc2VkIHR3aWNlKVxuICAgICAgICAgICAgICAgICAgICB3eCArPSBiLnggKiBudW1Qb2ludHMyOyAvLyBhY2N1bXVsYXRlIGNvb3JkaW5hdGVzIGZvciBjYWxjdWxhdGluZyB3ZWlnaHRlZCBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgd3kgKz0gYi55ICogbnVtUG9pbnRzMjtcbiAgICAgICAgICAgICAgICAgICAgbnVtUG9pbnRzICs9IG51bVBvaW50czI7XG4gICAgICAgICAgICAgICAgICAgIGIucGFyZW50SWQgPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVkdWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2N1bXVsYXRlKGNsdXN0ZXJQcm9wZXJ0aWVzLCBiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG51bVBvaW50cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2gocCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHAucGFyZW50SWQgPSBpO1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJzLnB1c2goY3JlYXRlQ2x1c3Rlcih3eCAvIG51bVBvaW50cywgd3kgLyBudW1Qb2ludHMsIG51bVBvaW50cywgaSwgY2x1c3RlclByb3BlcnRpZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbHVzdGVycztcbiAgICB9LFxuXG4gICAgX2FjY3VtdWxhdGU6IGZ1bmN0aW9uIChjbHVzdGVyUHJvcGVydGllcywgcG9pbnQpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBwb2ludC5udW1Qb2ludHMgP1xuICAgICAgICAgICAgcG9pbnQucHJvcGVydGllcyA6XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwKHRoaXMucG9pbnRzW3BvaW50LmlkXS5wcm9wZXJ0aWVzKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMucmVkdWNlKGNsdXN0ZXJQcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDbHVzdGVyKHgsIHksIG51bVBvaW50cywgaWQsIHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LCAvLyB3ZWlnaHRlZCBjbHVzdGVyIGNlbnRlclxuICAgICAgICB5OiB5LFxuICAgICAgICB6b29tOiBJbmZpbml0eSwgLy8gdGhlIGxhc3Qgem9vbSB0aGUgY2x1c3RlciB3YXMgcHJvY2Vzc2VkIGF0XG4gICAgICAgIGlkOiBpZCwgLy8gaW5kZXggb2YgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBjbHVzdGVyIGluIHRoZSB6b29tIGxldmVsIHRyZWVcbiAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICAgICAgcGFyZW50SWQ6IC0xLCAvLyBwYXJlbnQgY2x1c3RlciBpZFxuICAgICAgICBudW1Qb2ludHM6IG51bVBvaW50c1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50Q2x1c3RlcihwLCBpZCkge1xuICAgIHZhciBjb29yZHMgPSBwLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGxuZ1goY29vcmRzWzBdKSwgLy8gcHJvamVjdGVkIHBvaW50IGNvb3JkaW5hdGVzXG4gICAgICAgIHk6IGxhdFkoY29vcmRzWzFdKSxcbiAgICAgICAgem9vbTogSW5maW5pdHksIC8vIHRoZSBsYXN0IHpvb20gdGhlIHBvaW50IHdhcyBwcm9jZXNzZWQgYXRcbiAgICAgICAgaWQ6IGlkLCAvLyBpbmRleCBvZiB0aGUgc291cmNlIGZlYXR1cmUgaW4gdGhlIG9yaWdpbmFsIGlucHV0IGFycmF5XG4gICAgICAgIHBhcmVudElkOiAtMSAvLyBwYXJlbnQgY2x1c3RlciBpZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldENsdXN0ZXJKU09OKGNsdXN0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIHByb3BlcnRpZXM6IGdldENsdXN0ZXJQcm9wZXJ0aWVzKGNsdXN0ZXIpLFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbeExuZyhjbHVzdGVyLngpLCB5TGF0KGNsdXN0ZXIueSldXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDbHVzdGVyUHJvcGVydGllcyhjbHVzdGVyKSB7XG4gICAgdmFyIGNvdW50ID0gY2x1c3Rlci5udW1Qb2ludHM7XG4gICAgdmFyIGFiYnJldiA9IGNvdW50ID49IDEwMDAwID8gTWF0aC5yb3VuZChjb3VudCAvIDEwMDApICsgJ2snIDpcbiAgICAgICAgICAgICAgICAgY291bnQgPj0gMTAwMCA/IChNYXRoLnJvdW5kKGNvdW50IC8gMTAwKSAvIDEwKSArICdrJyA6IGNvdW50O1xuICAgIHJldHVybiBleHRlbmQoZXh0ZW5kKHt9LCBjbHVzdGVyLnByb3BlcnRpZXMpLCB7XG4gICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXIuaWQsXG4gICAgICAgIHBvaW50X2NvdW50OiBjb3VudCxcbiAgICAgICAgcG9pbnRfY291bnRfYWJicmV2aWF0ZWQ6IGFiYnJldlxuICAgIH0pO1xufVxuXG4vLyBsb25naXR1ZGUvbGF0aXR1ZGUgdG8gc3BoZXJpY2FsIG1lcmNhdG9yIGluIFswLi4xXSByYW5nZVxuZnVuY3Rpb24gbG5nWChsbmcpIHtcbiAgICByZXR1cm4gbG5nIC8gMzYwICsgMC41O1xufVxuZnVuY3Rpb24gbGF0WShsYXQpIHtcbiAgICB2YXIgc2luID0gTWF0aC5zaW4obGF0ICogTWF0aC5QSSAvIDE4MCksXG4gICAgICAgIHkgPSAoMC41IC0gMC4yNSAqIE1hdGgubG9nKCgxICsgc2luKSAvICgxIC0gc2luKSkgLyBNYXRoLlBJKTtcbiAgICByZXR1cm4geSA8IDAgPyAwIDpcbiAgICAgICAgICAgeSA+IDEgPyAxIDogeTtcbn1cblxuLy8gc3BoZXJpY2FsIG1lcmNhdG9yIHRvIGxvbmdpdHVkZS9sYXRpdHVkZVxuZnVuY3Rpb24geExuZyh4KSB7XG4gICAgcmV0dXJuICh4IC0gMC41KSAqIDM2MDtcbn1cbmZ1bmN0aW9uIHlMYXQoeSkge1xuICAgIHZhciB5MiA9ICgxODAgLSB5ICogMzYwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgcmV0dXJuIDM2MCAqIE1hdGguYXRhbihNYXRoLmV4cCh5MikpIC8gTWF0aC5QSSAtIDkwO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoZGVzdCwgc3JjKSB7XG4gICAgZm9yICh2YXIgaWQgaW4gc3JjKSBkZXN0W2lkXSA9IHNyY1tpZF07XG4gICAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIGdldFgocCkge1xuICAgIHJldHVybiBwLng7XG59XG5mdW5jdGlvbiBnZXRZKHApIHtcbiAgICByZXR1cm4gcC55O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc29ydCA9IHJlcXVpcmUoJy4vc29ydCcpO1xudmFyIHJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpO1xudmFyIHdpdGhpbiA9IHJlcXVpcmUoJy4vd2l0aGluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2RidXNoO1xuXG5mdW5jdGlvbiBrZGJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBLREJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKTtcbn1cblxuZnVuY3Rpb24gS0RCdXNoKHBvaW50cywgZ2V0WCwgZ2V0WSwgbm9kZVNpemUsIEFycmF5VHlwZSkge1xuICAgIGdldFggPSBnZXRYIHx8IGRlZmF1bHRHZXRYO1xuICAgIGdldFkgPSBnZXRZIHx8IGRlZmF1bHRHZXRZO1xuICAgIEFycmF5VHlwZSA9IEFycmF5VHlwZSB8fCBBcnJheTtcblxuICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZSB8fCA2NDtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgIHRoaXMuaWRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pZHNbaV0gPSBpO1xuICAgICAgICB0aGlzLmNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgIHRoaXMuY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgfVxuXG4gICAgc29ydCh0aGlzLmlkcywgdGhpcy5jb29yZHMsIHRoaXMubm9kZVNpemUsIDAsIHRoaXMuaWRzLmxlbmd0aCAtIDEsIDApO1xufVxuXG5LREJ1c2gucHJvdG90eXBlID0ge1xuICAgIHJhbmdlOiBmdW5jdGlvbiAobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9LFxuXG4gICAgd2l0aGluOiBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEdldFgocCkgeyByZXR1cm4gcFswXTsgfVxuZnVuY3Rpb24gZGVmYXVsdEdldFkocCkgeyByZXR1cm4gcFsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmdlO1xuXG5mdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICB2YXIgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgdmFyIG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRLRDtcblxuZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgdmFyIG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgdmFyIG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICB2YXIgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgdmFyIHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgdmFyIHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdmFyIG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgdmFyIG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICB2YXIgaSA9IGxlZnQ7XG4gICAgICAgIHZhciBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgdmFyIHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhpbjtcblxuZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgdmFyIHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIHZhciBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB2YXIgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB2YXIgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHZhciB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIHZhciBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICB2YXIgZHggPSBheCAtIGJ4O1xuICAgIHZhciBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIl19
