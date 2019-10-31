# Contribute to Plotly's [R Documentation](https://plot.ly/r/)
## Initial Steps:
1. Clone the repo and then check out the source-design-merge branch:

  ```
  $ git clone git@github.com:plotly/documentation.git
  $ git fetch origin
  $ git checkout source-design-merge
  ```

2. Check Ruby version `$ ruby --version`. We recommend using the same ruby version as gh-pages: https://pages.github.com/versions/. Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

3. Install bundler and a couple dependencies from the gemfile:

  ```
  $ gem install bundler
  $ bundle install

  ```
<b>IMPORTANT</b> -If not using bundler and the gemfile, [install the same jekyll version that GitHub Pages is using](https://pages.github.com/versions/).

## Create R Documentation:

##### In `documentation/_posts/r`
1. Write your tutorial in R Markdown (Rmd) file (**IMPORTANT:** do not edit the markdown (md) files by hand! All edits should happen in the .Rmd file! The *only* exception to this is the index file: `2015-07-30-r-index.md` which you should edit directly.)
  - Your .Rmd file should be named in the following format: `yyyy-mm-dd-chart-type.Rmd`
  - Please base your tutorial off of one of our exsisting tutorials (i.e. `documentation/_posts/r/2015-11-19-shapes.Rmd`)
      - Include the following header (*replacing `your-tutorial-chart` with the type of chart you're creating in the tutorial.) :
      ```
      ---
      name: Your-Tutorial-Chart
      permalink: r/your-tutorial-chart/
      description: How to create your-tutorial-chart in R. Short description of your tutorial.
      layout: base
      thumbnail: thumbnail/your-tutorial-chart.jpg *see step 2 for further thumbnail instructions*
      language: r
      page_type: example_index
            display_as: chart_type
      order: 9 *see below for order instructions*
      output:
        html_document:
          keep_md: true
      ---
      ```
      *`order` defines the order in which the tutorials appear on plot.ly/r. Please take a look at https://plot.ly/r/ and order your tutorial next to similar chart types.
      - Under the header, include the following r code snippet. That first line of R code ensures that all subsequent code chunks do not relay message(s) or output results. That's because, in most cases, we want to provide code that produces an "offline" plot, but since [Jekyll and htmlwidgets aren't compatible](https://github.com/yihui/knitr-jekyll/issues/8#issuecomment-104112826), we're forced to embed plots as iframes.

      ```
        ```{r, echo = FALSE, message=FALSE}
            knitr::opts_chunk$set(message = FALSE, warning=FALSE)
            Sys.setenv("plotly_username"="RPlotBot")
            Sys.setenv("plotly_api_key"="q0lz6r5efr")```
      ```
    - New to Plotly and Version Check sections:
      ```
        ### New to Plotly?

        Plotly's R library is free and open source!<br>
        [Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/).<br>
        You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode.<br>
        We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

        ### Version Check

        Version 4 of Plotly's R package is now [available](https://plot.ly/r/getting-started/#installation)!<br>
        Check out [this post](http://moderndata.plot.ly/upgrading-to-plotly-4-0-and-above/) for more information on breaking changes and new features available in this version.
          ```{r, results = 'hide'}
          library(plotly)
          packageVersion('plotly')```
      ```

    - To include r code and plots in the tutorial format the code snippets and plots in the following format:

    ```
      ```{r, results = 'hide'}
      library(plotly)
      #Add your R Code Here i.e.:
      p <- plot_ly(economics, x = ~date, y = ~uempmed, name = "unemployment")
      p

      # Create a shareable link to your chart
      # Set up API credentials: https://plot.ly/r/getting-started
      chart_link = api_create(p, filename="your-chart-type-your-filename")
      chart_link```
    ```

    ```
      ```{r, echo=FALSE}
      chart_link```
    ```


2. Convert the `.Rmd` file to a `.md` file.
  - Single `.Rmd` file: convert the `.Rmd` file that you changed to a `.md` file by running: `Rscript -e 'knitr::knit("YOUR_FILE.Rmd")'` in your terminal.

  -Convert all the `.Rmd` files in your current directory: `for (i in dir(pattern = "\\.Rmd")) knitr::knit(i)` Or, in the terminal (`documentation/_posts/r`) with: `Rscript -e 'for (i in dir(pattern = "\\\.Rmd")) knitr::knit(i)'`

3. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart.
  - Use images.plot.ly for adding new images.
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file

##### In the terminal in `documentation`
4. Make a PR

  - Ready for your changes to be reviewed? Make a pull request against the `source-design-merge` branch!
  Create a feature branch and use `git status` to list changed files.
  ```
  git checkout -b your_feature_branch
  git status
  ```
  - Add, commit, and push the files that you'd like to add to your PR:
  ```
  git add file-a
  git add file-b
  git commit -m 'message about your changes'
  git push origin your_feature_branch
  ```
  - Visit the [documentation repo](https://github.com/plotly/documentation) and open a pull request against the `source-design-merge` branch. You can then tag **@cldougl** and **@bcdunbar** for a review.

5. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source-design-merge/Contributing.md#rendering-the-pages-locally

##### At https://plot.ly/r
6. Your changes haven't been deployed yet so they won't be online. That said, <b>PLEASE</b> visit https://plot.ly/r/your-tutorial and make sure everything looks correct once they have been deployed by either **@cldougl** or **@bcdunbar**.

  - Some common problems that you should check for:
    - Make sure all plots appear!
    - The thumbnail image appears on: https://plot.ly/r/

## Search

We now have search via algolia implemented on our index and reference documentation pages! Please refer to our [make README](https://github.com/plotly/documentation/blob/source-design-merge/make_instructions.txt) for more information on how search works and instructions on how to update or edit Plotly search indices.

Thanks for contributing to our documentation!!
