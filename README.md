#Plotly's Automatically-Generated Docs!
Text and images from this repo make up content served at https://plot.ly

##File Structure:
```
auto-docs/
    section/
      subsection/
        example/
exceptions/
  language/
hard-coded/
  section/
    subsection/
      example/
published/
  api-docs/
    section/
      subsection/
        example/
          language/
    references/
  images/
test-published/
  api-docs/
    section/
      subsection/
        example/
          language/
    references/
  /images
```

* `auto-docs` is the folder that holds all of the content automatically gerneated when you run `run.py`
* `exceptions` are the examples that couldn't be handled in `run.py` they require `id.json` files to be made which hold a url
* `hard-coded` is where you're actually allowed to make manual changes :) 
* `published` is the directory which holds content ready for migrating to plotly's site
* `test-published` is a directory just like `published` except urls are not migrated to our official `PlotBot` user
* `test-published/images`/`published/images` hold all the examples identified by corresponding `id` (hard-coded folder name)
* `test-published/references`/`published/references` hold json objects which are used to generate web content for each langauge


## some philosophy

Examples are found by clicking through links until you get to a terminal. Therefore, examples are just directories that *have no sub-directories*. I.e., examples are the *leaves* of the directory tree. If it's not an example, *leaf*, it's a  *branch*.

## config.json files

Each folder (for *branches* and *leaves*) in `hard-coded` has an associated `config.json` file. This holds both meta-information that plotly will use on the website and also information about organizing and running the examples.

### config.json files for examples *leaves*

Config files for Examples require a *human-readable* name: "name" attribute and a list of supported *languages*: "languages" attribute to be considered valid. Here's what you can currently put into the config.json files for examples:

```json
{
    "name": "This Is A Scatter Plot",
    "description": "Note how the points are 'scattered' about!",
    "languages": ["python", "julia", "matlab", "etc…"],
    "plot-options": {"auto_open": false},
    "tags": ["a", "list", "of", "tags"],
    "init": true,
    "prepend": true,
    "append": true,
    “init”: true
}
```

Here's what those mean:

* name [required]
 * a human-readable name that will show up for the example
* description [optional]
 * this will accompany the example if given
* languages [required]
 * the languages that the example should support
 * if using a ‘script.ext’ file, you may leave `"languages": []` (blank) as they’re inferred
* plot-options [conditionally-optional]
 * if using a ‘model.json’ file, writing in plot options will dictate additional options
 * note: filename and fileopt should NOT be included here, they’re always included
 * if using ‘script.ext’ or ‘url.json’, plot-options will have no effect (may raise exception?)
* tags [optional]
 * words that will be associated with the plot
* init [optional]
 * assumed ‘false’ if not included
 * if ‘true’ you NEED to have a ‘init.ext’ for EACH language in languages
 * this is only valid when using model.json
 * adds in the ‘init.ext’ content AFTER sign-in and BEFORE body-code
 * you’ll need this if you want to reference a variable, ‘x’, inside a model, but (1) just writing x (without quotes) is invalid JSON and (2) syntax for definitions varies between languages
 * Note, variable definitions originate from the definitions in ‘model.json’ where variables are in between ‘>>>’ and ‘<<<’, e.g., ‘>>>x<<<’. In this case, the prepend needs to define ‘x’ for the example to be valid.

### Config files for *branches*

Branch config files:

```json
{
    "name": "Histogram Plots are Really Great",
    "has_thumbnail": true,
    "relative_url": "e.g., 'histograms'",
    “order”: ["basic-histogram", "style-histogram", "overlaid-histogram"]
}
```

Here's what those mean:

* name [required]
 * a human-readable name that will show up for the example
* has_thumnail [required]
 * is a thumbnail image associated with this grouping?
* relative_url [optional]
 * when a user clicks on this group, what url are they redirected to?
* order [optional]
 * you can specify the order of none, some, or all the subdirectories of the branch


## script.ext files

The `script.ext` files are used to create urls from executable code-strings that are language-specific. For example, the python api for plotly has a method called `get_subplots` that returns a figure object pre-filled with a subplot grid. Since there is no way to translate this functionality into other languages, it must be added as a *language-specific* example or and *exception*.

