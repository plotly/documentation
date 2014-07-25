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
reports/
```

* `auto-docs` is the folder that holds all of the content automatically gerneated when you run `run.py`
* `exceptions` are the examples that couldn't be handled in `run.py` they require `id.json` files to be made which hold a url
* `hard-coded` is where you're actually allowed to make manual changes :) 
* `published` is the directory which holds content ready for migrating to plotly's site
* `test-published` is a directory just like `published` except urls are not migrated to our official `PlotBot` user
* `test-published/images`/`published/images` hold all the examples identified by corresponding `id` (hard-coded folder name)
* `test-published/references`/`published/references` hold json objects which are used to generate web content for each langauge
* `reports` holds information about how the `publish.py` run went. complete/incomplete examples, etc.


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
    "name": "Scatter Plot",
    "description": "This is a nice plot you'll like viewing",
    "languages": ["python", "julia", "matlab", "etc…"],
    "plot-options": {"auto_open": false},
    "init": true,
    "prepend": true,
    "append": true,
    "links": ["url1", "url2"]
}
```

Here's what those mean:

* name [required]
 * a human-readable name that will show up for the example
* description [optional]
 * a human-redable text description that will accompany the plot
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
* links [optional]
 * links to be associated with the example, perhaps documentation links?

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

## Adding an Example

### Begin!

You add an example by making a *new* subdirectory in `hard-coded/some-section/some-sub-section/`. Let's add a new example called `rad-bar-example` to `hard-coded/chart-types/bar/`. Note that the name `rad-bar-example` must be *unique*. If it's not you'll get an error early on bringing it to your attention. This is because examples have urls under the same user with filenames corresponding to the example name.

#### Step One:

```bash
$ mkdir hard-coded/chart-types/bar/rad-bar-example
```

Now, we need to decide *how* we'll add the example in. Does it require generation via a langauge-specific script? Or, does it apply to many different languages? Skip to the appropirate subsection below!

### Adding Examples for language-specific scripts

This is only for when you need to run a *specific* script that's language specific. Let's add a script to make a Plotly plot from matplotlylib.

#### Step Two: 

```bash
$ touch hard-coded/chart-types/bar/rad-bar-example/script.mpl
```

The reason for the `.mpl` extension is to let the `run.py` program know it's specifically for matplotlib. If you were doing `ggplot2`, you would need `.gg` and `r` needs `.r` and so on.

#### Step Three, save the following to `script.mpl`:

```python
import plotly.plotly as py
import matplotlib.pyplot as plt

py.sign_in('-', '-')  # this line will be replaced

fig, ax = plt.subplots()
ax.plot([1,2,3])

py.plot_mpl(fig, filename=">>>filename<<<")

```

Notes:
* Each language has a very specific sign_in signature that needs to be obeyed. Basically, `run.py` only knows to check for a specific sign-in line and replace it with the proper credentials. Why can't we hardcode this? Then we're publically showing keys in the repo! Plus, if the example keys change, that information shouldn't require hard-coded switching. You can see these here: https://github.com/plotly/documentation/blob/master/run.py#L211.
* The `>>>filename<<<` string is found and replaced with the example name. That way if we change the examplename, this changes with it. Remember all of these are saving to a *single* user's profile, so we need to make sure all filenames are unique, otherwise we'd risk overwriting examples or having incorrect plots show up in our examples.

#### Step Four, add the `config.json` file:

```bash
$ touch hard-coded/chart-types/bar/rad-bar-example/config.json
```

Every example needs a corresponding `config.json` file. See above for content requirements.

#### Step Five, save the following to the `config.json` file:

```json
{
    "name": "A Rad Bar Example That Only Runs in<br>Matplotlib",
    "languages": ["matplotlib"]
}
```

Those two are the only actual requirements in the file, and that's usually all you'll be including there.

#### Step Six:

```bash
$ python run.py process rad-bar-example
```

Here, `process` is the command and `rad-bar-example` is the *what-to-process*. Optionally, since this should be the only new example added, you can just use the `new` command.

```bash
$ python run.py process new
```

Either way, once you've run one of these commands, the script has YET TO BE RUN! Only the skeleton of the example has been added to our example `tree`. Now we have to actually generate a url for the example.

#### Step Seven, run the appropriate exception script:

```bash
$ python mpl_exceptions.py
```

This is specific to matplotlib, there are corresponding `ggplot_exceptions.r`, `matlab_exceptions.m`, and `python_exceptions.py` for other languages.

Alright, from here on out, all examples are treated the exact same! See the end of the section

### Adding Examples with `model.json`, a json figure description

This option is when you've got a general Plotly figure description in json. It can yield multiple examples for multiple languages from one json example.

#### Step Two: 

```bash
$ touch hard-coded/chart-types/bar/rad-bar-example/model.json
```

#### Step Three, save this in `model.json`:

```json
{
    "data": [
        {
            "type": "scatter",
            "x": [0, 1, 2],
            "y": [2, 1, 3]
        }
    ],
    "layout":{
        "title": "i <3 json"
    }
}
```

Don't worry about the order of any of these things, that's taken care of for you.

#### Step Four:

```bash
$ touch hard-coded/chart-types/bar/rad-bar-example/config.json
```

#### Step Five, save this in the `config.json` file you just made:

