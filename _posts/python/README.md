# Contribute to Plotly's [Python Documentation](https://plot.ly/python/)
## Initial Steps:
1. Clone the repo and then check out the source-design-merge branch:

  ```
  $ git clone git@github.com:plotly/documentation.git
  $ git fetch origin
  $ git checkout source-design-merge
  ```

2. Check Ruby version `$ ruby --version`. We recommend using `version 2.3.3` or the same ruby version as gh-pages: https://pages.github.com/versions/. Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

3. Install bundler and a couple dependencies from the gemfile:

  ```
  $ gem install bundler
  $ bundle install

  ```
<b>IMPORTANT</b> -If not using bundler and the gemfile, [install the same jekyll version that GitHub Pages is using](https://pages.github.com/versions/).

## Create Python Documentation:
Our python tutorials are written in [ipython notebooks](http://ipython.org/notebook.html) (.ipynb file)
##### In `documentation/_posts/python`
1. Create a folder titled with the chart type or topic you're adding to the documentation (i.e. `table`)  
2. `cd` into the folder you created and run `ipython notebook`
  - From the <b>New</b> dropdown create a new notebook and title it based on the type of chart you're adding to the documentation.
3. Base your tutorial structure off of one of our existing tutorials (i.e. `documentation/_posts/python/table/table.ipynb`)
4. The first cell should be a markdown cell with the following text:

    ```
    #### New to Plotly?
    Plotly's Python library is free and open source! [Get started](https://plot.ly/python/getting-started/) by downloading the client and [reading the primer](https://plot.ly/python/getting-started/).
    <br>You can set up Plotly to work in [online](https://plot.ly/python/getting-started/#initialization-for-online-plotting) or [offline](https://plot.ly/python/getting-started/#initialization-for-offline-plotting) mode, or in [jupyter notebooks](https://plot.ly/python/getting-started/#start-plotting-online).
    <br>We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/python_cheat_sheet.pdf) (new!) to help you get started!
    ```

5. **IF** you're adding a doc about a new feature, the second and third cells will display a version check. This is to ensure the reader has updated to the necessary version. This is especially applicable to FigureFactory docs. You can refer to the python api [CHANGELOG](https://github.com/plotly/plotly.py/blob/master/CHANGELOG.md) to check the appropriate version #. Example of a version check:   
  - markdown cell:
      ```
      #### Version Check
      Plotly's python package is updated frequently. Run `pip install plotly --upgrade` to use the latest version.
      ```

  - code cell:
      ```
      import plotly
      plotly.__version__
      ```

6. Best Practices:
  - <b>Now we have an awesome navigation bar on the left side of our tutorial pages.</b> The navigation bar displays the headers you add to your notebook so add a header for each example and try to make headers as informative and concise as possible. Furthermore, capitalize all headers (except for `code`). Ex: `#### Basic Line Chart`
  - Order examples from basic -> advanced.
  - Run examples with user: `PythonPlotBot`
  - Keep import order consistent and import plotly packages first, then a space, then additional packages. For example:

    ```
    import plotly.plotly as py
    import plotly.graph_objs as go

    import pandas as pd
    import numpy as np
    ```

  - Try and write all of the code for a given example in a *single* ipython notebook cell. This makes it easier for users to use the `copy to clipboard` button that appears on the codeblocks and easily/quickly reproduce each example.
  - If you're using "real" data, upload the datafile to https://github.com/plotly/datasets then import data rather than pasting a large chunk of data in the tutorial. (Using random data is okay for some examples too :) )

7. The last content cell of your notebook should be a markdown cell with:

    ```
    #### Reference
    See https://plot.ly/python/reference/##heatmap for more information and chart attribute options!
    ```

  where `https://plot.ly/python/reference/##heatmap` is replaced with the pertinent link(s) to our python [reference
  page](https://plot.ly/python/reference/)!

  and/or provide a help call:
    `help(FF.create_table)` (*This applies to documentation on FigureFactory functions)

8. Convert your .ipynb to a .html file by adding the following code snippet as the last cell of your notebook.
  - Replace `your-tutorial-chart` with the type of chart you're creating in the tutorial.)
  - Please be diligent about adding this information completely and in the order as it appears here (this is really helpful if future edits are necessary :D )

  ```
  from IPython.display import display, HTML

  display(HTML('<link href="//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700" rel="stylesheet" type="text/css" />'))
  display(HTML('<link rel="stylesheet" type="text/css" href="http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css">'))

  ! pip install git+https://github.com/plotly/publisher.git --upgrade
  import publisher
  publisher.publish(
      'your-tutorial-chart.ipynb', 'python/your-tutorial-chart/', 'Your Tutorial Chart',
      'How to make your-tutorial-chart plots in Python with Plotly.',
      title = 'Python Your Tutorial Chart | Plotly',
      has_thumbnail='true', thumbnail='thumbnail/your-tutorial-chart.jpg',
      language='python',
      # page_type='example_index', // note this is only if you want the tutorial to appear on the main page: plot.ly/python
      display_as='chart_type', order=2, ipynb='~notebook_demo/1',
      uses_plotly_offline=False*)
  ```
  - always include a trailing slash in the permalink (i.e. python/your-tutorial-chart/)
  - `display_as` sets in which section your tutorial is displayed
    - 'basic' = https://plot.ly/python/#basic-charts
    - 'statistical' = https://plot.ly/python/#statistical-charts
    - 'scientific' = https://plot.ly/python/#scientific-charts
    - 'financial' = https://plot.ly/python/#financial-charts
    - 'maps' = https://plot.ly/python/#maps
    - '3d_charts' = https://plot.ly/python/#3d-charts
    - See additional options [HERE](https://github.com/plotly/documentation/blob/source-design-merge/_includes/documentation_eg.html#L1)
  - `order` defines the order in which the tutorials appear on plot.ly/python. Please take a look at https://plot.ly/python/ and order your tutorial next to similar chart types. <b>Note</b> `order` can be a float.
  - `uses_plotly_offline` is an optional argument, include as `True` if you're creating an offline doc.

9. Now we can upload/download jupyter (ipython) notebooks to Plotly!!!!
  - There is a button in our side navigation bar of the python docs so users can click the button and see the notebook hosted on plot.ly where they can download it and run it to follow along with the documentation.
  - Use the bubble chart doc: https://plot.ly/python/bubble-charts/ as an example.
  - Here are step by step instructions of how to enable the `Download THIS Notebook` button:
    1. Copy the notebook from the folder. For example from the [bubble folder](https://github.com/plotly/documentation/tree/source-design-merge/_posts/python/bubble), copy `bubble.ipynb`.
    2. Run `ipython notebook` or `jupyter notebook` and remove the publisher cell from your copy. (The publisher cell is the last cell that we add to our doc notebooks to convert the `.ipynb` to `html`. We do not need to upload this. _Do not remove this cell from the .ipynb in the doc repo_). Save.
    3. Upload the copy to the `notebook_demo` Plotly account.
    4. View the notebook: the link is: https://plot.ly/~notebook_demo/1/new-to-plotly-plotlys-python-library-i/ Grab the username + file id # from the link: `~notebook_demo/1` and add it to the publisher cell in the original .ipynb file in the doc repo. See example publisher cell below.

10. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart.
  - Use images.plot.ly for adding new images.
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file

##### In the terminal in `documentation`
9. Make a PR

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

10. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally

##### At https://plot.ly/python
11. Your changes haven't been deployed yet so they won't be online. That said, <b>PLEASE</b> visit https://plot.ly/python/your-tutorial and make sure everything looks correct once they have been deployed by either **@cldougl** or **@bcdunbar**.

  - Some common problems that you should check for:
    - Make sure all plots appear! (*you may want to sign out of your Plotly account to ensure you didn't accidentally embed private plots)
    - There are no empty notebook cells
    - The thumbnail image appears on: https://plot.ly/python/

## Search

We now have search via algolia implemented on our index and reference documentation pages! Please refer to our [make README](https://github.com/plotly/documentation/blob/source-design-merge/make_instructions.txt) for more information on how search works and instructions on how to update or edit Plotly search indices.

Thanks for contributing to our documentation!!
