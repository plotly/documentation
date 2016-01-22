---
title: plotly.js modules
name: plotly.js modules
permalink: javascript/modules
language: plotly_js
has_thumbnail: false
layout: user-guide
no_sidebar: true
language: plotly_js
---

# Plotly.js modules


January 26, 2015


### Problem

How to modularize a library, mainly for the purpose of trimming JS bundle size,
in way that adds as little friction as possible for both the library consumers
and the library developers. 

Must support browserify and webpack 
Source: https://twitter.com/mattdesl/status/683778211621240832
Podcast: http://reactpodcast.com/2015/06/webpack-vs-browserify/

Mention Rollup and its *tree-shaking*: https://github.com/rollup/rollup 
but isn't widely used yet and isn't as fully-featured as browserify and webpack

Mention that d3 is endorsing Rollup: http://bost.ocks.org/mike/d3-plugin/

### Possible solution 1

Split up the library into separate repo / npm modules

Pros:
 - 

Cons:
 - That would have been a lot of work for us
 - Can't easily share testing and building resources from module to module
 - Possible code duplication unless the internal modules become npm modules too


### Possible solution 2

Have the all the code in one repo and create multiple npm packages from it. 

Mention lodash: https://github.com/lodash/lodash
and its cli: https://github.com/lodash/lodash-cli

Mention babel: https://github.com/babel/babel/blob/master/doc/design/monorepo.md

Pros:
 - able to share test and building resources
 

Cons: 
 - writing the scripts the would split up the repo into modules would be tricky
   and error-prone
 - Would have to make the internal modules, public module on npm to
   not duplicate code


### Possible solution 3

Our solution!

Mention https://github.com/nodejs/node/issues/3953 which would make things even
cleaner.

Pros:
 - one repo
 - no code duplication in bundles

Cons: 
 - consumers need to require the plotly.js modules will a longer path e.g
   `require('plotly.js/lib/scatter3d')`



Mention https://github.com/hughsk/ify-loader for full webpack support
