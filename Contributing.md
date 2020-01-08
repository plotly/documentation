# Contributing to Plotly's Graphing Libraries Documentation

Plotly welcomes contributions to its [open-source graphing libraries documentation](https://plot.ly/graphing-libraries) from its community of users.

The `source-design-merge` branch of this repository hosts a Jekyll application hosted on GitHub Pages that serves Plotly's graphing libraries documentation. 

The index page for the documentation website is located at https://plot.ly/graphing-libraries. 

### plotly.js

Please be aware that **only the content of Plotly's JavaScript graphing library documentation** (hosted at https://plot.ly/javascript) is contained in this repository. You can find the content in the `_posts/plotly_js` directory. 

For information about editing **plotly.js** documentation [click here](https://github.com/plotly/documentation/blob/readme-updates/_posts/plotly_js/README.md).

### plotly.py

The content for Plotly's Python graphing library documentation (hosted at https://plot.ly/python) **IS NOT** contained in this repository. It is contained in the `plotly.py` repository at https://github.com/plotly/plotly.py/tree/master/doc and is cloned into this repository at build time. 

For information about editing **plotly.py** documentation [click here](https://github.com/plotly/plotly.py/blob/master/doc/README.md).

### plotly.r

The content for Plotly's R graphing library documentation (hosted at https://plot.ly/r) **IS NOT** contained in this repository. It is contained in the `plotly.r-docs` repository at https://github.com/plotly/plotly.r-docs/ and is cloned into this repository at build time.  

For information about editing Plotly's **R** documentation [click here](https://github.com/plotly/plotly.r-docs/blob/master/README.md).

**For more information about the build process, inspect the CircleCI configuration file in this repository at https://github.com/plotly/documentation/blob/source-design-merge/.circleci/config.yml.**
  
## Contribute Quickly to Plotly's JavaScript Graphing Library Documentation
  
To quickly make a contribution to Plotly's JavaScript graphing libraries documentation, simply submit a pull request with the change you would like to suggest to the `source-design-merge` branch of this repository.

The easiest way to do this is to follow the `Edit this page on GitHub` link at the top right of the page you are interested in contributing to:

![Screen Shot 2020-01-07 at 12 45 39 PM](https://user-images.githubusercontent.com/1557650/71916356-bfe53800-314b-11ea-92b6-eb763037f6d5.png)

**You don't have to worry about breaking the site when you submit a pull request!** This is because your change will not be merged to production immediately. A Plotly team member will first perform a code review on your pull request. 

## How To Get The Application Working Locally

For more extensive changes to Ploty's JavaScript documentation, we suggest getting the Jekyll application which builds the site to run locally so that you can test your changes as you develop them. 

This involves cloning the repository and installing its dependencies: [Git](https://git-scm.com/), [Ruby]((https://www.ruby-lang.org/en/), [Jekyll](https://jekyllrb.com/), and the [Python `requests` package](https://pypi.org/project/requests/). 

1. Use [`git`](https://git-scm.com/) to [clone](https://git-scm.com/docs/git-clone) the public `plotly/documentation` repository. Then [check out] (https://git-scm.com/docs/git-checkout) the source-design-merge branch of the `git` repository.

To do so, run the following commands in your terminal:

```sh
git clone git@github.com:plotly/documentation.git
git fetch origin
git checkout source-design-merge
```

Running `git status` in your terminal should then output the following:

```sh
On branch source-design-merge
Your branch is up to date with 'origin/source-design-merge'.

nothing to commit, working tree clean
```

2. Download Ruby and check your `Ruby` version by running the `ruby --version` command in your terminal. 

We recommend using `version 2.3.3` or the same ruby version as [gh-pages](https://pages.github.com/versions/). Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

3. Download Jekyll and check your Jekyll version by running the `jekyll -v` command in your terminal. We recommend using the same ruby version as [gh-pages](https://pages.github.com/versions/).

4. Install bundler and dependencies from the Jekyll applicaton's [`Gemfile`](https://github.com/plotly/documentation/blob/source-design-merge/Gemfile) by running the following commands in your terminal:

```sh
gem install bundler
bundle install
```

Note these dependencies should be the same version that [gh-pages](https://pages.github.com/versions/) is using.

5. Serve the Jekyll application: `bundle exec jekyll serve --config _config_dev.yml`.
6. Visit the pages at: [http://localhost:4000/](http://localhost:4000)
7. When you make changes, Jekyll should automatically regenerate the application for you. Read the messages in your terminal to check it out.

You can limit the number of posts that render by [excluding folders](https://jekyllrb.com/docs/configuration/options/) from being served using custom Jekyll configuration options. 

To do so, create a `_config_personal.yml` file:

```yml
staticurl: http://localhost:4000/all_static
exclude: [_posts/ggplot2, _posts/julia, _posts/matlab, _posts/matplotlib, _posts/nodejs, _posts/r, posts/python] # [_posts/plotly_js,]
```

and you'll only load the files in `_posts/plotly_js`.

Change it to this:

```yml
staticurl: http://localhost:4000/all_static
exclude: []
```

and it'll load everything.