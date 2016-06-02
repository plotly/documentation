# Contribute to Plotly's [Python Documentation](https://plot.ly/python/)
## Initial Steps:
0. Clone the repo and then check out the source-design-merge branch:

  ```
  $ git clone git@github.com:plotly/documentation.git
  $ git fetch origin
  $ git checkout source-design-merge
  ```
1. [Install jekyll](http://jekyllrb.com/docs/installation/). <b>IMPORTANT</b> - [Install the same version that Github Pages is using: 3.0.3](https://pages.github.com/versions/):

  ```
  $ gem install jekyll -v 3.0.3
  ```
2. Install some dependencies:

  ```
  $ sudo gem install jekyll-redirect-from
  $ sudo gem install jekyll-sitemap
  $ sudo gem install terminal-notifier
  $ sudo gem install jemoji
  $ sudo gem install redcarpet
  ```

## Create Python Documentation:
Our python tutorials are written in [ipython notebooks](http://ipython.org/notebook.html) (.ipynb file)
##### In `documentation/_posts/python`
1. Create a folder titled with the chart type or topic you're adding to the documentation (i.e. `table`)  
2. `cd` into the folder you created and run `ipython notebook`
  - From the <b>New</b> dropdown create a new notebook and title it based on the type of chart you're adding to the documentation.
3. Base your tutorial structure off of one of our exsisting tutorials (i.e. `documentation/_posts/python/table/table.ipynb`)
4. The first cell should be a markdown cell with the following text:
  
    ```
    #### New to Plotly?
    Plotly's Python library is free and open source! [Get started](https://plot.ly/python/getting-started/) by dowloading the client and [reading the primer](https://plot.ly/python/getting-started/).
    <br>You can set up Plotly to work in [online](https://plot.ly/python/getting-started/#initialization-for-online-plotting) or [offline](https://plot.ly/python/getting-started/#initialization-for-offline-plotting) mode, or in [jupyter notebooks](https://plot.ly/python/getting-started/#start-plotting-online).
    <br>We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/python_cheat_sheet.pdf) (new!) to help you get started!
    ```

5. **IF** you're adding a doc about a new feature, the second and third cells will display a version check. This is to ensure the reader has updated to the necessary version. This is especially applicable to FigureFactory docs. You can refer to the python api [CHANGELOG](https://github.com/plotly/plotly.py/blob/master/CHANGELOG.md) to check the appropriate version #. Example of a version check:   
  - markdown cell:
      ```
      #### Version Check
      Note: Tables are available in version <b>1.9.2+</b><br>
      Run  `pip install plotly --upgrade` to update your Plotly version
      ```

  - code cell:
      ```
      import plotly
      plotly.__version__
      ```

6. Best Practices:
  - <b>Now we have an awesome navigation bar on the left side of our tutorial pages.</b> The navigation bar displays the headers you add to your notebook so add a header for each example and try to make headers as informative and concise as possible. Ex: `#### Basic Line Chart`
  - Order examples from basic -> advanced.
  - Try and write all of the code for a given example in a *single* ipython notebook cell. This makes it easier for users to use the `copy to clipboard` button that appears on the codeblocks and easily/quickly reproduce each example.

7. The last content cell of your notebook should be a markdown cell with: 

    ```
    #### Reference
    See https://plot.ly/python/reference/##heatmap for more information and chart attribute options!
    ```

  where `https://plot.ly/python/reference/##heatmap` is replaced with the pertinent link(s) to our python [reference
  page](https://plot.ly/python/reference/)!
  
  and/or provide a help call:
    `help(FF.create_table)` (*This applies to documentation on FigureFactory functions)
8. Finally, convert your .ipynb to a .html file by adding the following code snippet as the last cell of your notebook.
  - Replace `your-tutorial-chart` with the type of chart you're creating in the tutorial.) 
  - Please be dilligent about adding this information completely and in the order as it appears here (this is really helpful if future edits are necessary :D )

  ```
  from IPython.display import display, HTML
      
  display(HTML('<link href="//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700rel="stylesheet" type="text/css" />'))
  display(HTML('<link rel="stylesheet" type="text/csshref="http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css">'))
      
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
  - `display_as` sets where your tutorial shows up 
    - 'basic' = https://plot.ly/python/#basic-charts
    - 'statistical' = https://plot.ly/python/#statistical-charts
    - 'scientific' = https://plot.ly/python/#scientific-charts
    - 'financial' = https://plot.ly/python/#financial-charts
    - 'maps' = https://plot.ly/python/#maps
    - '3d_charts' = https://plot.ly/python/#3d-charts
  - `order` defines the order in which the tutorials appear on plot.ly/python. Please take a look at https://plot.ly/python/ anorder your tutorial next to similar chart types. <b>Note</b> `order` can be a float.
  
8. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart. 
  - Use images.plot.ly for adding new images. 
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file
    
##### In the teminal in `documentation`
9. Commit and Push your tutorial
  - `git add` your .ipynb and .html files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin source`

10. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally 
11. Deploy with `rake deploy`

##### At https://plot.ly/python
12. Check your Tutorial!!!! This is a <b>very important</b> step.
  <b>PLEASE</b> visit https://plot.ly/python/your-tutorial and make sure everything looks correct :)

  - Some common problems that you should check for:
    - Make sure all plots appear! (*you may want to sign out of your Plotly account to ensure you didn't accidentally embed private plots)
    - There are no empty notebook cells
    - The thumbnail image appears on: https://plot.ly/python/ 


Thanks for contributing to our documentation!!
