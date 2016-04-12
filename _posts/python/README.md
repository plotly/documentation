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
      - Include the following as the last cell in your .ipynb (*replacing `your-tutorial-chart` with the type of chart you're creating in the tutorial.) 
        * this will convert your .ipynb to a .html file:
      ```
      from IPython.display import display, HTML
      
      display(HTML('<link href="//fonts.googleapis.com/css?family=Open+Sans:600,400,300,200|Inconsolata|Ubuntu+Mono:400,700" rel="stylesheet" type="text/css" />'))
      display(HTML('<link rel="stylesheet" type="text/css" href="http://help.plot.ly/documentation/all_static/css/ipython-notebook-custom.css">'))
      
      ! pip install publisher --upgrade
      import publisher
      publisher.publish(
          'your-tutorial-chart.ipynb', 'python/your-tutorial-chart', 'Python Your-Tutorial-Chart | plotly',
          'How to make Your-Tutorial-Chart in Python with Plotly.',
          name = 'Your-Tutorial-Chart',
          thumbnail='thumbnail/your-tutorial-chart.jpg', language='python',
          page_type='example_index', has_thumbnail='true', display_as='chart_type', order=32 *see below for more information on the order field)  
      ```
      *`order` defines the order in which the tutorials appear on plot.ly/python. Please take a look at https://plot.ly/python/ and order your tutorial next to similar chart types.
  
4. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart. 
  - Use images.plot.ly for adding new images. 
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file
    
##### In the teminal in `documentation`
5. Commit and Push your tutorial
  - `git add` your .ipynb and .html files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin source`

5. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally 

6. Deploy with `rake deploy`

##### At https://plot.ly/python
7. Check your Tutorial!!!! This is a <b>very important</b> step.
  <b>PLEASE</b> visit https://plot.ly/python/your-tutorial and make sure everything looks correct :)

Thanks for contributing to our documentation!!
