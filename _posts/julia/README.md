# Contribute to Plotly's [Julia Documentation](https://plot.ly/julia/)
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

## Create Julia Documentation:
Our Julia tutorials are written in HTML files with embeded plot examples.
##### In `documentation/_posts/julia`
1. Create a folder titled with the chart type or topic you're adding to the documentation (i.e. `bar`)  
2. `cd` into the folder you created and create an html index file labled: `yyyy-mm-dd-chart_type_julia_index.html`. Copy the index file template below and replace with the necessary information pertaining to the doc you are creating.
  ```
  ---
  title: Julia Add-Chart-Type-or-Topic | Examples | Plotly
  name: Add-Chart-Type-or-Topic
  permalink: julia/add-chart-type-or-topic/
  description: How to make a add-chart-type-or-topic in Julia. Add an additional sentence summarizing chart-type or topic.
  layout: base
  has_thumbnail: true
  thumbnail: thumbnail/add-chart-type-or-topic.jpg *MORE INFO ON ADDING THUMBNAILS BELOW
  language: julia
  page_type: example_index
  display_as: **SEE BELOW 
  order: ***SEE BELOW
  ---
  {% assign examples = site.posts | where:"language","julia" | where:"suite","add-chart-type-or-topic"**** | sort: "order" %}
  {% include auto_examples.html examples=examples %}
  ```
  - **`display_as` sets where your tutorial is displayed 
      - 'basic' = https://plot.ly/julia/#basic-charts
      - 'statistical' = https://plot.ly/julia/#statistical-charts
      - 'scientific' = https://plot.ly/julia/#scientific-charts
      - 'financial' = https://plot.ly/julia/#financial-charts
      - 'maps' = https://plot.ly/julia/#maps
      - '3d_charts' = https://plot.ly/julia/#3d-charts
      - See additional options [HERE](https://github.com/plotly/documentation/blob/source-design-merge/_includes/documentation_eg.html#L1)
  - *** `order` defines the order in which the tutorials appear in each section on plot.ly/julia. Please take a look at https://plot.ly/julia/ and order your tutorial next to similar chart types. <b>Note</b> `order` can be a float.

3. Create an example and save it on https://plot.ly/.

4. Add an HTML file (`yyyy-mm-dd-example-name.html`) for each example. The HTML file should have a header (template below), followed by the Julia code used to create the example.
  ```
  ---
  name: Basic Bar Chart **
  plot_url: https://plot.ly/~PlotBot/39
  language: julia
  suite: bar
  order: 1 **
  sitemap: false
  arrangement: horizontal
  ---
  # Learn about API authentication here: https://plot.ly/julia/getting-started
  # Find your api_key here: https://plot.ly/settings/api

  using Plotly


  data = [
    [
      "x" =&gt; ["giraffes", "orangutans", "monkeys"],
      "y" =&gt; [20, 14, 23],
      "type" =&gt; "bar"
    ]
  ]
  response = Plotly.plot(data, ["filename" =&gt; "basic-bar", "fileopt" =&gt; "overwrite"])
  plot_url = response["url"]
  ```

6. Best Practices:
  - <b>Now we have an awesome navigation bar on the left side of our tutorial pages.</b> The navigation bar displays the `name`** in the `order`** so add a `name` for each example and try to make `name`s as informative and concise as possible. Ex: `Basic Bar Chart`
  - `order` examples from basic -> advanced.
  - Try to use "real" data, to make the examples realistic and interesting. Avoid including large datablocks in the tutorial by uploading the datafile to https://github.com/plotly/datasets. Importing data rather than pasting a large chunk of data in the tutorial creates a cleaner example. (Using random data is okay for some examples too :) )

8. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart. 
  - Use images.plot.ly for adding new images. 
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file
    
##### In the terminal in the `documentation` repo
9. Commit and Push your tutorial
  - `git add` your .html files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin source-design-merge`

10. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally 
11. Deploy with `rake deploy`

##### At https://plot.ly/julia
12. Check your Tutorial!!!! This is a <b>very important</b> step.
  <b>PLEASE</b> visit https://plot.ly/julia/your-tutorial and make sure everything looks correct :)

  - Some common problems that you should check for:
    - Make sure all plots/codepen embeds appear! (*you may want to sign out of your Plotly/codepen account to ensure you didn't accidentally embed private plots)
    - The thumbnail image appears on: https://plot.ly/julia/ 

Thanks for contributing to our documentation!!
