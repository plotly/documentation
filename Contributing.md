## Converting IPython Notebooks to gh-pages

1. Move your IPython notebook to somewhere relevant in the repo. e.g. in some folder inside `_posts`.
2. `pip install publisher --upgrade`
3. Add another cell to your notebook with `publisher.publish(notebook_name, url_path, page_title, page_description)`. What're these arguments? call `help(publisher.publish)`. This will convert your notebook into an HTML page that gh-pages understands. Example: ![](http://i.imgur.com/SDcuOkv.png), [https://github.com/plotly/documentation/blob/gh-pages/_posts/user_guide_python/Plotly%20Offline.ipynb](https://github.com/plotly/documentation/blob/gh-pages/_posts/user_guide_python/Plotly%20Offline.ipynb)


## Testing locally
1. Install jekyll
2. `$ jekyll server --config _config_dev.yml`

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
