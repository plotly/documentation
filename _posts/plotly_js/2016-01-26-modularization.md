---
title: Plotly's answer to client-side modularization
name: Plotly's answer to client-side modularization
permalink: javascript/client-side-modularization
language: plotly_js
has_thumbnail: false
layout: user-guide
no_sidebar: true
language: plotly_js
---

# Plotly's answer to client-side modularization

January 26, 2015

**tl;dr** One library's answer to approaching client-side modularity using a
mono-repo, one npm package and several CommonJS require-able modules.


The current era of client-side javascript stands between two major events: the
npm-modules explosion is a few years behind us, but wide-spread implementation
of native client-side modules by browsers is several years away.

In this context, bundling systems such as [browserify](http://browserify.org/)
and [webpack](https://webpack.github.io/) are, for most JS applications, a
necessity. This fact is especially true for applications that make use of
several npm packages at once. Moreover, in applications with heavy JS assets,
optimizing the resulting bundles where semver-compatible third-party
dependencies are shared and code duplication is left to a minimum is crucial.
Maintainers of today's client-side libraries must adapt for the aforementioned
realities to provide the best experience for consumers using different bundling
systems and different library features.

[Plotly](https://plot.ly/)'s open source javascript graphing library,
[plotly.js](https://plot.ly/javascript/), recently published its first modular
[release](https://github.com/plotly/plotly.js/releases/tag/v1.5.0) allowing
users to bundle only the specific [trace
modules](https://github.com/plotly/plotly.js/blob/49ea59fd3016b4b125855511a05abe92a2e69082/README.md#modules)
they need.

We believe that our reflection on providing the best experience for plotly.js
consumers can be applicable for other client-side libraries. Our reflection is
presented below.


### Problem

We state the problem as such:

> How to modularize a JS library, mainly for the purpose of trimming bundle size,
in way that adds as little friction as possible for both the library consumers
and the library developers.

In addition, we formalize two addition requirements:

- Minimal overhead for browserify and webpack users
- Optimal bundling via browserify and webpack

Why prioritize browserify and webpack? They seem to be the most used bundling
systems. Source:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">... and
go!</p>&mdash; Matt DesLauriers (@mattdesl) <a
href="https://twitter.com/mattdesl/status/683753259992006656">January 3,
2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Moreover, browserify and webpack are the two most mature bundling systems
judging by the commit frequency and GitHub activity of both.

The [rollup](http://rollupjs.org/) bundler offers an interesting take on
client-side bundling and it worthy of a mention. Its *tree-shaking* feature,
which allows for only certain bits of [ES6
modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import)
to be included in the output bundles has the potential of solving many of
problems in modularization that we will highlight below simply by using ES6
module definitions. While workarounds do exist, converting the plotly.js modules
to ES6 syntax would have increased the overhead for browserify and webpack v1
users (note that webpack v2 is planning on featuring
[tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html)). It
simply feels too early for client-side libraries to adopt ES6 modules
definitions.  Nevertheless, keeping an eye on how rollup progresses will be
important in the next year. Its endorsement by the version 4 of
[d3](https://github.com/substack/node-browserify/issues/1186) may make ES6
module definitions common place for the next generation of large client-side
libraries.


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

To avoid the problems of code duplication and nightmarish project management, we
decided to opt for an easy to maintain *mono-repo* style solution where the end
user can configure and build the final package as they see fit, with only the
trace types (e.g. bar, pie, histogram etc.) that they require. The WebGL trace
types - specifically ScatterGL and Mesh3D - add nearly INSERT_BUNDLE_SIZE_DIFFERENCE
to the bundle size and for many users, only one or two basic trace types are
needed.

Traces were originally loaded onto the `Plotly` object when a trace's `index.js`
file was executed, so the whole trace module had a dependency on `Plotly`.
To deal with this, we initially implemented a simplistic dependency injection
system where each `index.js` for a trace exported a function that accepted
the `Plotly` dependency and would pass it down to its child files, then load
the trace onto `Plotly`. This worked well enough, but felt more complex than it
needed to be and required us to wrap all the trace module code in functions. We
quickly saw that dependency injection could be completely avoided by changing
dependencies on `Plotly.____` to directly require the code
needed, and invert the control flow by moving the code that loads
modules into a top-level `register` method. This meant that the `index.js` of
each trace could be greatly simplified to re-export only the generalized methods
that are used for drawing traces.

The downside of this route was that the modules couldn't completely stand on
their own; nearly every trace module depends on code that is bundled in the
core. Lucky for us, nearly everyone has a build step nowadays!

While the generally preferred way to ship a package is to include `build` and/or
`dist` directories, we've added an additional `lib` directory that contains all
the user-facing parts. Inside, the files contain nothing more than re-exports,
but this allows for a much nicer interface to `require`. Users can pick and
choose the trace types they'd like to use, register them with the plotly.js core
module, then re-export their custom plotly.js module for use everywhere in their
own source.

Although this adds a minor increase in build time, we feel that the flexibility
it allows is well worth the hit. Browserify and
webpack both allow for caching, so after an initial bundling, there is
no difference in development bundling time compared to using a pre-built bundle.

So,

```js
// insert code example
```


Mention https://github.com/nodejs/node/issues/3953 which would make things even
cleaner.

Pros:
 - one repo
 - no code duplication in bundles

Cons:
 - consumers need to require the plotly.js modules will a longer path e.g
   `require('plotly.js/lib/scatter3d')`



Mention https://github.com/hughsk/ify-loader for full webpack support
