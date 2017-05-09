## Repo Organization
Edit or add files in the `_posts` folder in the [source-design-merge](http://github.com/plotly/documentation/tree/source-design-merge) branch.

## Clone the Repo and Install Dependencies 
0. Clone the repo. `$ git clone git@github.com:plotly/documentation.git`
1. Check out the source-design-merge branch:

  ```
  $ git fetch origin
  $ git checkout source-design-merge
  ```
2. [Install jekyll](http://jekyllrb.com/docs/installation/). **Important** - Install the same Jekyll version as gh-pages: https://pages.github.com/versions/

  ```
  $ gem install jekyll -v 3.x.x
  ```
3. Install bundler and a couple dependencies from the `gemfile`:

  ```
  $ gem install bundler
  $ bundle install
  ```

4. When we deploy, a function is run to update the plot schema. To do this successfully you have to make sure you have the `requests` python package: `pip install requests`

## Making Changes
For information about editing **plotly.js** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/plotly_js/README.md 
For information about editing **python** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/python/README.md
For information about editing **R** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/r/README.md

## Render Changes Locally
Please **ALWAYS** locally serve the docs and check your changes before commiting updates.
1. To serve the docs locally, in the documentation repo run: `$ jekyll serve --config _config_dev.yml`
2. Visit the pages at: [http://localhost:4000/python/](http://localhost:4000/python/)
3. When you make changes, jekyll should automatically regenerate for you. Read the messages in your terminal to check it out

There are a TON of posts in here, so rendering can take up to
thirty minutes! You can *limit* the number of posts that render by
excluding folders in the `_config_dev.yml` file.

For example, change `_config_dev.yml` to this:

```
staticurl: http://localhost:4000/all_static
exclude: [_posts/ggplot2, _posts/julia, _posts/matlab, _posts/matplotlib, _posts/nodejs, _posts/r] # [_posts/python,]
```

and you'll only load the files in `_posts/python`.

Change it to this

```
staticurl: http://localhost:4000/all_static
exclude: []
```

and it'll load everything.

## Deploying Changes
Our repo has become too big for github to process. Edit files on the `source-design-merge` branch instead of the `gh-pages` branch.

To deploy, first install `_config.yml` package dependencies:
```
documentation (source-design-merge) $ sudo gem install jekyll-redirect-from
documentation (source-design-merge) $ sudo gem install jekyll-sitemap
documentation (source-design-merge) $ sudo gem install terminal-notifier
documentation (source-design-merge) $ sudo gem install jemoji
documentation (source-design-merge) $ sudo gem install redcarpet

```

Then, deploy changes with:
```
documentation (source-design-merge) $ rake deploy
```

(from the `source-design-merge` branch in the root of the `documentation` repo)

## Style Edits

Please refer to our [Styles README](https://github.com/plotly/documentation/blob/source-design-merge/Styles.md)
