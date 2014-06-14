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
    images/
    references/
test-published/
  api-docs/
    section/
      subsection/
        example/
          language/
    images/
    references/
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
* languages [conditionally-required]
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

## Adding an Example (quick overview)

1. Pick a unique name:
Each example folder needs to have a unique name, otherwise, you'll quickly get an error on compiling. The folder name is also called the *id*, which is also referred to as the *filename* here. There all the same, you write it once when you make the folder.
2. Pick a method:
* model
* script
* url
3. Fill out the config.json
4. run run.py
If you've just added one example, try `python run.py code+urls examplename` where examplename is the new example folder. If you've added a number of examples, try `python run.py code+urls new`, which will find all the unprocessed examples and run them.

## Adding an example by using a JSON model
