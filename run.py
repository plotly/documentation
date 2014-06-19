import requests, json, os, sys, time, cgi
import plotly.plotly as py
import plotly.exceptions
from plotly.graph_objs import *  # for exec statements
from exceptions import OSError
from requests.exceptions import RequestException

total_examples = 0
example_count = 0
ids = {}
processed_ids = set()

### auto-generated file stuff ###
pre_book_file = 'pre-book.json'

### hard-coded file stuff ###
hard_coded_dir = 'hard-coded'
config_file = 'config.json'
model_file = 'model.json'
url_file = 'url.json'
image_file = 'image.png'
code_file = 'code.txt'

### keys that are OK to go into final pre_book save ###
leaf_keys = ["config", "is_leaf", "image", "id", "url", "path", "exception",
             "complete", "private", "prepend", "append"]
branch_keys = ["config", "is_leaf", "id", "path", "subsections",
               "has_thumbnail"]

### define config_requirements ###
requirements = dict(
    subsection=dict(
        name=basestring,
        has_thumbnail=bool
    ),
    example=dict(
        name=basestring,
        languages=list
    )
)

### define allowable config entries ###

allowable = dict(
    subsection={
        'name': basestring,
        'has_thumbnail': bool,
        'relative_url': basestring,
        'description': basestring,
        'order': list
    },
    example={
        'name': basestring,
        'languages': list,
        'description': basestring,
        'tags': list,
        'prepend': basestring,
        'append': basestring,
        'init': bool,
        'plot-options': dict
    }
)

### sign in stuff: each user has a 'un' and 'ak' ###
## users ##
# tester, julia, matlab, python, r, node, publisher
with open('users.json') as users_file:
    users = json.load(users_file)

with open('dirs.json') as dirs_file:
    dirs = json.load(dirs_file)

py.sign_in(users['tester']['un'], users['tester']['ak'])

### server stuff ###
translator_server = "https://plot.ly/translate_figure/"

### style stuff ###
lines_between_sections = 2

### define commands to run with, can be combined with '+' (e.g., code+urls) ###
commands = ['code', 'urls', 'clean']

### define supported languages ###
languages = ['python', 'julia', 'matlab', 'r', 'node', 'ggplot', 'matplotlib']

### define extensions for executable code ###
lang_to_ext = dict(python='py',
                   julia='jl',
                   matlab='m',
                   r='r',
                   node='js',
                   ggplot='r',
                   matplotlib='py')
ext_to_lang = dict(py='python',
                   jl='julia',
                   m='matlab',
                   r='r',
                   js='node',
                   gg='ggplot',
                   mpl='matplotlib')

### define imports ###
imports = dict(
    python="import plotly.plotly as py\nfrom plotly.graph_objs import *",
    matlab="",
    r="library(plotly)",
    julia="using Plotly",
    node=""
)

### define sign in ###
sign_in = {
    'documentation': dict(
        python=
            "py.sign_in({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['python']),
        matlab=
            "signin({{% if username %}}'{{{{username}}}}'"
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}'{{{{api_key}}}}'"
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['matlab']),
        r=
            "p <- plotly(username={{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "key={{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['r']),
        julia=
            "Plotly.signin({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}\"{un}\"{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}\"{ak}\"{{% endif %}})".format(**users['julia']),
        node=
            "var plotly = require('plotly')("
            "{{% if username %}}'{{{{username}}}}'"
            "{{% else %}}'{un}'{{% endif %}},"
            "{{% if api_key %}}'{{{{api_key}}}}'"
            "{{% else %}}'{ak}'{{% endif %}});".format(**users['node']),
        ggplot=
            "p <- plotly(username={{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "key={{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['r']),
        matplotlib=
            "py.sign_in({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['python']),
    ),
    'execution': dict(
        python="py.sign_in('{un}', '{ak}')".format(**users['tester']),
        matlab="signin('{un}', '{ak}')".format(**users['tester']),
        r="p <- plotly(username='{un}', key='{ak}')".format(**users['tester']),
        julia='using Plotly\nPlotly.signin("{un}", "{ak}")'
              ''.format(**users['tester']),
        node="var plotly = require('plotly')('{un}', '{ak}')"
             "".format(**users['tester']),
        ggplot="p <- plotly(username='{un}', key='{ak}')"
               "".format(**users['tester']),
        matplotlib="py.sign_in('{un}', '{ak}')".format(**users['tester']),
    )
}


