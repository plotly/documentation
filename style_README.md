# Styles

The styling for this repo is broken up into two different parts: [gulp](https://github.com/plotly/documentation/blob/source-design-merge/gulpfile.js) + browsersync + sass and vanilla css.

It is recommended to use something to create a local server environment such as MAMP Pro which allows you to set virtual hosts (e.g.: http://api.plotly.dev)

## gulp + browsersync + scss

This repo is set up to run with a [gulp](https://github.com/plotly/documentation/blob/source-design-merge/gulpfile.js) + sass + browsersync workflow. Essentially what this does is leverages a local server to display the site and when you make updates to the scss files they will be live injected into the site to see the immediate effects of your changes.

The scss and jekyll instance have been separated to allow for faster updates to the scss independent of the markup.

### Usage

Once the repo has been cloned successfully (see [Contributing.md](https://github.com/plotly/documentation/blob/source-design-merge/Contributing.md)), run `$ npm install` to install gulp and the necessary dependencies.

Generally it's best to work with two instances of terminal, one to use for anything related to `$ jekyll` and then another to keep the `$ gulp` task running.

1. run `$ jekyll serve --config _config_dev.yml` to create a local server @ http://localhost:4000 that browsersync leverages (see gulpfile.js to adjust as needed)

OR

1. run `$ jekyll build --config _config_dev.yml` and leverage a local server @ http://api.plotly.dev through a service like MAMP Pro that browsersync leverages (see gulpfile.js to adjust as needed)
2. run `$ gulp`
3. make any updates to the scss files

### markup + scss workflow

It's a bit of a hassle to make concurrent updates to markup and scss. Anytime you update an html/js file you'll have to run a `$ jekyll build` command or `$ jekyll serve` and have jekyll watching for changes. I have found issues with jekyll's watch being too sensitive and have opted to build when I choose to prevent long hangs because of the size of the repo. 
When you run a `$ jekyll` you need to update any scss file as jekyll will automatically replace the styles.css file. e.g.: if you modify any scss file and save it, it will overwrite the file jekyll has produced.

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

   - Run `gulp build` in the root of the documentation repo after making any scss edits. This will update `main.css` as well as the [version](https://github.com/plotly/documentation/blob/source-design-merge/_data/cache_bust_css.yml) which is used to prevent css caching.
   - `git add` the files you've changed as well as the generated `main.css` and `cache_bust_css.yml` files, `git commit -m 'message about update'`, and `git push origin source-design-merge` to add your updates to the repo.
   - run `rake deploy` to deploy changes.

## vanilla css

If there's no need or desire to utilize the scss workflow, there's a separate css file added to add quick and simple fixes or updates to the repo.

`/all_static/css/css.css`

Last updated: 05.09.2016
