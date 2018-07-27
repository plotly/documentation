/* global d3:false */

var saneTopojson = require('../');
var topojson = require('topojson');

var ITEM_WITH_NO_SUBUNITS = [
    'africa_110m', 'africa_50m',
    'asia_110m', 'asia_50m',
    'europe_110m', 'europe_50m',
    'south-america_110m'
];

describe('sane topojson general', () => {

    it('should have correct test environments', () => {
        expect(d3.version).toEqual('3.5.17');
        expect(Object.keys(saneTopojson)).toEqual([
            'world_110m',
            'world_50m',

            'africa_110m',
            'africa_50m',

            'asia_110m',
            'asia_50m',

            'europe_110m',
            'europe_50m',

            'north-america_110m',
            'north-america_50m',

            'south-america_110m',
            'south-america_50m',

            'usa_110m',
            'usa_50m'
        ]);
    });

    it('should have all the correct layers', () => {
        Object.keys(saneTopojson).forEach((k) => {
            var saneTopojsonItem = saneTopojson[k];

            expect(Object.keys(saneTopojsonItem)).toEqual([
                'type', 'objects', 'arcs', 'transform', 'bbox'
            ]);

            expect(Object.keys(saneTopojsonItem.objects)).toEqual([
                'coastlines', 'land', 'ocean', 'lakes',
                'rivers', 'countries', 'subunits'
            ]);
        });
    });

});

describe('sane topojson with d3-geo & topojson', () => {

    beforeEach(() => {
        this.svg = d3.select('body').append('svg')
            .attr('width', 960)
            .attr('height', 500)
    });

    afterEach(() => {
        document.body.removeChild(this.svg.node());
    });

    describe('should be able to draw path all layers', () => {

        Object.keys(saneTopojson).forEach((k) => {
            var saneTopojsonItem = saneTopojson[k];

            Object.keys(d3.geo).forEach((p) => {
                var projFunc = d3.geo[p];

                if(!(
                    typeof projFunc === 'function' &&
                    projFunc.raw !== undefined
                )) return;

                it('in topojson '+ k + ' using projection function ' + p, () => {
                    appendLayers(this.svg, projFunc, saneTopojsonItem);

                    var paths = this.svg.selectAll('path');

                    expect(paths.size()).toEqual(7);

                    paths.each(function() {
                        var path = d3.select(this),
                            l = path.attr('id');

                        if(
                            l === 'subunits' &&
                            ITEM_WITH_NO_SUBUNITS.indexOf(k) !== -1
                        ) {
                            expect(path.attr('d')).toBe(null);
                        }
                        else {
                            expect(path.attr('d').length > 1).toBe(true);
                        }
                    })
                });
            });
        });

    });

});

function appendLayers(svg, projFunc, saneTopojsonItem) {
    var width = +svg.attr('width');
    var height = svg.attr('height');

    var projection = projFunc()
        .translate([width / 2, height / 2])
        .precision(0.1);

    var path = d3.geo.path().projection(projection);

    Object.keys(saneTopojsonItem.objects).forEach((l) => {
        var datum = topojson.feature(
            saneTopojsonItem,
            saneTopojsonItem.objects[l]
        );

        svg.append('path')
            .datum(datum)
            .attr('d', path)
            .attr('id', l)
    });
}
