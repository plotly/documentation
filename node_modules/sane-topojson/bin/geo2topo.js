var fs = require('fs');

var topojson  = require('topojson');
var gju = require('geojson-utils');

var common = require('./common');

fs.readFile(common.pathToConfig, 'utf8', main);

function main(err, configFile) {
    if(err) throw err;

    var config = JSON.parse(configFile);
    var toposToWrite = common.getToposToWrite(config);

    var barWrite = common.makeBar(
        'Writing into topojson: [:bar] :current/:total',
        [toposToWrite]
    );

    function propertyTransform(feature) { return feature.properties; }

    toposToWrite.forEach(function(topo) {
        var r = topo.r,
            s = topo.s;

        var collections = {};

        var barRead = common.makeBar(
            'Processing GeoJSON files : [:bar] :current/:total',
            [config.vectors]
        );

        config.vectors.forEach(function(v) {
            var path = common.geojsonDir + common.tn(r, s.name, v.name, 'geo.json'),
                d = fs.readFileSync(path, 'utf8'),
                collection = JSON.parse(d);

            if(collection.features) formatProperties(collection, v);
            collections[v.name] = collection;

            barRead.tick();
        });

        // TODO experiment with simplification/quantization
        var topology = topojson.topology(collections, {
            'verbose': true,
            'property-transform': propertyTransform
         });

        pruneProperties(topology);

        var outPath = common.topojsonDir + common.out(r, s.name);

        fs.writeFile(outPath, JSON.stringify(topology), function(err) {
            if(!err) barWrite.tick();
        });

    });

}

function formatProperties(collection, v) {
    var features = collection.features,
        N = features.length,
        feature,
        id;

    function getCentroid(feature){
        var geometry = feature.geometry;

        function getOne(polygon) {
            var coords = gju.centroid(polygon).coordinates;
            return [ +coords[0].toFixed(2), +coords[1].toFixed(2) ];
        }

        if(geometry.type === 'MultiPolygon') {
            var coordinates = geometry.coordinates,
                N = coordinates.length,
                centroids = new Array(N),
                areas = new Array(N),
                polygon,
                indexOfMax;

            // compute one centroid per polygon and
            // pick the one associated with the
            // largest area.

            for(var i = 0; i < N; i++) {
                polygon = {
                    type: 'Polygon',
                    coordinates: coordinates[i]
                };
                centroids[i] = getOne(polygon);
                areas[i] = gju.area(polygon);
            }

            // 'min' works best, not sure why
            indexOfMax = areas.indexOf(Math.min.apply(Math, areas));
            return centroids[indexOfMax];
        }
        else if(geometry.type==='Polygon') {
            return getOne(geometry);
        }
        else return;
    }

    for(var i = 0; i < N; i++) {
        feature = features[i];

         if(v.ids) {
            id = feature.properties[v.ids];

            if(id !== '-99') {
                feature.id = id;
                feature.properties.ct = getCentroid(feature);
            }
         }
    }
}

function pruneProperties(topology) {
    var propsToKeep = ['ct'];

    var objects = topology.objects;

    Object.keys(objects).forEach(function(objectName) {
        objects[objectName].geometries.forEach(function(geometry) {
            var properties = geometry.properties,
                newProperties = {};

            if(properties === undefined) return;

            propsToKeep.forEach(function(prop) {
                if(properties[prop] !== undefined) {
                    newProperties[prop] = properties[prop];
                }
            });

            if(Object.keys(newProperties).length) {
                geometry.properties = newProperties;
            }
            else {
                delete geometry.properties;
            }
        });
    });
}
