## repo organization
edit or add files in the `_posts` folder in the [source](http://github.com/plotly/documentation/tree/source) branch

## Converting IPython Notebooks to github pages

Check out any of the notebooks in [https://github.com/plotly/documentation/tree/source/_posts/tutorials](https://github.com/plotly/documentation/tree/source/_posts/tutorials)

The last cell of these notebooks will convert the notebook into a github pages friendly html format:

![](http://i.imgur.com/SDcuOkv.png)


## Rendering the pages locally
0. Clone the repo. `$ git clone git@github.com:plotly/documentation.git`
1. Check out the source branch:

  ```
  $ git fetch origin
  $ git checkout source
  ```
2. [Install jekyll](http://jekyllrb.com/docs/installation/) (usually as simple as `$ sudo gem install jekyll`)
3. In the documentation repo: `$ jekyll serve --config _config_dev.yml`
4. Visit the pages at: [http://localhost:4000/python/](http://localhost:4000/python/)
5. When you make changes, jekyll should automatically regenerate for you. Read the messages in your terminal to check it out

There are a TON of posts in here, so rendering can take up to
six minutes! You can *limit* the number of posts that render by
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
Our repo has become too big for github to process. Edit files on the `source` branch instead of the `gh-pages` branch. Deploy changes locally with:
```
.../documentation (source) $ rake deploy
```

from the `source` branch