def get_command_list():
    try:
        arg1 = sys.argv[1]
        command_list = arg1.split('+')
        for command in command_list:
            if command not in commands:
                raise Exception()
    except:
        command_list = None
    if not command_list:
        print "usage:\n"\
              "python run.py command examplename\n"\
              "python run.py command\n",\
              "python run.py command1+command2+command3 examplename\n"\
              "python run.py command1+command2+command3\n"
        print 'commands:', commands
        sys.exit(0)
    else:
        return command_list


def get_keepers():
    keepers = []
    while len(sys.argv) > 2:
        keepers += [sys.argv.pop()]
    return keepers


def clean():
    """removes ENTIRE doc_dir directory, careful!"""
    def clean_directory(directory):
        for name in os.listdir(directory):
            full_name = os.path.join(directory, name)
            if os.path.isdir(full_name):
                clean_directory(full_name)
                os.rmdir(full_name)
            else:
                os.remove(full_name)
    if os.path.exists(dirs['run']):
        clean_directory(dirs['run'])
    if os.path.exists(dirs['exceptions']):
        clean_directory(dirs['exceptions'])
    if os.path.exists(pre_book_file):
        os.remove(pre_book_file)


def load_previous_pre_book():
    if os.path.exists(pre_book_file):
        with open(pre_book_file) as f:
            return json.load(f)
    else:
        return {}


def write_pre_book(section_dir, keepers, previous_pre_book):
    """
    1. for each directory, if there are sub-directories: recurse
    2. if no sub-directories, and name in keepers, keep!
    """
    section_dict = dict()
    subsections = [child for child in os.listdir(section_dir)
                   if os.path.isdir(os.path.join(section_dir, child))]
    files = [child for child in os.listdir(section_dir)
             if not os.path.isdir(os.path.join(section_dir, child))
             and child != config_file
             and child != '.DS_Store']
    if subsections and files:
        raise Exception("found a directory that has BOTH subsections AND "
                        "files in '{}'."
                        "\n\tsubsections: {}"
                        "\n\tfiles: {}"
                        "".format(section_dir, subsections, files))
    elif subsections:
        subsections_dict = dict()
        for subsection_name in subsections:
            subsection_dir = os.path.join(section_dir, subsection_name)
            subsection_dict = write_pre_book(
                subsection_dir, keepers, previous_pre_book)
            if subsection_dict:
                subsections_dict[subsection_name] = subsection_dict
        if subsections_dict:
            section_dict['subsections'] = subsections_dict
            section_dict['is_leaf'] = False
    elif files:
        id = section_dir.split(os.path.sep)[-1]
        if id in ids:
            raise Exception(
                "identical ids found in '{}' and '{}'. Example folders must "
                "have unique names.".format(ids[id], section_dir)
            )
        else:
            ids[id] = section_dir
        if keepers:
            names = section_dir.split(os.path.sep)
            keep = any([True for keeper in keepers if keeper in names])
            if 'new' in keepers:
                if 'processed_ids' not in previous_pre_book:
                    keep = True
                elif id not in previous_pre_book['processed_ids']:
                    keep = True
        else:
            keep = True
        if keep:
            section_dict['files'] = {f: os.path.join(section_dir, f)
                                     for f in os.listdir(section_dir)
                                     if f != config_file}
            section_dict['is_leaf'] = True
            global total_examples
            total_examples += 1
    if 'files' in section_dict or 'subsections' in section_dict:
        config_path = os.path.join(section_dir, config_file)
        config = validate_and_get_config(config_path, section_dict['is_leaf'])
        section_dict['config'] = config
        section_dict['path'] = section_dir
        section_dict['id'] = section_dir.split(os.path.sep)[-1]
        return section_dict


