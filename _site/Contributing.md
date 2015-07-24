## Converting IPython Notebooks to gh-pages

1. Move your IPython notebook to somewhere relevant in the repo. e.g. in some folder inside `_posts`.
2. `pip install publisher --upgrade`
3. Add another cell to your notebook with `publisher.publish(notebook_name, url_path, page_title, page_description)`. What're these arguments? call `help(publisher.publish)`. This will convert your notebook into an HTML page that gh-pages understands. Example: ![](http://i.imgur.com/SDcuOkv.png), [https://github.com/plotly/documentation/blob/gh-pages/_posts/user_guide_python/Plotly%20Offline.ipynb](https://github.com/plotly/documentation/blob/gh-pages/_posts/user_guide_python/Plotly%20Offline.ipynb)


## Rendering the pages locally
0. Clone the repo. `$ git clone git@github.com:plotly/documentation.git`
1. Check out the gh-pages branch: 

  ```
  $ git fetch origin
  $ git checkout gh-pages
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