```json
{
    "name": "A Rad Bar Example That Runs in<br>R, Python, Julia, and Matlab",
    "languages": ["r", "python", "julia", "matlab"]
}
```

Those two are the only actual requirements in the file, and that's usually all you'll be including there. Note, you can't enter `matplotlib` or `ggplot2` as lanugages... we're not there quite yet!

#### Step Six:

```bash
$ python run.py process rad-bar-example
```

Here, `process` is the command and `rad-bar-example` is the *what-to-process*. Optionally, since this should be the only new example added, you can just use the `new` command.

```bash
$ python run.py process new
```

Either way, once you've run one of these commands, the script has YET TO BE RUN! Only the skeleton of the example has been added to our example `tree`. Now we have to actually generate a url for the example.

#### Step Seven: celebrate.

Alright! You did it, this is in the `tree` and you're ready to publish. See the end of this section!

### Adding examples via url

Use with caution. You're hard-coding a url which points to a mutable plotly graph. I.e., if you make an example in plotly and the resulting url is `https://plot.ly/~you/100023`, if you *change* your 100023rd plot, though the *current* examples page will not change, *future* pages that re-process your `https://plot.ly/~you/100023` file *will* change.

That said, cool, you can just throw urls into a `url.json` file!

```json
{
    "url": "https://plot.ly/~dude-face/77"
}
```

Not heavily used, walkthrough coming soon!

#### Steps One - Seven: TBD

### Publish!

These final steps are in common for all examples.

#### Step Eight, test (optional):

```bash
$ python publish.py test
```

This will give you a ton of output that should be fairly readable. You should check the file, `reports/test-report.txt`. If `rad-bar-example` is listed as a `Complete Example`, woohoo! Otherwise, (a) the script you wrote broke somewhere (unlikely, you're a pro), (b) the exceptions script didn't generate a url, (c) the image server wasn't able to generate a static image, (d) hmmm well, you're on your own. Do note that there should be some helpful information in the `reports/test-report.txt` file, even for failed examples.

The reason there's a publish step is to (a) be able to test the `test` directory on a streambed branch without any side-effects and (b) to especially prevent making changes to `PlotBot` files before they're ready to be published! When you're running in `test` mode, all the urls are ported to the `TestBot` user.

#### Step Nine, the real deal! Publish:

```bash
$ python publish.py publish
```

Same deal as step seven, but now check out the `reports/publish-report.txt` file.

#### Step Ten, lookin' good. Port those files to Streambed:

Assuming that you've got the following directory structure. That is, both the documentation and streambed share the same repo...

```
$ cp published/images/* ../streambed/shelly/api_docs/static/api_docs/image/examples/
$ cp -R published/api-docs/* ../streambed/shelly/api_docs/templates/api_docs/examples/
```

## `run.py`

This is the first of two major processes that need to happen to prepare `hard-coded` examples to be used on plotly's site. You use this program as follows:

```bash
python run.py command option_1 option_2 ... option_n
```

To see the available commands and options, enter this in a terminal program in the same directory as `run.py`:
```bash
python run.py
```
You may have as many `options` as you wish. When an `option` is an example or section name, `options` match *entire* sections, e.g, `chart-types` or they may match a *single* example, e.g., `basic-bar`. However, they must be *exact* matches (`basic`, `basic-ba`, and `basic-bear` will not--currently--match any examples). You can usually access options like `all` or `new` to run `all` examples or the subset `new`.

Output from `run.py` is stored (and overwritten) in a file called `tree.json`. The examples that have already been processed are listed in `ids.json` and leveraged so that the terminal line:

```bash
python run.py process new
```

... will process only examples found as leaves in the `hard-coded` directory tree, but *not yet* listed in `ids.json`.

When using `script.ext` files, `run.py` will output executable code in an `exceptions` directory that will be used by other programs--e.g., `python_exceptions.py`, `mpl_exceptions.py`, `matlab_exceptions.m`--to *complete* examples, i.e., give them plot urls.

You can also make `meta` adjustments by running the `meta` command. 

```bash
python run.py meta all
```

This will look at the intersection of the set of processed ids and the current set of all ids and only update meta information for this intersection. Otherwise, there could be meta information transferred for examples that haven't been run yet.

The `meta` command exists to push through small changes in the config that don't require processing. Be careful though, if you change something like `languages` in the config file, you'll get an error when you run `publish.py`, that's because adding new langauges will require additional processing!

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
 * `tree.json`, all the processed information so far
 * `ids.json`, a list of the examples that have been processed


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
 * tree.json file
 * command (`test` or `publish`)
 * `auto-docs` directory
 * `exceptions` directory
* output
 * `test-published` or `published` directory
 * `test-published/api-docs/references` `published/api-docs/references` directory
 * `report` directory

## completing *language-specific* exmples

Each language needs its own program to:

1. Navigate to its language in the `exceptions` directory
2. Run each script in that directory
3. Save the resulting plot url as `example_id.json` with contents `{"url": "https://plot.ly/~some-user/13"}`

`publish.py` anticipates these `*.json` files existing in this directory and will be able to properly add the example if it exists.

## why all the trouble?

The resulting `published` directory contains information that can be copied straight into the plotly backend and *just work*. The content is handled totally separately from the *look* of the examples, so we don't need to mess with one to change the other.