def validate_and_get_config(config_path, is_leaf):
    try:
        with open(config_path) as f:
            config = json.load(f)
    except ValueError:
        raise ValueError("invalid json in '{}'".format(config_path))
    if is_leaf:
        section_type = 'example'
    else:
        section_type = 'subsection'
    for key, val in requirements[section_type].items():
        if key not in config:
            raise KeyError(
                "missing key '{}' in config at location '{}'"
                "".format(key, config_path))
        elif not isinstance(config[key], val):
            raise ValueError(
                "wrong value type for key '{}' in config at location '{}'"
                "".format(key, config_path))
    for key, val in allowable[section_type].items():
        if key in config:
            if not isinstance(config[key], val):
                raise ValueError(
                    "wrong value type for key '{}' in config at location '{}'"
                    "".format(key, config_path))
    for key in config:
        if key not in allowable[section_type]:
            raise KeyError(
                "invalid key '{}' in config at location '{}'"
                "".format(key, config_path))
    return config


def validate_example_structure(section):
    if 'subsections' in section:
        for subsection in section['subsections'].values():
            validate_example_structure(subsection)
    elif 'files' in section:
        scripts = [filename for filename in section['files']
                   if filename.split('.')[0] == 'script']
        if len(scripts) > 1:
            raise Exception("more than one script.ext found in '{}'"
                            "".format(section['path']))
        elif scripts and model_file in section:
            raise Exception("script.ext file and model.json found in '{}'"
                            "".format(section['path']))
        elif scripts and url_file in section:
            raise Exception("script.ext file and url.json found in '{}'"
                            "".format(section['path']))
        elif model_file in section and url_file in section:
            raise Exception("model.json and url.json found in '{}'"
                            "".format(section['path']))


def process_pre_book(section, command_list):
    if section['is_leaf']:
        global example_count, processed_ids
        example_count += 1
        print("\t{} of {}".format(example_count, total_examples)),
        try:
            if model_file in section['files']:
                process_model_example(section, command_list)
            elif any(['script' in filename for filename in section['files']]):
                process_script_example(section, command_list)
            elif url_file in section['files']:
                process_url_example(section, command_list)
            else:
                print("\t\texample '{}' cannot be processed"
                      "".format(section))
        except plotly.exceptions.PlotlyError as err:
            print "\t\t" + "\n\t\t\t".join(err.message.splitlines())
            section['complete'] = False
        else:
            processed_ids.add(section['id'])
            mark_completeness(section)
    else:
        for subsection in section['subsections'].values():
            process_pre_book(subsection, command_list)


