---
title: Modularizing monolithic javascript projects
name:  Modularizing monolithic javascript projects
permalink: javascript/modularizing-monolithic-javascript-projects/
language: plotly_js
has_thumbnail: false
layout: user-guide
no_sidebar: true
---

# Modularizing monolithic JS projects

January 28, 2016

---
> **tl;dr** One javascript library's solution to approaching client-side
modularity using a mono-repo, one npm package and several CommonJS require-able
modules.


The current era of client-side javascript stands between two major events: the
npm-modules explosion is a few years behind us, but wide-spread implementation
of native client-side modules by browsers is several years away.

In this context, bundling systems such as [browserify](http://browserify.org/)
and [webpack](https://webpack.github.io/) are, for most JS applications, a
necessity. This fact is especially true for applications that make use of
several npm packages at once. Moreover, it is crucial to optimize the resulting
bundles where semver-compatible third-party dependencies are shared and to
minimize code duplication for applications with heavy JS assets. Maintainers of
today's client-side libraries must adapt for the aforementioned realities to
provide the best experience for consumers using different bundling systems and
different library features.

[Plotly](https://plot.ly/)'s open source javascript graphing library,
[plotly.js](https://github.com/plotly/plotly.js), includes multiple different
trace types (e.g. pie, scatter, bar, choropleth etc.) and as we add more types -
especially with the inclusion of WebGL types - our bundle size grows ever more
daunting. For a while, we've received requests to implement a module system, and
have recently published our first modular
[release](https://github.com/plotly/plotly.js/releases/tag/v1.5.0), allowing
users to bundle only the specific
[trace modules](https://github.com/plotly/plotly.js/blob/49ea59fd3016b4b125855511a05abe92a2e69082/README.md#modules)
they need.

In the past two months, we surveyed library design solutions in an effort to
provide the best experience for plotly.js consumers. We hope that our efforts
may help maintainers of other client-side libraries make judicious design
choices. We present Plotly's solution to client-side modularization below.


### Problem

We state the problem as such:

> How to modularize a client-side JS library, mainly for the purpose of trimming
bundle size, in a way that adds as little friction as possible for both
library consumers and library developers?

In addition, we formalize two additional requirements:

- Minimal overhead for browserify and webpack users
- Optimal bundling via browserify and webpack

Why prioritize browserify and webpack? Simply because they seem to be the most
used bundling systems. Source:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">... and
go!</p>&mdash; Matt DesLauriers (@mattdesl) <a
href="https://twitter.com/mattdesl/status/683753259992006656">January 3,
2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Moreover, browserify and webpack are the two most mature bundling systems
judging by their respective commit frequency and GitHub activity.

The [rollup](http://rollupjs.org/) bundler offers an interesting take on
client-side bundling and is worth mentioning. Its *tree-shaking* feature,
which removes unused portions of code when used with [ES6
modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import)
to, has the potential of solving many of the problems in modularization that we
will highlight below simply by using ES6 module definitions. While workarounds
do exist, converting plotly.js modules to ES6 syntax would increase the overhead
for browserify and webpack v1 users (note that webpack v2 is planning on
featuring [tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html)).
It simply feels too early for client-side libraries to adopt ES6 module
definitions. Nevertheless, keeping an eye on how rollup progresses will be
important in 2016. Its endorsement by the version 4 of
[d3](http://bost.ocks.org/mike/d3-plugin/) may make ES6 module definitions
common place for the next generation of large client-side libraries.


### Possible solution 1

Split up the library's modules into multiple repos, with each module linked to
its own npm package.

This solution is most common in the node.js world, however it is less-than-ideal
for a large client-side library. Having the different modules spread across
multiple repos increases friction during development. For example, how
should one write integration tests for a module that can't do anything on
its own? One could write up a testing repo requiring multiple modules, but
that would often result in several `npm link` and `npm publish` commands.
For a small team of maintainers like ours, this solution was quickly
discarded.

**Pros:**
 - For a large project like plotly.js, we can't honestly think of any

**Cons:**
 - That would have been a lot of work for us
 - Can't easily share testing and building resources from module to module
 - Possible code duplication unless the internal modules become npm packages too
   (more on that in the next section)


### Possible solution 2

Another solution to the problem would place all the code under one *mono-repo*
and publish the different modules as distinct npm packages.

Three well-known projects are currently implementing this solution with slightly
different flavours: [React](https://github.com/facebook/react),
[Babel](https://github.com/babel/babel) and
[lodash](https://github.com/lodash/lodash).

While React and Babel spawn multiple npm packages from inside their mono-repos,
the lodash team wrote a CLI utility named
[lodash-cli](https://github.com/lodash/lodash-cli) to parse through their
mono-repo looking for all its public methods and their dependencies to
ultimately publish them on npm automatically (see
[lodash-modularized](https://www.npmjs.com/browse/keyword/lodash-modularized)).

Mono-repos have several advantages. For instance, as pointed out in the Babel
[design
docs](https://github.com/babel/babel/blob/12b7a44796a504dbe5841473b899e499cae30749/doc/design/monorepo.md),
the different packages can easily share common resources such as testing
frameworks (who wants to `npm i karma` for each package in a project) and
development tooling which is a big plus for developers. In addition, issues are
reported in a single place instead of being spread over multiple GitHub
trackers.

However, mono-repos spawning multiple npm package may not be ideal for projects
with several shared internal modules, mainly because they are prone to code
duplication. To be more specific, imagine that the plotly.js repo spawned one
npm package per trace type along with a core package. Then, to make a custom
plotly.js bundle including only code to draw bar charts, one would:

```bash
npm install plotly.js-core plotly.js-bar
```

and then

```javascript
var plotlyCore = require('plotly.js-core');
var plotlyBar = require('plotly.js-bar');

var customPlotly = plotlyCore.register(plotlyBar);

module.exports = customPlotly;
```

It is important to note that if these two modules required above have shared
dependencies (e.g. some internal helper function), these will be duplicated in
the resulting bundle unless (1) they themselves become published modules or (2)
are exposed on the core export (e.g. `plotlyCore` in the above example).

Both (1) and (2) have drawbacks. Publishing internal modules would result in extra
maintenance work while exposing more methods on the core export would result in
greater library footprint.

To sum up:

**Pros:**
 - Able to share common resources (e.g. testing, development and build step)
 - Centralized GitHub issue tracker

**Cons:**
 - Writing the script(s) needed to split and/or publish the individual packages
   from within the mono-repo is non-trivial. Hats off to the lodash team for
   pulling it off.
 - Internal modules are prone to code duplication in the resulting bundles.


### Possible solution 3

Our solution!

To avoid the problems of code duplication and adding complication to project
management, we decided to opt for an easy to maintain *mono-repo* +
*mono-package* style solution.

With this solution, the end user can configure and build the final package as
they see fit, with only the trace types (e.g. bar, pie, histogram etc.) that
they require. The WebGL trace types - specifically ScatterGL and Mesh3D - add
nearly 100 KB to the bundle size and for many users, only one or two basic trace
types are needed.

Traces modules were originally loaded onto the `Plotly` core object when a
trace's `index.js` file was executed, so the whole trace module had a dependency
on `Plotly`.  To deal with this, we initially implemented a simple dependency
injection system where each trace's `index.js` exported a function that accepted
the `Plotly` dependency and passed it down to its children, then we could load
the ready-to-go trace onto `Plotly`.

```javascript
module.init = function(Plotly) {
  return {
    plot: require('./plot')(Plotly),
    attributes: require('./attributes')(Plotly),
    // ...
  }
}
```

This worked well enough, but was more complex than it needed to be and required
us to wrap all the trace module code in functions. We quickly saw that
dependency injection could be completely avoided by changing dependencies on
`Plotly.____` to directly require the code needed, and invert the control flow
by moving the code that loads modules into a top-level `register` method. This
meant that the `index.js` of each trace could be greatly simplified to re-export
only the generalized methods that are used for drawing traces.

The downside of this solution is that the modules can't completely stand on
their own; nearly every trace module depends on code that is bundled in the
core. Lucky for us, in the year 2016, nearly everyone has a build step!

While the generally preferred way to ship a package is to include `build` and/or
`dist` directories, containing nothing but pure and clean javascript, we've
added an additional `lib` directory that contains all the power-user-facing
parts. Inside, the files contain nothing more than re-exports, but this allows
for a much cleaner `require`'s in end-user code. Users can pick and choose the
trace types they'd like to use, register them with the plotly.js core module,
then re-export their own custom plotly.js module for use in their own code.
Example:

```javascript
var plotlyCore = require('plotly.js/lib/core');
var plotlyBar = require('plotly.js/lib/bar');

var customPlotly = plotlyCore.register(plotlyBar);

module.exports = customPlotly;
```

If the need arises to use another trace type, all that needs to be done is to
add a new trace module to the `Plotly.register` call.

We also considered, putting the `lib` files at the repo's root. This would have
made the `require` statements even cleaner e.g. `require('plotly.js/core')`
instead of `require('plotly.js/lib/core')`. But considering the large number of
these `lib` files we have, we opt for a `lib` directory in order to not pollute
the repo's root. Note that the `"main"` package.json field cannot be set to a
directory (more info [here](Mention
https://github.com/nodejs/node/issues/3953)).

Our solution results in a minor increase in build time, but we feel that the
flexibility it allows is well worth the hit. Browserify and webpack both have
caching, while developing, so after an initial bundling, there is no appreciable
difference in bundling time compared to using a pre-built library.

Once working this out and getting everything to work smoothly, we were faced
with one more issue still: webpack. Many areas of the plotly.js use
[glslify](https://github.com/stackgl/glslify) transforms, and unfortunately,
some of the plotly.js dependencies *rely on browserify to resolve transforms
specified in a package.json*. This was a problem that we puzzled over for quite
some time until [Hugh Kenedy](https://github.com/hughsk) released
[ify-loader](https://github.com/hughsk/ify-loader) for webpack. With this, as
webpack walks through source code and resolves `require`'s it will check the
package.json `browserify` field for any necessary transforms and apply them
appropriately.

**Pros:**
 - One repo (**!!!**)
 - No code duplication in resulting bundles

**Cons:**
 - Consumers need to require the plotly.js modules with a longer path e.g.
   `require('plotly.js/lib/bar')`
 - Webpack users will need to add [ify-loader](https://github.com/hughsk/ify-loader)
   to their config file


You can check out our latest (modular) [plotly.js release on GitHub](https://github.com/plotly/plotly.js/releases/tag/v1.5.0). If this is your first time hearing about plotly.js, check out our [gallery and documentation](https://plot.ly/javascript). We just recently open-sourced the project and you can learn more about our decision in our [open-source announcement](https://plot.ly/javascript/open-source-announcement).

Thanks for reading!

![3D-chart](https://images.plot.ly/excel/plotlyjs/plotlyjs-banner-background.png)
