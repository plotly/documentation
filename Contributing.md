## Repo Organization
edit or add files in the `_posts` folder in the [source-design-merge](http://github.com/plotly/documentation/tree/source-design-merge) branch

## Converting IPython Notebooks to github pages

Check out any of the notebooks in [https://github.com/plotly/documentation/tree/source-design-merge/_posts/tutorials](https://github.com/plotly/documentation/tree/source-design-merge/_posts/tutorials)

The last cell of these notebooks will convert the notebook into a github pages friendly html format:

```
from IPython.display import display, HTML

display(HTML('<link href="//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700" rel="stylesheet" type="text/css" />'))
display(HTML('<link rel="stylesheet" type="text/css" href="http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css">'))

! pip install git+https://github.com/plotly/publisher.git --upgrade
import publisher
publisher.publish(
    'your-tutorial-chart.ipynb', 'python/your-tutorial-chart/', 'Your Tutorial Chart | plotly',
    'How to make your-tutorial-chart plots in Python with Plotly.',
    title = 'Python Your Tutorial Chart | plotly',
    name = 'Your Tutorial Chart',
    has_thumbnail='true', thumbnail='thumbnail/your-tutorial-chart.jpg', 
    language='python', page_type='example_index',
    display_as='chart_type', order=2)  
```

## Converting R Markdown to github pages

The full bleed R pages are created with R Markdown. Here's how:
- Write your tutorial in R Markdown. Copy any of the `.Rmd` files in this folder: https://github.com/plotly/documentation/tree/source-design-merge/_posts/r, e.g.  https://github.com/plotly/documentation/blob/source-design-merge/_posts/r/2015-07-30-3d-line-plots.Rmd
- Convert the R Markdown to Markdown: `knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")`. Or, in the terminal: `Rscript -e 'knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")'`

## Rendering the pages locally
0. Clone the repo. `$ git clone git@github.com:plotly/documentation.git`
1. Check out the source-design-merge branch:

  ```
  $ git fetch origin
  $ git checkout source-design-merge
  ```
2. Install the dependencies with bundler:

  ```
  $ bundle install
  ```
4. In the documentation repo: `$ bundle exec jekyll serve --config _config_dev.yml`
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
Our repo has become too big for github to process. Edit files on the `source-design-merge` branch instead of the `gh-pages` branch.

To deploy, first run `$ bundle install` to install the dependencies (step 2 above).

Then, deploy changes with:
```
documentation (source-design-merge) $ bundle exec rake deploy
```

(from the `source-design-merge` branch in the root of the `documentation` repo)

## Style Edits

Please refer to our [Styles README](https://github.com/plotly/documentation/blob/source-design-merge/Styles.md)