def process_model_example(example, command_list):
    """
    1. load model.json file
    2. for each language with 'model' as the *source*...
    3. translate model to language with translator
    4. if save image: save image
    5. if save code: save code
    6. if save url: save url
    """
    print "\tprocessing {} in {}".format(model_file, example['path'])
    example['type'] = 'model'
    try:
        with open(example['files'][model_file]) as f:
            model = json.load(f)
    except KeyError:
        raise KeyError(
            "{} required and could not be found in {}"
            "".format(model_file, example['path']))
    except ValueError:
        raise ValueError(
            "{} required and could not be opened in {}"
            "".format(model_file, example['path']))
    if 'python' not in example['config']['languages']:
        code = ""
        if 'init' in example['config'] and example['config']['init']:
            init_file = "init.{}".format(lang_to_ext['python'])
            if init_file in example['files']:
                with open(example['files'][init_file]) as f:
                    code += f.read() + "\n"
            else:
                raise plotly.exceptions.PlotlyError(
                    "couldn't find '{}' in '{}'"
                    "".format(init_file, example['path'])
                )
        data = json.dumps({'json_figure': model,
                           'language': 'python',
                           'pretty': True})
        res = get_plotly_response(translator_server, data=data)
        if not res:
            raise plotly.exceptions.PlotlyError(
                "couldn't connect to plotly at resource. '{}'".format(translator_server)
            )
        elif res.status_code != 200:
            raise plotly.exceptions.PlotlyError(
                "unsuccessful request at resource. '{}'".format(translator_server)
            )
        code += res.content
        code = code.replace("<pre>", "").replace("</pre>", "")
        code = code.replace('">>>', "").replace('<<<"', "")
        code = code.replace("'>>>", "").replace("<<<'", "")
        exec_string = format_code(code, 'python', example, model, 'execution')
        example['python-exec'] = exec_string
    for language in example['config']['languages']:
        code = ""
        if 'init' in example['config'] and example['config']['init']:
            init_file = "init.{}".format(lang_to_ext[language])
            if init_file in example['files']:
                with open(example['files'][init_file]) as f:
                    code += f.read() + "\n"
            else:
                raise plotly.exceptions.PlotlyError(
                    "couldn't find '{}' in '{}'"
                    "".format(init_file, example['path'])
                )
        data = json.dumps({'json_figure': model,
                           'language': language,
                           'pretty': True})
        res = get_plotly_response(translator_server, data=data)
        if not res:
            raise plotly.exceptions.PlotlyError(
                "couldn't connect to plotly at resource. '{}'".format(translator_server)
            )
        elif res.status_code != 200:
            raise plotly.exceptions.PlotlyError(
                "unsuccessful request at resource. '{}'".format(translator_server)
            )
        code += res.content
        code = code.replace("<pre>", "").replace("</pre>", "")
        code = code.replace('">>>', "").replace('<<<"', "")
        code = code.replace("'>>>", "").replace("<<<'", "")
        exec_string = format_code(code, language, example, model, 'execution')
        if language == 'python':
            example['python-exec'] = exec_string
        if 'code' in command_list:
            code_string = format_code(code, language, example, model)
            code_path = save_code(
                code_string, example, language, 'documentation'
            )
            example[language] = code_path
            save_code(exec_string, example, language, 'execution')
    if 'urls' in command_list:
        if 'python-exec' in example:
            try:
                exec_locals = exec_python_string(example['python-exec'])
            except Exception as err:
                raise plotly.exceptions.PlotlyError(
                    "exec of python string raised exception:"
                    "\n\'{}'"
                    "\nskipping...".format(err.message))
            if 'plot_url' in exec_locals:
                example['url'] = exec_locals['plot_url']
            else:
                raise plotly.exceptions.PlotlyError(
                    "\t\t'plot_url' not in exec_locals, skipping..."
                )
    mark_completeness(example)


def process_script_example(example, command_list):
    """
    1. for each language with 'model' as the *source*...
    2. load script.ext file
    3. if save image: save image
    4. if save code: save code
    5. if save url: save url
    """
    print "\tprocessing scripts in {}".format(example['path'])
    example['type'] = 'script'
    script_file = [fn for fn in example['files'] if 'script' in fn][0]
    language = ext_to_lang[script_file.split('.')[-1]]
    example['config']['languages'] = [language]
    try:
        with open(example['files'][script_file]) as f:
            script = f.read()
    except KeyError:
        raise plotly.exceptions.PlotlyError(
            "'{}' not found in '{}'".format(script_file, example['path'])
        )
    exec_string = ""
    for line in script.splitlines():
        if line[:6] == sign_in['execution'][language][:6]:  # TODO, better way?
            exec_string += sign_in['execution'][language]
        elif '>>>filename<<<' in line:
            exec_string += line.replace('>>>filename<<<', example['id'])
        else:
            exec_string += line
        exec_string += "\n"
    save_code(exec_string, example, language, 'exception')
    if 'code' in command_list:
        code_string = exec_string.replace(sign_in['execution'][language],
                                          sign_in['documentation'][language])
        code_string = cgi.escape(code_string)
        code_path = save_code(code_string, example, language, 'documentation')
        example[language] = code_path
        save_code(exec_string, example, language, 'execution')


