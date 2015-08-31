## repo organization
edit or add files in the `_posts` folder in the [source](http://github.com/plotly/documentation/tree/source) branch

## Converting IPython Notebooks to github pages

Check out any of the notebooks in [https://github.com/plotly/documentation/tree/source/_posts/tutorials](https://github.com/plotly/documentation/tree/source/_posts/tutorials)

The last cell of these notebooks will convert the notebook into a github pages friendly html format:

![](http://i.imgur.com/SDcuOkv.png)

## Converting R Markdown to github pages

The full bleed R pages are created with R Markdown. Here's how:
- Write your tutorial in R Markdown. Copy any of the `.Rmd` files in this folder: https://github.com/plotly/documentation/tree/source/_posts/r, e.g.  https://github.com/plotly/documentation/blob/source/_posts/r/2015-07-30-3d-line-plots.Rmd
- Convert the R Markdown to Markdown: `knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")`. Or, in the terminal: `Rscript -e 'knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")'`

## Rendering the pages locally
0. Clone the repo. `$ git clone git@github.com:plotly/documentation.git`
1. Check out the source branch:

  ```
  $ git fetch origin
  $ git checkout source
  ```
2. [Install jekyll](http://jekyllrb.com/docs/installation/) (usually as simple as `$ sudo gem install jekyll`)
3. Install a couple dependencies:

  ```
  $ sudo gem install jekyll-redirect-from
  $ sudo gem install jekyll-sitemap
  $ sudo gem install terminal-notifier
  ```
4. In the documentation repo: `$ jekyll serve --config _config_dev.yml`
5. Visit the pages at: [http://localhost:4000/python/](http://localhost:4000/python/)
6. When you make changes, jekyll should automatically regenerate for you. Read the messages in your terminal to check it out

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

## Deploying changes
Our repo has become too big for github to process. Edit files on the `source` branch instead of the `gh-pages` branch.

To deploy, first install `_config.yml` package dependencies:
```
documentation (source) $ sudo gem install jekyll-redirect-from
documentation (source) $ sudo gem install jekyll-sitemap
documentation (source) $ sudo gem install terminal-notifier

```

Then, deploy changes with:
```
documentation (source) $ rake deploy
```

(from the `source` branch in the root of the `documentation` repo)
