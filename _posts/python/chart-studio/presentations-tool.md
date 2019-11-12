---
jupyter:
  jupytext:
    notebook_metadata_filter: all
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.1'
      jupytext_version: 1.1.7
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
  language_info:
    codemirror_mode:
      name: ipython
      version: 3
    file_extension: .py
    mimetype: text/x-python
    name: python
    nbconvert_exporter: python
    pygments_lexer: ipython3
    version: 3.6.5
  plotly:
    v4upgrade: true
    permalink: python/presentations-tool/
    description: How to create and publish a spectacle-presentation with the Python API.
    name: Presentations Tool | plotly
    thumbnail: thumbnail/pres_api.jpg
    layout: base
    name: Presentations Tool
    language: python
    display_as: chart_studio
    page_type: u-guide
    order: 0.6
---

#### Plotly Presentations
To use Plotly's Presentations API you will write your presentation code in a string of markdown and then pass that through the Presentations API function `pres.Presentation()`. This creates a JSON version of your presentation. To upload the presentation online pass it through `py.presentation_ops.upload()`.

In your string, use `---` on a single line to seperate two slides. To put a title in your slide, put a line that starts with any number of `#`s. Only your first title will be appear in your slide. A title looks like:

`# slide title`

Anything that comes after the title will be put as text in your slide. Check out the example below to see this in action.