def process_url_example(example, command_list):
    """
    1. for each language with 'url' as the *source*...
    2. translate model to language with translator
    3. if save image: save image
    4. if save code: save code
    """
    print "\tprocessing {} in {}".format(url_file, example['path'])
    example['type'] = 'url'
    try:
        with open(example['files'][url_file]) as f:
            url = json.load(f)['url']
    except ValueError:
        raise plotly.exceptions.PlotlyError(
            "{} required and could not be opened in {}"
            "".format(url_file, example['path']))
    except KeyError:
        raise plotly.exceptions.PlotlyError(
            "{} required and could not be found in {}"
            "".format(url_file, example['path']))
    json_resource = "{}.json".format(url)
    res = get_plotly_response(json_resource)
    if not res:
        raise plotly.exceptions.PlotlyError(
            "couldn't connect to plotly at resource. '{}'".format(json_resource)
        )
    elif res.status_code != 200:
        raise plotly.exceptions.PlotlyError(
            "unsuccessful request at resource. '{}'".format(json_resource)
        )
    figure_str = res.content
    figure_str = figure_str.replace("<pre>", "").replace("</pre>", "")
    figure_str = figure_str.replace("<html>", "").replace("</html>", "")
    figure = json.loads(figure_str)
    if 'python' not in example['config']['languages']:
        code = ""
        resource = "{}.{}".format(url, lang_to_ext['python'])
        res = get_plotly_response(resource)
        if not res:
            raise plotly.exceptions.PlotlyError(
                "couldn't connect to plotly at resource. '{}'".format(resource)
            )
        elif res.status_code != 200:
            raise plotly.exceptions.PlotlyError(
                "unsuccessful request at resource. '{}'".format(resource)
            )
        code += res.content
        code = code.replace("<pre>", "").replace("</pre>", "")
        code = code.replace("<html>", "").replace("</html>", "")
        exec_string = format_code(
            code, 'python', example, figure, 'execution'
        )
        example['python-exec'] = exec_string
    for language in example['config']['languages']:
        code = ""
        resource = "{}.{}".format(url, lang_to_ext[language])
        res = get_plotly_response(resource)
        if not res:
            raise plotly.exceptions.PlotlyError(
                "couldn't connect to plotly at resource. '{}'".format(resource)
            )
        elif res.status_code != 200:
            raise plotly.exceptions.PlotlyError(
                "unsuccessful request at resource. '{}'".format(resource)
            )
        code += res.content
        code = code.replace("<pre>", "").replace("</pre>", "")
        code = code.replace("<html>", "").replace("</html>", "")
        exec_string = format_code(
            code, language, example, figure, 'execution'
        )
        if language == 'python':
            example['python-exec'] = exec_string
        if 'code' in command_list:
            code_string = format_code(code, language, example, figure)
            code_path = save_code(
                code_string, example, language, 'documentation'
            )
            example[language] = code_path
            save_code(exec_string, example, language, 'execution')
    if 'urls' in command_list:
        try:
            exec_locals = exec_python_string(example['python-exec'])
        except Exception as err:
            raise plotly.exceptions.PlotlyError(
                "exec of python string raised exception:"
                "\n\'{}'"
                "\nskipping...".format(err.message))
        if 'plot_url' in exec_locals:
            example['url'] = exec_locals['plot_url']
        else:
            raise plotly.exceptions.PlotlyError(
                "\t\t'plot_url' not in exec_locals, skipping...")


def get_plotly_response(resource, data=None, attempts=2, sleep=5):
    for attempt in range(1, attempts+1):
        try:
            if data:
                res = requests.get(resource, data=data)
            else:
                res = requests.get(resource)
            return res
        except RequestException:
            if attempt < attempts:
                print "\t\tcouldn't connect to plotly, trying again..."
            time.sleep(sleep)


