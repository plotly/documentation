# sane-topojson

[![npm version][badge-version]][npm]

[![Build Status][badge-travis]][travis]
[![Dependency Status][badge-deps]][deps]
[![devDependency Status][badge-dev-deps]][dev-deps]

Ready-to-use multi-layer topojson files.

This project encompasses the three step required to turn
[Natural Earth Data](http://www.naturalearthdata.com/) into topojson files.

These are:

- `npm run wget`: download to Natural Earth shapefiles and unzips them
- `npm run shp2geo`: clip and convert shapefiles into geojson files
- `npm run geo2topo` add properties and convert the geojson files into topojson
  files

### Configuration

In `./config.json`:

- `resolutions`: array of resolutions to output
- `scopes`: array of scopes to output

sane-topojson will output `resolution.length` times `scopes.length` topojson
files.

- `vectors`: array of layers making up each topojson file

### Output

A topojson with the `objects` field:

```js
{
    coastlines: {
        type: '',
        geometries: []
    },
    countries: {
        type: '',
        geometries: [
            {type: '', id: '', arcs: [], properties: {ct: [lon, lat]}},
            // ...
        ]
    },
    lakes: {
        type: '',
        geometries: []
    },
    land: {
        type: '',
        geometries: []
    },
    ocean: {
        type: '',
        geometries: []
    }
    rivers: {
        type: '',
        geometries: []
    }
    subunits: {
        type: '',
        geometries: [
            {type: '', id: '', arcs: [], properties: {ct: [lon, lat]}},
            // ...
        ]
    }
}
```

where `id` is the ISO-3 code for the `countries` layer and two-letter postal
code for the `subunits` layer. In `properties`, `ct` is the longitude and
latitude coordinates (in degrees East and degrees North respectively) of the
centroid of the geometry's largest polygon in area.

### Install

- Install gdal (info:
  [ubuntu](http://www.sarasafavi.com/installing-gdalogr-on-ubuntu.html) |
  [mac](https://trac.osgeo.org/gdal/wiki/BuildingOnMac))

- Install node.js dependencies

```
npm install sane-topojson
```

[npm]: https://www.npmjs.com/package/sane-topojson
[travis]: https://travis-ci.org/etpinard/sane-topojson
[badge-travis]: https://travis-ci.org/etpinard/sane-topojson.svg?branch=master
[badge-version]: https://badge.fury.io/js/sane-topojson.svg
[badge-deps]: https://david-dm.org/etpinard/sane-topojson.svg?style=flat-square
[deps]: https://david-dm.org/etpinard/sane-topojson
[badge-dev-deps]: https://david-dm.org/etpinard/sane-topojson/dev-status.svg?style=flat-square
[dev-deps]: https://david-dm.org/etpinard/sane-topojson#info=devDependencies
