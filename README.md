#Plotly's Auto-Docs!
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


##user.json file:

Since we need to make a lot of plots, we need a user to do so. However, we can't have username-api_key pairs for our official docs just floating around.

If you need to use the `run.py` and `publish.py` programs, you'll need the *secret* `users.json` file.


## some philosophy

Examples are found by clicking through links until you get to a terminal. Therefore, examples are just directories that *have no sub-directories*. I.e., examples are the *leaves* of the directory tree. If it's not an example, *leaf*, it's a  *branch*.

## config.json files

Each folder (for *branches* and *leaves*) in `hard-coded` has an associated `config.json` file. This holds both meta-information that plotly will use on the website and also information about organizing and running the examples.

### config.json files for examples *leaves*

Config files for Examples require a *human-readable* name: "name" attribute and a list of supported *languages*: "languages" attribute to be considered valid. Here's what you can currently put into the config.json files for examples:

```json
{
    "name": "This Is A Scatter Plot",
    "languages": ["python", "julia", "matlab", "etc…"],
    "plot-options": {"auto_open": false},
    "init": true,
    "prepend": true,
    "append": true
}
```

Here's what those mean:

* name [required]
 * a human-readable name that will show up for the example
* languages [required]
 * the languages that the example should support
 * if using a ‘script.ext’ file, you may leave `"languages": []` (blank) as they’re inferred
* plot-options [conditionally-optional]
 * if using a ‘model.json’ file, writing in plot options will dictate additional options
 * note: filename and fileopt should NOT be included here, they’re always included
 * if using ‘script.ext’ or ‘url.json’, plot-options will have no effect (may raise exception?)
* init [optional]
 * assumed ‘false’ if not included
 * if ‘true’ you NEED to have a ‘init.ext’ for EACH language in languages
 * this is only valid when using model.json
 * adds in the ‘init.ext’ content AFTER sign-in and BEFORE body-code
 * you’ll need this if you want to reference a variable, ‘x’, inside a model, but (1) just writing x (without quotes) is invalid JSON and (2) syntax for definitions varies between languages
 * Note, variable definitions originate from the definitions in ‘model.json’ where variables are in between ‘>>>’ and ‘<<<’, e.g., ‘>>>x<<<’. In this case, the prepend needs to define ‘x’ for the example to be valid.
* prepend [optional]
 * assumed `false` if not included. if `true` then a `prepend.html` file is required that will be included before the code block on the examples pages.
* append [optional]
 * assumed `false` if not included. if `true` then a `append.html` file is required that will be included before the code block on the examples pages.

### Config files for *branches*

Branch config files:

```json
{
    "name": "Histogram Plots are Really Great",
    "description": "Learn how to make histograms in plotly with these simple examples.",
    "has_thumbnail": true,
    "relative_url": "histograms",
    “order”: ["basic-histogram", "style-histogram", "overlaid-histogram"]
}
```

Here's what those mean:

* name [required]
 * a human-readable name that will show up for the example section
* description [required]
 * description of the example section, as used in meta description tags
* has_thumnail [required]
 * is a thumbnail image associated with this grouping?
* relative_url [required]
 * when a user clicks on this group, what url are they redirected to
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

Yes, that last requirement is annoying, but this line should be set by plotly convention at this point, so it shouldn't cause too much of a headache.

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

* Pick a unique name:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
* Pick a method:
(*model*, *script*, or *url*)
* Fill out the config.json
* run `python run.py` (this will spit out information on how to *actually* run this program)
If you've just added one example, try `python run.py code+urls examplename` where examplename is the new example folder. If you've added a number of examples, try `python run.py code+urls new`, which will find all the unprocessed examples and run them.

## Adding an example by using a JSON model

* Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
* Add the `model.json` file. This file contains *only* the JSON figure representation used by plotly, e.g.,
```json
{
    "data": [],
    "layout": {}
}
```
* Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`). Remember, it needs *at least* a `name` parameter and a `languages` parameter.
* Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
* (now you're ready for some publishing!)

## Adding an example by using a script.ext file

* Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
* Add the `script.ext` file. For example, if you're using Python, `script.py`. If you're using matlab, `script.m`. If you're using a plotting library within a programming language, you can specify that too, e.g. `script.gg` for a ggplot graph in `r`. There's only *one* real requirement for this file. You need to create a variable in the example called `plor_url` that contains a string with the newly created plotly url. If you don't, the next step just won't work. (see the Python example for a script.py file above)
* Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`). Remember, it needs *at least* a `name` parameter and a `languages` parameter. Here, you *need* the `languages` parameter, but it may be left blank, i.e., `"languages": []`
* Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
* Run run the `language_exceptions.ext` file (e.g. `python_exceptions.py` for Python). This program will capture and save the resulting `plot_url` variable to a special file (see `exepcitons scripts` for more info).
* (now you're ready for some publishing!)

## Adding an example by using a url.json file

Use with caution. You're hard-coding a url which points to a mutable plotly graph. I.e., if you make an example in plotly and the resulting url is `https://plot.ly/~you/100023`, if you *change* your 100023rd plot, though the *current* examples page will not change, *future* pages that re-process your `https://plot.ly/~you/100023` file *will* change.

That said, cool, you can just throw in urls!

* Pick a unique name, let's call it `unique-example`:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
* Add the `url.json` file. It looks like this:
```json
{
    "url": "https://plot.ly/~dude-face/77"
}
```
* Fill out the `config.json` file *inside* the new folder with a unique name that you just created (`unique-example`).
* Run `python run.py code+urls unique-example` (it'll spit out *helpful* messages if somethings off)
* (now you're ready for some publishing!)


## `run.py`

This is the first of two major processes that need to happen to prepare `hard-coded` examples to be used on plotly's site. You use this program as follows:

```bash
python run.py command1+command2 example1 example2
```

To see the available commands, enter this in a terminal program in the same directory as `run.py`:
```bash
python run.py
```
Commands are separated by `+` signs and you may have as many `examples` as you wish. Examples match *entire* sections, e.g, `chart-types` or they may match a *single* example, e.g., `basic-bar`. However, they must be *exact* matches (`basic`, `basic-ba`, and `basic-bear` will not--currently--match any examples). 

Output from `run.py` is stored (and overwritten) in a file called `pre-book.json`. The examples that have already been processed are listed in this file and leveraged so that the terminal line:

```bash
python run.py code+urls new
```

... will process only examples found as leaves in the `hard-coded` directory tree, but *not yet* listed as `processed_ids`.

When using `script.ext` files, `run.py` will output executable code in an `exceptions` directory that will be used by other programs--e.g., `python_exceptions.py`, `mpl_exceptions.py`, `matlab_exceptions.m`--to *complete* examples, i.e., give them plot urls.

Ins and Outs of `run.py`:
* input
 * commands and examples from terminal (e.g., `python run.py code+urls basic-line1`)
 * `hard-coded` file-structure
 * config.json files
 * model.json files
 * script.ext files
 * url.json files
 * init.ext files
* output
 * `auto-docs` directory
  * `auto-docs/executables`, solely for testing purposes
 * `pre-book.json`, all the processed information so far


## `publish.py`

Running `run.py` is the first step in this process. The break in processing allows us to abstract away the notion of *language-specific* examples before setting up our examples in django. I.e., we can *complete* the exceptional examples in between running `run.py` and `publish.py`.

When you run the publishing program the following occurs:
* check and see if *language-specific* examples have been updated (looks in the `exceptions` directory)
* port urls from `test` user :space_invader: to `publish` user :computer:
* save images using the static image server
* create *book-of-things-esque* `references` for each language
* make a report file to show complete/incomplete examples

You have two options for running `publish.py`:
1. `python publish.py test`
This will use the `tester` user (stored in the `users.json` file you'll need to get outside of GitHub). It will port urls over (usually they don't need porting) to the `test` user, save images to the `test-published/images` directory, save templated code examples to the `test-published/api-docs` directory, create langauge *references* in the `test-published/api-docs` directory, and save a `test-publish-report.txt`.
2. 'python publish.py publish`
You guessed it, everything above but for realz. This will use the `publisher` user (stored in the `users.json` file you'll need to get outside of GitHub). It will port urls over to the `publisher` user, save images to the `published/images` directory, save templated code examples to the `published/api-docs` directory, create langauge *references* in the `published/api-docs` directory, and save a `publish-report.txt`.

You *should not* run `publish` until all examples show up as *complete* in the `test-publish-report.txt` file (there will also be congratulatory output in the stdout if all examples are complete).

Ins and Outs of `publish.py`:
* input
 * pre-book.json file
 * command (`test` or `publish`)
 * `auto-docs` directory
 * `exceptions` directory
* output
 * `test-published` or `published` directory
 * `test-published/api-docs/references` `published/api-docs/references` directory
 * `test-publish-report.txt` or `publish-report.txt`

## completing *language-specific* exmples

Each language needs its own program to:

1. Navigate to its language in the `exceptions` directory
2. Run each script in that directory
3. Save the resulting plot url as `example_id.json` with contents `{"url": "https://plot.ly/~some-user/13"}`

`publish.py` anticipates these `*.json` files existing in this directory and will be able to properly add the example if it exists.

## why all the trouble?

The resulting `published` directory contains information that can be copied straight into the plotly backend and *just work*. The content is handled totally separately from the *look* of the examples, so we don't need to mess with one to change the other.
