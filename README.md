# Contributing to Plotly's Graphing Libraries Documentation

<div align="center">
  <a href="https://dash.plotly.com/project-maintenance">
    <img src="https://dash.plotly.com/assets/images/maintained-by-plotly.png" width="400px" alt="Maintained by Plotly">
  </a>
</div>


## Repo Overview

Plotly welcomes contributions to its [open-source graphing libraries documentation](https://plotly.com/graphing-libraries) from its community of users.

This repository mainly serves:
- Plotly's graphing libraries documentation index page at https://plotly.com/graphing-libraries.

- Plotly's JavaScript graphing library documentation at https://plotly.com/javascript
    - Please be aware that **only the content of Plotly's JavaScript graphing library documentation** (hosted at https://plotly.com/javascript) is contained in this repository. You can find the content in the `_posts/plotly_js` directory.
    - For information about editing **plotly.js** documentation [click here](https://github.com/plotly/graphing-library-docs/blob/master/_posts/plotly_js/README.md).

- Plotly's Python graphing library documentation at https://plotly.com/python
    - The content for Plotly's Python graphing library documentation (hosted at https://plotly.com/python) **IS NOT** contained in this repository. It is contained in the `plotly.py` repository at https://github.com/plotly/plotly.py/tree/master/doc and is cloned into this repository at build time.
    - For information about editing **plotly.py** documentation [click here](https://github.com/plotly/plotly.py/blob/master/doc/README.md).

- Plotly's R graphing library documentation at https://plotly.com/r
    - The content for Plotly's R graphing library documentation (hosted at https://plotly.com/r) **IS NOT** contained in this repository. It is contained in the `plotly.r-docs` repository at https://github.com/plotly/plotly.r-docs/ and is cloned into this repository at build time.
    - For information about editing Plotly's **R** documentation [click here](https://github.com/plotly/plotly.r-docs/blob/master/README.md).

## Contribute Quickly to Plotly's JavaScript Graphing Library Documentation

To quickly make a contribution to Plotly's JavaScript graphing libraries documentation, simply submit a pull request with the change you would like to suggest.

The easiest way to do this is to follow the `Edit this page on GitHub` link at the top right of the page you are interested in contributing to:

![Screen Shot 2020-01-07 at 12 45 39 PM](https://user-images.githubusercontent.com/1557650/71916356-bfe53800-314b-11ea-92b6-eb763037f6d5.png)

**Note:** You don't have to worry about breaking the site when you submit a pull request!** This is because your change will not be merged to production immediately. A Plotly team member will first perform a code review on your pull request.

## How To Get The Application Working Locally

For more extensive changes to Ploty's JavaScript documentation, we suggest getting the Jekyll application which builds the site to run locally so that you can test your changes as you develop them.

This involves cloning the repository and installing its dependencies: [Git](https://git-scm.com/), [Ruby]((https://www.ruby-lang.org/en/), [Jekyll](https://jekyllrb.com/), and the [Python `requests` package](https://pypi.org/project/requests/).

1. Use [`git`](https://git-scm.com/) to [clone](https://git-scm.com/docs/git-clone) the public `plotly/graphing-library-docs` repository.

To do so, run the following commands in your terminal:

```sh
git clone git@github.com:plotly/graphing-library-docs.git
cd graphing-library-docs
```

Running `git status` in your terminal should then output the following:

```sh
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

2. Download Ruby and check your `Ruby` version by running the `ruby --version` command in your terminal.

**Note:** We recommend using `version 2.7.4`, the same ruby version as [gh-pages](https://pages.github.com/versions/). Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

3. Download Jekyll and check your Jekyll version by running the `jekyll -v` command in your terminal. We recommend using the same ruby version as [gh-pages](https://pages.github.com/versions/).

4. Install bundler and dependencies from the Jekyll applicaton's [`Gemfile`](https://github.com/plotly/graphing-library-docs/blob/master/Gemfile) by running the following commands in your terminal:

```sh
gem install bundler
bundle install
```

**Note:** These dependencies should be the same version that [gh-pages](https://pages.github.com/versions/) is using.

5. Serve the Jekyll application: `bundle exec jekyll serve --config _config_dev.yml`.

6. Visit the pages at: [http://localhost:4000/](http://localhost:4000)

**Note** The default Jekyll configuration file only builds the JavaScript posts by [excluding folders](https://jekyllrb.com/docs/configuration/options/). If you want to override this behavior, serve the application with a custom Jekyll configuration file in the root of the repository. Do this by copying `_config_dev.yml`, renaming it `_config_personal.yml`, and modifying the `exclude` statement.

- If you name the Jekyll configuration file `_config_personal.yml`, it will be caught by the `.gitignore` file and not committed to version control.
- Run `bundle exec jekyll serve --config _config_personal.yml` to use the custom configuration file

- Example configuration:
```yml
# ---
# Excludes every directory except JavaScript
# ---
exclude: ['_posts/reference_pages', _posts/ggplot2','_posts/julia','_posts/matlab','_posts/node_js','_posts/r','_posts/python','_posts/python-v3','_posts/misc','_posts/dashboards',_posts/scala', '_posts/nodejs', 'node_modules']
```

and you'll only load the files in `_posts/plotly_js` directory because that is the only directory that is not excluded.

Change it to this:

```yml
# ---
# Excludes no directory
# ---
staticurl: http://localhost:4000/all_static
exclude: []
```

and you'll load every file because no directories are excluded.

## Continuous Integration

Whenever a pull request is made, a continuous integration workflow is initiated. This includes of:
    - running the `check-or-enforce-order.py` and `front-matter-ci.py` scripts inside of a Docker container to validate YAML front-matter
    - Percy screenshot testing

Making sure that a pull request passes every continuous integration test is a part of the code review process.

**For more information about the build process, inspect the CircleCI configuration file in this repository at https://github.com/plotly/graphing-library-docs/blob/master/.circleci/config.yml.**

## Other Documentation

This repository also contains:
    - Plotly's Node.js, Matlab, Scala, Julia, and Python V3 graphing libraries documentation
    - the reference pages for Plotly's JavaScript, Python, R, and Matlab graphing libraries.
