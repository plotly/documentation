# Contribute to Plotly's [Javascript Documentation](https://plot.ly/javascript/)
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

## Create Plotly.js Documentation:
Our javascript tutorials are written in HTML files with embeded [codepen](http://codepen.io/plotly/) examples.
##### In `documentation/_posts/plotly_js`
1. Create a folder titled with the chart type or topic you're adding to the documentation (i.e. `bar`)  
2. `cd` into the folder you created and create an html index file labled: `yyyy-mm-dd-chart_type_plotlyjs_index.html`. Copy the index file template below and replace with the necessary information pertaining to the doc you are creating.
  ```
  ---
  title: Javascript Graphing Library D3.js-based Add-Chart-Type-or-Topic | Examples | Plotly
  name: Add-Chart-Type-or-Topic
  permalink: javascript/add-chart-type-or-topic/
  description: How to make a D3.js-based add-chart-type-or-topic in javascript. Add an additional sentence summarizing chart-type or topic.
  layout: base
  has_thumbnail: true
  thumbnail: thumbnail/add-chart-type-or-topic.jpg *MORE INFO ON ADDING THUMBNAILS BELOW
  language: plotly_js
  page_type: example_index
  display_as: **SEE BELOW 
  order: ***SEE BELOW
  markdown_content: |
    indented content in markdown format which will prefix an example ****SEE BELOW
  ---
  {% assign examples = site.posts | where:"language","plotly_js" | where:"suite","add-chart-type-or-topic"**** | sort: "order" %}
  {% include auto_examples.html examples=examples %}
  ```
  - \*\*`display_as` sets where your tutorial is displayed 
      - 'basic' = https://plot.ly/javascipt/#basic-charts
      - 'statistical' = https://plot.ly/javascipt/#statistical-charts
      - 'scientific' = https://plot.ly/javascipt/#scientific-charts
      - 'financial' = https://plot.ly/javascipt/#financial-charts
      - 'maps' = https://plot.ly/javascipt/#maps
      - '3d_charts' = https://plot.ly/javascipt/#3d-charts
      - See additional options [HERE](https://github.com/plotly/documentation/blob/source-design-merge/_includes/documentation_eg.html#L1)
  - \*\*\* `order` defines the order in which the tutorials appear in each section on plot.ly/javascript. Please take a look at https://plot.ly/javascript/ and order your tutorial next to similar chart types. <b>Note</b> `order` can be a float.
  - \*\*\*\* `markdown_content` is rendered directly above the examples. In general, it is best to *avoid* paragraph-formatted explanation and let the simpicity of the example speak for itself, but that's not always possible. Take note that headings in this block *are* reflected in the sidebar.

3. Create a Codepen example. Use Plotly's Codepen account to create an example that clearly demonstrates the feature that you're discussing in the doc.

4. Add an HTML file for each example with the codepen example embedded within. The HTML file should have a header (template below), followed by the javascript code used in the codepen example.
  ```
  ---
  name: Basic Bar Chart **
  plot_url: https://codepen.io/plotly/embed/74a638752a41ac9672a05f628e4ddaff/?height=500&theme-id=15263&default-tab=result
  language: plotly_js
  suite: bar
  order: 1 **
  sitemap: false
  arrangement: horizontal
  ---
  var data = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar'
    }The
  ];

  Plotly.newPlot('myDiv', data);
  ```

6. Best Practices:
  - Set `plot_url:` to the embedded codepen example with the `default-tab=result`
  - <b>Now we have an awesome navigation bar on the left side of our tutorial pages.</b> The navigation bar displays the `name`** in the `order`** so add a `name` for each example and try to make `name`s as informative and concise as possible. Ex: `Basic Bar Chart`
  - `order` examples from basic -> advanced.
  - Try to use "real" data, to make the examples realistic and interesting. Avoid including large datablocks in the tutorial by uploading the datafile to https://github.com/plotly/datasets. Importing data rather than pasting a large chunk of data in the tutorial creates a cleaner example. (Using random data is okay for some examples too :) )

8. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart. 
  - Use images.plot.ly for adding new images. 
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly\_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file
    
##### In the terminal in the `documentation` repo
9. Commit and Push your tutorial
  - `git add` your .html files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin source-design-merge`

10. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally 
11. Deploy with `rake deploy`

##### At https://plot.ly/javascript
12. Check your Tutorial!!!! This is a <b>very important</b> step.
  <b>PLEASE</b> visit https://plot.ly/javascript/your-tutorial and make sure everything looks correct :)

  - Some common problems that you should check for:
    - Make sure all plots/codepen embeds appear! (\*you may want to sign out of your Plotly/codepen account to ensure you didn't accidentally embed private plots)
    - The thumbnail image appears on: https://plot.ly/javascript/ 

Thanks for contributing to our documentation!!
