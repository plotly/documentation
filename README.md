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

The easiest way to do this is to follow the `Suggest an edit to this page` link at the top right of the page you are interested in contributing to:

![Bar charts in JavaScript](https://github.com/user-attachments/assets/2835bbba-19e9-4f6c-b550-2b75730f9d21)

**Note:** You don't have to worry about breaking the site when you submit a pull request! This is because your change will not be merged to production immediately. A Plotly team member will first perform a code review on your pull request.

## How To Get The Application Working Locally

For more extensive changes to Plotly's JavaScript documentation, we suggest getting the Jekyll application which builds the site to run locally so that you can test your changes as you develop them.

This involves cloning the repository and installing its dependencies: [Git](https://git-scm.com/), [Ruby](https://www.ruby-lang.org/en/), and the Python packages used by the CI scripts.

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

2. Install Ruby 2.7.4. Check your version with `ruby --version`. [RVM](https://rvm.io/rvm/install) is helpful for installing and managing Ruby versions.

3. Install all remaining dependencies (Ruby gems, Python packages, Node packages, and upstream tutorial content) in one step:

```sh
make setup
```

If you'd rather install each piece manually, run these instead:

```sh
gem install bundler && bundle install      # Ruby gems (installs Jekyll)
pip install -r requirements.txt            # Python packages
npm install                                # Node packages (for the gulp/scss workflow)
make fetch_upstream_files                  # Python, R, Julia, Matlab, C#, and F# tutorial content
```

4. Serve the Jekyll application: `bundle exec jekyll serve --config _config_dev.yml`.

5. Visit the pages at: [http://localhost:4000/](http://localhost:4000)

**Note** The default development configuration (`_config_dev.yml`) excludes `_posts/plotly_js` and `_posts/python-v3` for faster builds. If you want to include or exclude different folders, copy `_config_dev.yml`, rename it `_config_personal.yml`, and modify the `exclude` statement.

- If you name the Jekyll configuration file `_config_personal.yml`, it will be caught by the `.gitignore` file and not committed to version control.
- Run `bundle exec jekyll serve --config _config_personal.yml` to use the custom configuration file

- Example configuration that loads **only** the JavaScript posts:
```yml
# ---
# Excludes every directory except JavaScript
# ---
exclude: ['_posts/reference_pages', '_posts/ggplot2', '_posts/julia', '_posts/matlab', '_posts/node_js', '_posts/r', '_posts/python', '_posts/python-v3', '_posts/misc', '_posts/dashboards', '_posts/scala', '_posts/nodejs', 'node_modules']
```

- Example configuration that loads **every** directory:
```yml
# ---
# Excludes no directory
# ---
staticurl: http://localhost:4000/all_static
exclude: []
```

**Note** The Python, R, Julia, Matlab, C#, and F# tutorial content is not stored in this repository — it is cloned in at build time from upstream repos by `make fetch_upstream_files`. If you want those pages to render locally, run `make fetch_upstream_files` before serving.

## Continuous Integration

Whenever a pull request is made, the GitHub Actions workflow defined in [`.github/workflows/build.yml`](https://github.com/plotly/graphing-library-docs/blob/master/.github/workflows/build.yml) runs. It:
- runs `front-matter-ci.py` to validate YAML front-matter
- runs `check-or-enforce-order.py` against each tutorial directory to validate the `order` field
- builds the site with `bundle exec jekyll build`
- captures Percy snapshots for visual regression review

Making sure that a pull request passes every CI check is part of the code review process.

## Search indexes

Search on plotly.com docs pages is powered by Algolia indexes that are updated separately from the site build. There are four indexes, each updated by its own `make` target:

| Index | Search on | Update with |
| --- | --- | --- |
| `js_docs` | https://plotly.com/javascript/ | `make update_js_search` |
| `python_docs` | https://plotly.com/python/, https://plotly.com/pandas/ | `make update_python_search` |
| `r_docs` | https://plotly.com/r/, https://plotly.com/ggplot2/ | `make update_r_search` |
| `schema` | reference pages (e.g. https://plotly.com/python/reference) | `make update_ref_search` |

You can browse the indexes at https://www.algolia.com/apps/7EK9KHJW8M/explorer/browse/.

**When to update:** Run the appropriate `update_*_search` target whenever a new tutorial is added to the corresponding `_posts/` directory. Run the `schema` index update command when a new plotly.js version is released.

**How to exclude files from an index:** Each search index has its own Jekyll config (`_config_python_search.yml`, `_config_r_search.yml`, etc.) with an `algolia.excluded_files` list. Add files or paths there to keep them out of search results.

**Algolia API key:** Updating the indexes requires a private Algolia API key set as an environment variable. Request it from a Plotly maintainer via an issue on this repository.

Run `make help` to see all available `make` targets, including search-index and upstream-fetch commands.

## Other Documentation

This repository also contains:
- Plotly's Node.js, Scala, and Python V3 graphing libraries documentation
- the reference pages for Plotly's JavaScript, Python, R, and Matlab graphing libraries
- landing/index pages for the Python, R, ggplot2, Julia, Matlab, C#, and F# docs (the tutorial content for those languages is fetched from upstream repos at build time)
