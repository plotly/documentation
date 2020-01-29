---
name: Getting Started with Chart Studio
permalink: r/getting-started-with-chart-studio/
description: Get started with Chart Studio and Plotly's R graphing library.
page_type: u-guide
display_as: chart_studio
layout: base
language: r
thumbnail: thumbnail/bubble.jpg
order: 1
output:
  html_document:
    keep_md: true
---



# Getting Started with Chart Studio and the `plotly` R Package

`plotly` is an R package for creating interactive web-based graphs via the open source JavaScript graphing library [plotly.js](http://plot.ly/javascript). 

As of version 2.0 (November 17, 2015), R graphs created with the `plotly` R package are, by default, rendered *locally* through the [htmlwidgets](http://www.htmlwidgets.org/) framework.

## Initialization for Online Plotting

You can choose to publish charts you create with the `plotly` R package to the web using [Chart Studio](https://plot.ly/online-chart-maker). In order to do so, follow these steps:

1 - [Create a free Chart Studio account](https://plot.ly/api_signup):<br>
A Chart Studio account is required to publish R charts to the web using Chart Studio. It's free to get started, and you control the privacy of your charts.

2 - Store your Chart Studio authentication credentials as environment variables in your R session<br>
Your Chart Studio authentication credentials consist of your Chart Studio username and your Chart Studio API key, which can be found [in your online settings](https://plot.ly/settings/api). 

Use the [`Sys.setenv()`](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Sys.setenv) function to set these credentials as environment variables in your R session.

```r
Sys.setenv("plotly_username"="your_plotly_username")
Sys.setenv("plotly_api_key"="your_api_key")
```

Save these commands in your [.Rprofile](http://www.statmethods.net/interface/customizing.html) file if you want them to be run every time you start a new R session.

3 - Use the `api_create()` function to publish R charts to Chart Studio:

Use the `filename` attribute to set the title of the file that will be generated in your Chart Studio account.

```r
library(plotly)
p <- plot_ly(midwest, x = ~percollege, color = ~state, type = "box")
api_create(p, filename = "r-docs-midwest-boxplots")
```

4 (optional) - Suppress auto open behavior:

When following the instructions above, executing `api_create(p)` will auto open the created Chart Studio URL in the browser. To suppress this behavior, set the `browser` option to `false` in your R session.

```r
options(browser = 'false')
api_create(p, filename = "r-docs-midwest-boxplots")
```

## Special Instructions for Chart Studio Enterprise Users

### Where To Find Your API Key

Your API key for your free Chart Studio account will be different than the API key for your [Chart Studio Enterprise](https://plot.ly/product/enterprise/) account. 

Visit <https://plotly.your-company.com/settings/api/> to find your Chart Studio Enterprise account API key. 

Remember to replace "your-company.com" with the URL of your company's Chart Studio Enterprise server.

### Set the `plotly_domain` environment variable

The URL that the `plotly` package uses to communicate with Chart Studio will be different if your company has a Chart Studio Enterprise server. In order to make your R session aware of the new URL, set the `plotly_domain` environment variable equal to the URL of your Chart Studio Enterprise server using the `Sys.setenv()` function. 

Save the following command in your [.Rprofile](http://www.statmethods.net/interface/customizing.html) so that it runs every time you start a new R session:

```r
Sys.setenv("plotly_domain"="https://plotly.your-company.com")
```

Remember to replace "your-company" with the URL of your company's Chart Studio Enterprise server.

## Chart Studio Plot Privacy Modes

Chart Studio plots can be set to three different type of privacy modes: `public`, `private`, or `secret`.

* **public:**

     Anyone can view this graph. 
     It will appear in your Chart Studio profile and can be indexed by search engines. 
     Being logged in to a Chart Studio account is not required to view this chart.

* **private:**

     Only you can view this plot. 
     It will not appear in the public Chart Studio feed, your Chart Studio profile, or be indexed by search engines. 
     Being logged into your Chart Studio account is required to view this graph. 
     You can privately share this graph with other Chart Studio users. They will also need to be logged in to their Chart Studio account to view this plot. 
     This option is only available to Chart Studio Enterprise subscribers.

* **secret:**

     Anyone with this secret link can view this chart. 
     It will not appear in the public Chart Studio feed, your Chart Studio profile, or be indexed by search engines. 
     If it is embedded inside a webpage or an IPython notebook, anybody who is viewing that page will be able to view the graph. 
     You do not need to be logged in to your Chart Studio account view this plot. 
     This option is only available to Chart Studio Enterprise subscribers.

By default all Chart Studio plots you create with the `plotly` R package are set to `public`. Users with free Chart Studio accounts are limited to creating `public` plots. 

### Appending Static Image File Types to Chart Studio Plot URLs

You can also view the static image version of any public Chart Studio graph by appending `.png` or `.jpeg` to the end of the URL for the graph. 

For example, view the static image of <https://plot.ly/~chris/1638> at <https://plot.ly/~chris/1638.png>. 

[Chart Studio Enterprise](https://plot.ly/online_chart_maker) users can also use this method to get static images in the `.pdf`, `.svg`, and `.eps` file formats. 

## Private Charts In Chart Studio

If you have private storage needs, please learn more about [Chart Studio Enterprise](https://plot.ly/online-chart-maker/). 

If you're a [Chart Studio Enterprise subscriber](https://plot.ly/settings/subscription/?modal=true&utm_source=api-docs&utm_medium=support-oss) and would like the setting for your plots to be private, you can specify sharing as private:

```r
api_create(filename = "private-graph", sharing = "private")
```
For more information regarding the privacy of plots published to Chart Studio using the `plotly` R package, please visit [our Chart Studio privacy documentation](https://plot.ly/r/privacy/)
