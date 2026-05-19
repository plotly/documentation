# Styles

The styling for this repo is broken up into two different parts: [gulp](https://github.com/plotly/graphing-library-docs/blob/master/gulpfile.js) + browsersync + sass, and vanilla css.

## gulp + browsersync + scss

This repo is set up to run with a [gulp](https://github.com/plotly/graphing-library-docs/blob/master/gulpfile.js) + sass + browsersync workflow. It leverages a local server to display the site, and live-injects scss changes so you can see the immediate effects of your edits.

The scss and Jekyll instance have been separated to allow for faster updates to the scss independent of the markup.

### Usage

Once you have successfully cloned the repo (see the main [README.md](https://github.com/plotly/graphing-library-docs/blob/master/README.md#how-to-get-the-application-working-locally)), run `npm install` to install gulp and the necessary dependencies.

Generally it's best to work with two terminal sessions: one for `bundle exec jekyll …` and another to keep the `gulp` task running.

1. Run `bundle exec jekyll serve --config _config_dev.yml` to create a local server at http://localhost:4000 that browsersync leverages (see `gulpfile.js` to adjust as needed)
2. Run `gulp` in the other terminal
3. Make any updates to the scss files

### markup + scss workflow

It's a bit of a hassle to make concurrent updates to markup and scss. Any time you update an html/js file you'll have to run `bundle exec jekyll build` (or run `bundle exec jekyll serve` with Jekyll watching for changes). Jekyll's watch mode can be slow on this repo because of its size; building on demand is sometimes preferable.

When you run `bundle exec jekyll …`, Jekyll regenerates `styles.css` — so if you modify any scss file and save it, Jekyll's output may overwrite your changes. Run `gulp build` again to regenerate the css after Jekyll runs.

### folder structure

- scss/
   - _abstract/ *(variables, mixins, resets, etc)*
     * _abstract.scss
     * _normalize.scss
   - _components/ *(ui components)*
     * _base.scss
     * _breadcrumb.scss
     * _foot.scss
     * _header.scss
     * _helpbox.scss
     * _highlighting.scss
     * _sidebar.scss
   - _pages/ *(page specific layout styles)*
     * _getting-started.scss
     * _home.scss
     * _tutorial-index.scss
     * _tutorial-single.scss
   - main.scss *(bringing it all together)*

- all_static/css/
   - main.css *(the css conversion of main.scss)*

## Deploying Changes After Editing the SCSS

   - Run `gulp build` in the root of the documentation repo after making any scss edits. This will update `main.css` as well as the [cache-bust version](https://github.com/plotly/graphing-library-docs/blob/master/_data/cache_bust_css.yml) which is used to prevent css caching.
   - Open a pull request with your scss changes plus the generated `main.css` and `cache_bust_css.yml`. A maintainer will review and merge it.

## vanilla css

If there's no need or desire to utilize the scss workflow, there's a separate css file added for quick and simple fixes or updates to the repo.

`/all_static/css/css.css`
