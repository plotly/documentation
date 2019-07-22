# Repo Organization

Edit or add files in the `_posts` folder in the [source-design-merge](http://github.com/plotly/documentation/tree/source-design-merge) branch.

## Clone the Repo and Install Dependencies

1. Clone the repo and then check out the source-design-merge branch:

```sh
git clone git@github.com:plotly/documentation.git
git fetch origin
git checkout source-design-merge
```

2. Check Ruby version `$ ruby --version`. We recommend using `version 2.3.3` or the same ruby version as [gh-pages](https://pages.github.com/versions/). Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

3. Install bundler and dependencies from the `Gemfile`:

```sh
gem install bundler
bundle install
```

Note these dependencies should be the same version that [gh-pages](https://pages.github.com/versions/) is using.

4. When we deploy, a function is run to update the plot schema. To do this successfully you have to make sure you have the `requests` python package: `pip install requests`

## Making Changes

- For information about editing **plotly.js** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/plotly_js/README.md 
- For information about editing **python** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/python/README.md
- For information about editing **R** docs see: https://github.com/plotly/documentation/blob/source-design-merge/_posts/r/README.md
- For information about editing chart studio documentation found at [https://help.plot.ly/tutorials/](https://help.plot.ly/tutorials/) please see this repo: [https://github.com/plotly/plotly.github.io](https://github.com/plotly/plotly.github.io)

## Render Changes Locally

Please **ALWAYS** locally serve the docs and check your changes before committing updates.

1. To serve the docs locally, in the documentation repo run: `bundle exec jekyll serve --config _config_dev.yml`
2. Visit the pages at: [http://localhost:4000/python/](http://localhost:4000/python/)
3. When you make changes, jekyll should automatically regenerate for you. Read the messages in your terminal to check it out

There are a TON of posts in here, so rendering can take up to
thirty minutes! You can *limit* the number of posts that render by
excluding folders in the `_config_dev.yml` file.

For example, change `_config_dev.yml` to this:

```yml
staticurl: http://localhost:4000/all_static
exclude: [_posts/ggplot2, _posts/julia, _posts/matlab, _posts/matplotlib, _posts/nodejs, _posts/r] # [_posts/python,]
```

and you'll only load the files in `_posts/python`.

Change it to this

```yml
staticurl: http://localhost:4000/all_static
exclude: []
```

and it'll load everything.

## Make a PR
Ready for your changes to be reviewed? Make a pull request against the `source-design-merge` branch!
Create a feature branch and use `git status` to list changed files.

(Make sure that the feature branch is a branch off from `source-design-merge` local branch in your machine and not from any other previously worked branch).
```sh
git checkout -b your_feature_branch
git status
```
Add, commit, and push the files that you'd like to add to your pr:
```sh
git add file-a
git add file-b
git commit -m 'message about your changes'
git push origin your_feature_branch
```
Visit the [documentation repo](https://github.com/plotly/documentation) and open a pull request against the `source-design-merge` branch.

After your PR has been reviewed and approved, you can merge it into the `source-design-merge` branch! Your changes haven't been deployed yet so they won't be online. That said, be sure to check them after they have been deployed.

## Search

We now have search via algolia implemented on our index and reference documentation pages! Please refer to our [make README](https://github.com/plotly/documentation/blob/source-design-merge/make_instructions.txt) for more information on how search works and instructions on how to update or edit Plotly search indices.

## Style Edits

Please refer to our [Styles README](https://github.com/plotly/documentation/blob/source-design-merge/style_README.md)