def save_code(code, example, language, mode):
    if mode == 'documentation':
        example_folder = os.path.join(dirs['run'],
                                      *example['path'].split(os.path.sep)[1:])
        code_folder = os.path.join(example_folder, language)
        code_path = os.path.join(code_folder, code_file)
    elif mode == 'execution':
        code_folder = os.path.join(dirs['run'], dirs['executables'], language)
        filename = "{}.{}".format(example['id'], lang_to_ext[language])
        code_path = os.path.join(code_folder, filename.replace("-", "_"))
    elif mode == 'exception':
        code_folder = os.path.join(dirs['exceptions'], language)
        filename = "{}.{}".format(example['id'], lang_to_ext[language])
        code_path = os.path.join(code_folder, filename.replace("-", "_"))
    else:
        raise Exception("mode: 'execution' | 'documentation' | 'exception'")
    if not os.path.exists(code_folder):
        os.makedirs(code_folder)
    with open(code_path, 'w') as f:
        f.write(code)
    return code_path


def exec_python_string(exec_string):
    """save image to directory by executing python code-string and saving"""
    exec exec_string
    return locals()


def format_code(body_string, language, example, figure, mode='documentation'):
    file_import = imports[language]
    file_sign_in = sign_in[mode][language]
    plot_call = get_plot_call(language, figure, example, mode=mode)
    sections = [file_import, file_sign_in, body_string, plot_call]
    sections = [sec for sec in sections if sec]
    code_string = ("\n" * lines_between_sections).join(sections)
    if mode == 'documentation':
        code_string = cgi.escape(code_string)
    return code_string


def get_plot_call(language, figure, example, mode):
    """define strings for actual plot calls

    :rtype : str
    """
    tf_dict = {
        True: dict(
            python='True',
            matlab='true',
            julia='true',
            r='TRUE',
            node='true'
        ),
        False: dict(
            python='False',
            matlab='false',
            julia='false',
            r='FALSE',
            node='false'
        )
    }
    filename = example['path'].split(os.path.sep)[-1]
    try:
        plot_options = example['config']['plot-options']
    except KeyError:
        plot_options = {}
    else:
        if 'world_readable' in plot_options and not plot_options['world_readable']:
            example['private'] = True
    if mode == 'execution':
        plot_options['auto_open'] = False
    if language == 'python':
        string = "plot_url = py.plot("
        if 'layout' in figure:
            string += 'fig, '
        else:
            string += 'data, '
        string += "filename='{}'".format(filename)
        if plot_options:
            for key, val in plot_options.items():
                try:
                    string += ", {}={}".format(key, tf_dict[val][language])
                except KeyError:
                    string += ", {}={}".format(key, val)
        return string + ")"
    elif language == 'matlab':
        string = "response = plotly(data, struct("
        if 'layout' in figure:
            string += "'layout', layout, "
        string += "'filename', '{}'".format(filename)
        string += ", 'fileopt', 'overwrite'"
        if plot_options:
            for key, val in plot_options.items():
                try:
                    string += ", '{}', '{}'".format(key, tf_dict[val][language])
                except KeyError:
                    string += ", '{}', '{}'".format(key, val)
        string += "));"
        string += "\nplot_url = response.url"
        return string
    elif language == 'julia':
        string = "response = Plotly.plot([data], ["
        if 'layout' in figure:
            string += '"layout" => layout, '
        string += '"filename" => "{}"'.format(filename)
        string += ', "fileopt" => "overwrite"'
        if plot_options:
            for key, val in plot_options.items():
                try:
                    string += ', "{}" => "{}"'.format(key,
                                                      tf_dict[val][language])
                except KeyError:
                    string += ', "{}" => "{}"'.format(key, val)
        string += "])"
        string += '\nplot_url = response["url"]'
        return string
    elif language == 'r':
        string = 'response <- p$plotly(data, kwargs=list('
        if 'layout' in figure:
            string += 'layout=layout, '
        string += 'filename="{}"'.format(filename)
        string += ', fileopt="overwrite"'
        if plot_options:
            for key, val in plot_options.items():
                try:
                    string += ', {}="{}"'.format(key, tf_dict[val][language])
                except KeyError:
                    string += ', {}="{}"'.format(key, val)
        string += "))"
        string += '\nurl <- response$url\n'
        string += 'filename <- response$filename'
        return string
    elif language == 'node':
        string = 'var graph_options = {{filename: "{}"'.format(filename)
        string += ', fileopt: "overwrite"'
        if 'layout' in figure:
            string += ', layout: layout'
        if plot_options:
            for key, val in plot_options.items():
                try:
                    string += ', {}: "{}"'.format(key, tf_dict[val][language])
                except KeyError:
                    string += ', {}: "{}"'.format(key, val)
        string += '}'
        string += "\nplotly.plot("
        if 'data' in figure and figure['data']:
            string += "data"
        else:
            string += "[]"
        string += ", graph_options, function (err, msg) {"
        string += "\n    console.log(msg);"
        string += "\n});"
        return string
    else:
        return ''