The `script.ext` files have the following guidelines 
* must be executable *as-is* (i.e. all imports, definitions, etc. are required). small caveat here, discussed below
* should *not* refer to a filename, but rather a "variable" filename, ">>>filename<<<" (explained later)
* must define a variable called `plot_url` that contains a string holding the created plotly plot url
* if using a sign in line, you *must* match the first 7 characters of each of the following sign ins:
 * py.sign* (python)
 * signin(* (matlab)
 * p <- pl* (r)
 * Plotly.* (julia)
 * var plo* (node)
 * p <- pl* (ggplot), same as 'r'
 * py.sign* (matplotlib), same as 'python'

Yes, that last requirement is annoying, but this line should be failry set by plotly convention at this point, so it shouldn't cause too much headache.

Here's an example for a python `script.py` file:

```python
import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('completely-doesn't-matter', 'also-completely-doesn't-matter')

import plotly.tools as tls

trace1 = Bar(
    y=[1, 2, 3],
    xaxis='x1',
    yaxis='y1'
)
trace2 = Bar(
    y=[1, 2, 3],
    xaxis='x2',
    yaxis='y2'
)
trace3 = Bar(
    y=[1, 2, 3],
    xaxis='x3',
    yaxis='y3'
)
trace4 = Bar(
    y=[1, 2, 3],
    xaxis='x4',
    yaxis='y4'
)
data = Data([trace1, trace2, trace3, trace4])
fig = tls.get_subplots(rows=2, columns=2)
fig['data'] += data
fig['layout'].update(title='i <3 subplots')

plot_url = py.plot(fig, filename='>>>filename<<<')
```

Notes:
* notice the malarkey in the sign in line. `run.py` does a language-dependent replacement of the sign-in line to create that nice django templating we're all accostomed to at this point. It also fills in an appropriate username, like 'Python-API' for `script.py` examples and the appropriate api-key. This is the small caveat, strictly, you need a valid username and api-key to run *any* of the `script.ext` files, but since we just replace this line, as long as `run.py` can match the first 7 characters of the sign in, the rest of the line doesn't really matter. E.g., you could write, `sign_in!!!!!!!!!!!!HHHSSDHSDFHSDFHS!!!` and everything would be totally indifferent.
* note the use of '>>>filename<<<'. This is some quick templating that happens to make sure the 'id' for the folders is indeed the filame used in the `script.ext` files. Bottom-line, don't write `this-cool-example-i-just-wrote`. Instead write `>>>filename<<<`, and `run.py` will fill the appropriate exmaple name in for you.

## Adding an Example (quick overview)

1. Pick a unique name:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
2. Pick a method:
(*model*, *script*, or *url*)
3. Fill out the config.json
4. run `python run.py` (this will spit out information on how to *actually* run this program)
If you've just added one example, try `python run.py code+urls examplename` where examplename is the new example folder. If you've added a number of examples, try `python run.py code+urls new`, which will find all the unprocessed examples and run them.

## Adding an example by using a JSON model

1. Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
2. Add the `model.json` file. This file contains *only* the JSON figure representation used by plotly, e.g.,
```json
{
    "data": [],
    "layout": {}
}
```
3. Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`). Remember, it needs *at least* a `name` parameter and a `languages` parameter.
4. Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
5. (now you're ready for some publishing!)

## Adding an example by using a script.ext file

1. Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
2. Add the `script.ext` file. For example, if you're using Python, `script.py`. If you're using matlab, `script.m`. If you're using a plotting library within a programming language, you can specify that too, e.g. `script.gg` for a ggplot graph in `r`. There's only *one* real requirement for this file. You need to create a variable in the example called `plor_url` that contains a string with the newly created plotly url. If you don't, the next step just won't work. (see the Python example for a script.py file above)
3. Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`). Remember, it needs *at least* a `name` parameter and a `languages` parameter. Here, you *need* the `languages` parameter, but it may be left blank, i.e., `"languages": []`
4. Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
5. Run run the `language_exceptions.ext` file (e.g. `python_exceptions.py` for Python). This program will capture and save the resulting `plot_url` variable to a special file (see `exepcitons scripts` for more info).
6. (now you're ready for some publishing!)

## Adding an example by using a url.json file

Use with caution. You're hard-coding a url which points to a mutable plotly graph. I.e., if you make an example in plotly and the resulting url is `https://plot.ly/~you/100023`, if you *change* your 100023rd plot, though the *current* examples page will not change, *future* pages that re-process your `https://plot.ly/~you/100023` file *will* change.

That said, cool, you can just throw in urls!

1. Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
2. Add the `url.json` file. It looks like this:
```json
{
    "url": "https://plot.ly/~dude-face/77"
}
```
3. Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`).
4. Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
5. (now you're ready for some publishing!)


## `run.py`

This is the first of two major processes that need to happen to prepare `hard-coded` examples to be used on plotly's site. You use this program as follows:

```bash
python run.py command1+command2 example1 example2
```

To see the available commands, enter this in a terminal program in the same directory as `run.py`:
```bash
python run.py
```
Commands are separated by `+` signs and you may have as many `examples` as you wish. Examples match *entire* sections, e.g, `chart-types` or they may match a *single* example, e.g., `basic-bar`. However, they must be *exact* matches (`basic`, `basic-ba`, nor `basic-bear` will not--currently--match any examples). 

Output from `run.py` is stored (and overwritten) in a file called `pre-book.json`. The examples that have already been processed are listed in this file and leveraged so that the terminal line:
```bash
python run.py code+urls new
```

... will process only examples found as leaves in the `hard-coded` directory tree, but *not yet* listed as `processed_ids`.

When using `script.ext` files, `run.py` will out (come back to this!)


## `publish.py`

Running `run.py` is the first step in this process. The break in processing allows us to abstract away the notion of *language-specific* examples before setting up our examples in django. I.e., we can *complete* the exceptional examples in between running `run.py` and `publish.py`.






