# Contribute to Plotly's [R Documentation](https://plot.ly/r/)
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

## Create R Documentation:
##### In `documentation/_posts/r`
1. Write your tutorial in R Markdown (.Rmd file)
  - Your .Rmd file should be named in the following format: `yyyy-mm-dd-chart-type.Rmd`
  - Please base your tutorial off of one of our exsisting tutorials (i.e. `documentation/_posts/r/2015-11-19-shapes.Rmd`)
      - Include the following header (*replacing `your-tutorial-chart` with the type of chart you're creating in the tutorial.) :
      ```
      ---
      title: Your-Tutorial-Chart in R | Examples | Plotly
      name: Your-Tutorial-Chart
      permalink: r/your-tutorial-chart/
      description: How to create your-tutorial-chart in R. Short description of your tutorial.
      layout: base
      thumbnail: thumbnail/your-tutorial-chart.jpg *see step 2 for further thumbnail instructions*
      language: r
      page_type: example_index
      has_thumbnail: true
      display_as: chart_type
      order: 9 *see below for order instructions*
      ---
      ```
      *`order` defines the order in which the tutorials appear on plot.ly/r. Please take a look at https://plot.ly/r/ and order your tutorial next to similar chart types.
      - Under the header, include the following r code snippet:
      ```
        ```{r, echo = FALSE, message=FALSE}
        knitr::opts_chunk$set(message = FALSE)
        Sys.setenv("plotly_username"="RPlotBot")
        Sys.setenv("plotly_api_key"="q0lz6r5efr")``` 
      ```

      
    - To include r code and plots in the tutorial format the code snippets and plots in the following format:
      
      ```
      ```{r, results='hide'}
      library(plotly)
      #Add your R Code Here i.e.:
      p <- plot_ly(economics, x = date, y = uempmed, name = "unemployment")
      P ```
      ```
      ```
      ```{r, results='asis', echo=FALSE, message=FALSE}
      plotly_POST(p, filename="your-chart-type/your-filename")```
      ```

2. Convert the R Markdown to Markdown (.md file) with:

  `knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")`
  
  Or, in the terminal (`documentation/_posts/r`) with: 
  `Rscript -e 'knitr::knit("2015-08-03-your-r-markdown-tutorial.Rmd")'`
  
3. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart. 
  - Use images.plot.ly for adding new images. 
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file
    
##### In the teminal in `documentation`
4. Commit and Push your tutorial
  - `git add` your .Rmd and .md files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin source`

5. To proof your work follow these steps: https://github.com/plotly/documentation/blob/source/Contributing.md#rendering-the-pages-locally 

6. Deploy with `rake deploy`

##### At https://plot.ly/r
7. Check your Tutorial!!!! 
  <b>PLEASE</b> visit https://plot.ly/r/your-tutorial and make sure everything looks correct :)

Thanks for contributing to our documentation!!