def mark_completeness(example):
    has_url = 'url' in example
    has_all_languages = all([language in example
                             for language in example['config']['languages']])
    if has_url and has_all_languages:
        example['complete'] = True
    else:
        example['complete'] = False


def trim_pre_book(section):
    section_keys = section.keys()
    if section['is_leaf']:
        for key in section_keys:
            if key not in leaf_keys and key not in languages:
                del section[key]
    else:
        for key in section_keys:
            if key not in branch_keys:
                del section[key]
        for subsection in section['subsections'].values():
            trim_pre_book(subsection)


def clear_reprocessed_examples(section):
    if section:
        if section['is_leaf']:
            if section['id'] in processed_ids:
                keys = section.keys()
                for key in keys:
                    del section[key]
        else:
            for subsection in section['subsections'].values():
                clear_reprocessed_examples(subsection)


def save_pre_book(pre_book, previous_pre_book):
    try:
        previously_processed_ids = set(previous_pre_book['processed_ids'])
    except KeyError:
        previously_processed_ids = set()
    pre_book['processed_ids'] = list(
        set.union(processed_ids, previously_processed_ids))
    try:
        os.makedirs(dirs['run'])
    except OSError:
        pass
    new_pre_book = nested_merge(previous_pre_book, pre_book)
    with open(pre_book_file, 'w') as f:
        json.dump(new_pre_book, f, indent=4)


def nested_merge(old, update):
    """
    1. Assumes that branches are the same type!
    2. Doesn't look inside lists! Treats them as a leaf/end/terminal/etc
    """
    new = dict()
    new.update(old)
    if isinstance(update, dict):
        for key, val in update.items():
            if key not in old:
                new[key] = update[key]
            elif isinstance(val, dict):
                new[key] = nested_merge(old[key], val)
            else:
                new[key] = val
    return new


def main():
    command_list = get_command_list()
    keepers = get_keepers()
    print "\n\nrunning with commands: {}\n\n".format(command_list)
    if 'clean' in command_list:
        clean()
        command_list.pop(command_list.index('clean'))
    if command_list:
        previous_pre_book = load_previous_pre_book()
        print "compiling pre-book"
        pre_book = write_pre_book(hard_coded_dir, keepers, previous_pre_book)
        if pre_book:
            print "validating file structure in examples"
            validate_example_structure(pre_book)
            print "about to get it done."
            process_pre_book(pre_book, command_list)
            print "got it done, cleaning up!"
            trim_pre_book(pre_book)
            clear_reprocessed_examples(previous_pre_book)
            print "saving pre_book"
            save_pre_book(pre_book, previous_pre_book)
        else:
            print "you're filter didn't match a section OR an example. bummer!"

if __name__ == "__main__":
    main()