#### Current Limitations
`Boldface`, _italics_ and [hypertext](https://www.w3.org/WhatIs.html) are not supported features of the Presentation API.


#### Display in Jupyter
The function below generates HTML code to display the presentation in an iframe directly in Jupyter.

```python
def url_to_iframe(url, text=True):
    html = ''
    # style
    html += '''<head>
    <style>
    div.textbox {
        margin: 30px;
        font-weight: bold;
    }
    </style>
    </head>'
    '''
    # iframe
    html += '<iframe src=' + url + '.embed#{} width=750 height=400 frameBorder="0"></iframe>'
    if text:
        html += '''<body>
        <div class="textbox">
            <p>Click on the presentation above and use left/right arrow keys to flip through the slides.</p>
        </div>
        </body>
        '''
    return html
```

#### Simple Example

```python
import chart_studio.plotly as py
import chart_studio.presentation_objs as pres

filename = 'simple-pres'
markdown_string = """
# slide 1
There is only one slide.

---
# slide 2
Again, another slide on this page.

"""

my_pres = pres.Presentation(markdown_string)
pres_url_0 = py.presentation_ops.upload(my_pres, filename)
```

https://plot.ly/~AdamKulidjian/3700/simple-pres/

```python
import IPython

iframe_0 = url_to_iframe(pres_url_0, True)
IPython.display.HTML(iframe_0)
```

#### Insert Plotly Chart
If you want to insert a Plotly chart into your presentation, all you need to do is write a line in your presentation that takes the form:

`Plotly(url)`

where url is a Plotly url. For example:

`Plotly(https://plot.ly/~AdamKulidjian/3564)`

The Plotly url lines should be written on a separate line after your title line. You can put as many images in your slide as you want, as the API will arrange them on the slide automatically, but it is _highly_ encouraged that you use `4 OR FEWER IMAGES PER SLIDE`. This will produce the cleanest look.

`Useful Tip`: <br>
For Plotly charts it is HIGHLY ADVISED that you use a chart that has `layout['autosize']` set to `True`. If it is `False` the image may be cropped or only partially visible when it appears in the presentation slide.

```python
import chart_studio.plotly as py
import chart_studio.presentation_objs as pres

filename = 'pres-with-plotly-chart'
markdown_string = """
# 3D scatterplots
3D Scatterplot are just a collection of balls in a 3D cartesian space each of which have assigned properties like color, size, and more.

---
# simple 3d scatterplot

Plotly(https://plot.ly/~AdamKulidjian/3698)
---
# different colorscales

There are various colorscales and colorschemes to try in Plotly. Check out plotly.colors to find a list of valid and available colorscales.

Plotly(https://plot.ly/~AdamKulidjian/3582)
Plotly(https://plot.ly/~AdamKulidjian/3698)
"""

my_pres = pres.Presentation(markdown_string)
pres_url_1 = py.presentation_ops.upload(my_pres, filename)
```

https://plot.ly/~AdamKulidjian/3710/pres-with-plotly-chart/

```python
import IPython

iframe_1 = url_to_iframe(pres_url_1, True)
IPython.display.HTML(iframe_1)
```

#### Insert Web Images
To insert an image from the web, insert the a `Image(url)` where url is the image url.

```python
import chart_studio.plotly as py
import chart_studio.presentation_objs as pres

filename = 'pres-with-images'
markdown_string = """
# Animals of the Wild
---
# The Lion

Panthera leo is one of the big cats in the Felidae family and a member of genus Panthera. It has been listed as Vulnerable on the IUCN Red List since 1996, as populations in African range countries declined by about 43% since the early 1990s. Lion populations are untenable outside designated protected areas. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are the greatest causes of concern. The West African lion population is listed as Critically Endangered since 2016. The only lion population in Asia survives in and around India's Gir Forest National Park and is listed as Endangered since 1986.

Image(https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg)
---
# The Giraffe

The giraffe is a genus of African even-toed ungulate mammals, the tallest living terrestrial animals and the largest ruminants. The genus currently consists of one species, Giraffa camelopardalis, the type species. Seven other species are extinct, prehistoric species known from fossils. Taxonomic classifications of one to eight extant giraffe species have been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa, but the IUCN currently recognizes only one species with nine subspecies.

Image(https://img.purch.com/w/192/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2OC8wOTQvaTMwMC9naXJhZmZlLmpwZz8xNDA1MDA4NDQy)
Image(https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg)

"""

my_pres = pres.Presentation(markdown_string)
pres_url_2 = py.presentation_ops.upload(my_pres, filename)
```

https://plot.ly/~AdamKulidjian/3702/pres-with-images/

```python
import IPython

iframe_2 = url_to_iframe(pres_url_2, True)
IPython.display.HTML(iframe_2)
```

#### Image Stretch
If you want to ensure that your image maintains its original width:height ratio, include the parameter `imgStretch=False` in your `pres.Presentation()` function call.

```python
import chart_studio.plotly as py
import chart_studio.presentation_objs as pres

filename = 'pres-with-no-imgstretch'
markdown_string = """
# images in native aspect ratio

Image(https://raw.githubusercontent.com/jackparmer/gradient-backgrounds/master/moods1.png)
Image(https://raw.githubusercontent.com/jackparmer/gradient-backgrounds/master/moods1.png)
Image(https://raw.githubusercontent.com/jackparmer/gradient-backgrounds/master/moods1.png)
Image(https://raw.githubusercontent.com/jackparmer/gradient-backgrounds/master/moods1.png)
Image(https://raw.githubusercontent.com/jackparmer/gradient-backgrounds/master/moods1.png)
"""

my_pres = pres.Presentation(markdown_string, imgStretch=False)
pres_url_3 = py.presentation_ops.upload(my_pres, filename)
```

https://plot.ly/~AdamKulidjian/3703/pres-with-no-imgstretch/

```python
import IPython

iframe_3 = url_to_iframe(pres_url_3, False)
IPython.display.HTML(iframe_3)
```

<!-- #region -->
#### Transitions
You can specify how your want your slides to transition to one another. Just like in the Plotly Presentation Application, there are 4 types of transitions: `slide`, `zoom`, `fade` and `spin`.

To apply any combination of these transition to a slide, just insert transitions at the top of the slide as follows:

`transition: slide, zoom`

Make sure that this line comes before any heading that you define in the slide, i.e. like this:

```
transition: slide, zoom
# slide title
```
<!-- #endregion -->

```python
import chart_studio.plotly as py
import chart_studio.presentation_objs as pres

filename = 'pres-with-transitions'
markdown_string = """
transition: slide
# slide
---
transition: zoom
# zoom
---
transition: fade
# fade
---
transition: spin
# spin
---
transition: spin and slide
# spin, slide
---
transition: fade zoom
# fade, zoom
---
transition: slide, zoom, fade, spin, spin, spin, zoom, fade
# slide, zoom, fade, spin

"""

my_pres = pres.Presentation(markdown_string, style='moods')
pres_url_6 = py.presentation_ops.upload(my_pres, filename)
```

```python
import IPython

iframe_6 = url_to_iframe(pres_url_6, True)
IPython.display.HTML(iframe_6)
```

#### Reference

```python
help(py.presentation_ops)
```
