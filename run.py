import requests, json, os, sys, time, cgi
import plotly.plotly as py
from plotly.graph_objs import *  # for exec statements
import plotly.exceptions
from exceptions import OSError
from requests.exceptions import RequestException

total_examples = 0
example_count = 0

# holds special references to 'files' like 'pre-book' shared with publish.py
with open("files.json") as files_file:
    files = json.load(files_file)

# holds special references to 'directories' shared with publish.py
with open("dirs.json") as dirs_file:
    dirs = json.load(dirs_file)

### sign in stuff: each user has a 'un' and 'ak' ###
## users ##
# tester, julia, matlab, python, r, nodejs, publisher
with open('users.json') as users_file:
    users = json.load(users_file)

py.sign_in(users['tester']['un'], users['tester']['ak'])

### keys that are OK to go into final pre_book save ###
tree_keys = dict(
    all=[
        "config",
        "is_leaf",
        "id",
        "path"
    ],
    leaf=[
        "type",
        "image",
        "url",
        "exception",
        "complete",  # todo: remove?
        "private",
        "prepend",
        "append"
    ],
    branch=[
        "branches"
    ]
)

### define config_requirements ###
requirements = dict(
    branch=dict(
        name=basestring,
        has_thumbnail=bool
    ),
    leaf=dict(
        name=basestring,
        languages=list
    )
)

### define allowable config entries ###
allowable = dict(
    branch={
        'name': basestring,
        'has_thumbnail': bool,
        'relative_url': basestring,
        'description': basestring,
        'order': list
    },
    leaf={
        'name': basestring,
        'languages': list,
        'description': basestring,
        'tags': list,
        'prepend': basestring,
        'append': basestring,
        'init': bool,
        'plot-options': dict,
        'exempt': bool,
        'links': list
    }
)

### server stuff ###
translator_server = "https://plot.ly/translate_figure/"  # todo: put elsewhere.

### style stuff ###
lines_between_sections = 2  # todo: delete?

### define commands to run with, can be combined with '+' (e.g., code+urls) ###
commands = dict(
    process=['all', 'new', 'example_id'],
    obliterate=[dirs['run'], dirs['exceptions'], files['tree'], dirs['test'],
                dirs['publish'], files['tree'], 'all'],  # todo, more?
    clear=['example_id'],
    meta=['example_id', 'all']
)

### define supported languages ###
languages = ['python', 'julia', 'matlab', 'r', 'nodejs', 'ggplot2', 'matplotlib']

### define extensions for executable code ###
lang_to_ext = dict(python='py',
                   julia='jl',
                   matlab='m',
                   r='r',
                   nodejs='js',
                   ggplot2='r',
                   matplotlib='py')
ext_to_lang = dict(py='python',
                   jl='julia',
                   m='matlab',
                   r='r',
                   js='nodejs',
                   gg='ggplot2',
                   mpl='matplotlib')

### define imports ###
imports = dict(
    python="import plotly.plotly as py\nfrom plotly.graph_objs import *",
    matlab="",
    r="library(plotly)",
    ggplot2="",
    matplotlib="",
    julia="using Plotly",
    nodejs=""
)

### define sign in ###
sign_in = {
    'documentation': dict(
        python=
            "{{% if not username %}}"
            "# Fill in with your personal username and API key\n"
            "# or, use this public demo account\n"
            "{{% endif %}}"
            "py.sign_in({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['python']),
        matlab=
            "{{% if not username %}}"
            "% Fill in with your personal username and API key\n"
            "% or, use this public demo account\n"
            "{{% endif %}}"
            "signin({{% if username %}}'{{{{username}}}}'"
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}'{{{{api_key}}}}'"
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['matlab']),
        r=
            "{{% if not username %}}"
            "# Fill in with your personal username and API key\n"
            "# or, use this public demo account\n"
            "{{% endif %}}"
            "p <- plotly(username={{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "key={{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['r']),
        julia=
            "{{% if not username %}}"
            "# Fill in with your personal username and API key\n"
            "# or, use this public demo account\n"
            "{{% endif %}}"
            "Plotly.signin({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}\"{un}\"{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}\"{ak}\"{{% endif %}})".format(**users['julia']),
        nodejs=
            "{{% if not username %}}"
            "// Fill in with your personal username and API key\n"
            "// or, use this public demo account\n"
            "{{% endif %}}"
            "var plotly = require('plotly')("
            "{{% if username %}}'{{{{username}}}}'"
            "{{% else %}}'{un}'{{% endif %}},"
            "{{% if api_key %}}'{{{{api_key}}}}'"
            "{{% else %}}'{ak}'{{% endif %}});".format(**users['nodejs']),
        ggplot2=
            "{{% if not username %}}"
            "# Fill in with your personal username and API key\n"
            "# or, use this public demo account\n"
            "{{% endif %}}"
            "p <- plotly(username={{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "key={{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['r']),
        matplotlib=
            "{{% if not username %}}"
            "# Fill in with your personal username and API key\n"
            "# or, use this public demo account\n"
            "{{% endif %}}"
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
        nodejs="var plotly = require('plotly')('{un}', '{ak}')"
             "".format(**users['tester']),
        ggplot2="p <- plotly(username='{un}', key='{ak}')"
               "".format(**users['tester']),
        matplotlib="py.sign_in('{un}', '{ak}')".format(**users['tester']),
    )
}


def get_command():
    try:
        command = sys.argv[1]
    except IndexError:
        command = None
    if command not in commands:
        print ("usage:\n"
               "python run.py command option\n"
               "python run.py command option_1 option_2 ... option_n\n")
        print 'commands:'
        for command in commands:
            print '\t', command, "options: {}".format(commands[command])
        sys.exit(0)
    else:
        return command


def get_options():
    options = []
    while len(sys.argv) > 2:
        options += [sys.argv.pop()]
    if not options:
        print ("usage:\n"
               "python run.py command option\n"
               "python run.py command option_1 option_2 ... option_n\n")
        print 'commands:'
        for command in commands:
            print '\t', command, "options: {}".format(commands[command])
        sys.exit(0)
    return options


def obliterate(path):
    """see ya!"""
    if os.path.exists(path):
        if os.path.isfile(path):
            os.remove(path)
        else:
            for child in os.listdir(path):
                obliterate(os.path.join(path, child))
            os.rmdir(path)


def clear(section, options, previous_leaf_ids):
    if section['is_leaf']:
        if section['id'] in options:
            previous_leaf_ids.discard(section['id'])
            keys = section.keys()
            for key in keys:
                del section[key]
    else:
        keys = section['branches'].keys()
        for key in keys:
            clear(section['branches'][key], options, previous_leaf_ids)
            if not section['branches'][key]:
                del section['branches'][key]
        if not section['branches']:
            keys = section.keys()
            for key in keys:
                del section[key]



# def clean():
#     """removes ENTIRE doc_dir directory, careful!"""
#     def clean_directory(directory):
#         for name in os.listdir(directory):
#             full_name = os.path.join(directory, name)
#             if os.path.isdir(full_name):
#                 clean_directory(full_name)
#                 os.rmdir(full_name)
#             else:
#                 os.remove(full_name)
#     if os.path.exists(dirs['run']):
#         print "\ttotally deleting '{}'".format(dirs['run'])
#         clean_directory(dirs['run'])
#     if os.path.exists(files['tree']):
#         print "\ttotally deleting '{}'".format(files['tree'])
#         os.remove(files['tree'])


def load_previous_tree():
    if os.path.exists(files['tree']):
        with open(files['tree']) as f:
            return json.load(f)
    else:
        return {}


def load_previous_leaf_ids():
    if os.path.exists(files['ids']):
        with open(files['ids']) as f:
            return set(json.load(f))
    else:
        return set()



def grow_tree(section_dir, options, previous_leaf_ids, leaf_ids):
    """
    1. for each directory, if there are sub-directories: recurse
    2. if no sub-directories, and name in options, keep!
    """
    section_dict = dict()
    branches = [child for child in os.listdir(section_dir)
                if os.path.isdir(os.path.join(section_dir, child))]
    leaf_files = {child: os.path.join(section_dir, child) for child in os.listdir(section_dir)
                  if not os.path.isdir(os.path.join(section_dir, child))
                  and child != files['config']
                  and child[0] != '.'}
    if branches and leaf_files:
        raise Exception("found a directory that has BOTH folders AND "
                        "files in '{}'."
                        "\n\tfolders: {}"
                        "\n\tfiles: {}"
                        "".format(section_dir, branches, leaf_files))
    elif branches:
        branches_dict = dict()
        for branch_name in branches:
            branch_dir = os.path.join(section_dir, branch_name)
            branch_dict = grow_tree(
                branch_dir, options, previous_leaf_ids, leaf_ids)
            if branch_dict:
                branches_dict[branch_name] = branch_dict
        if branches_dict:
            section_dict['branches'] = branches_dict
            section_dict['is_leaf'] = False
    elif leaf_files:
        leaf_id = section_dir.split(os.path.sep)[-1]
        if leaf_id in leaf_ids:
            raise Exception(
                "identical ids found in '{}' and '{}'. Example folders must "
                "have unique names.".format(leaf_ids[leaf_id], section_dir)
            )
        else:
            leaf_ids[leaf_id] = section_dir
        names = section_dir.split(os.path.sep)
        if 'all' in options:
            process_leaf = True
        elif bool([option for option in options if option in names]):
            process_leaf = True
        elif 'new' in options and leaf_id not in previous_leaf_ids:
            process_leaf = True
        else:
            process_leaf = False
        if process_leaf:
            section_dict['is_leaf'] = True
            section_dict['files'] = leaf_files
            global total_examples
            total_examples += 1
    if 'files' in section_dict or 'branches' in section_dict:
        config_path = os.path.join(section_dir, files['config'])
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
    except IOError:
        raise IOError("no config.json found at '{}'".format(config_path))
    if is_leaf:
        switch = 'leaf'
    else:
        switch = 'branch'
    for key, val in requirements[switch].items():
        if key not in config:
            raise KeyError(
                "missing key '{}' in config at location '{}'"
                "".format(key, config_path))
        elif not isinstance(config[key], val):
            raise ValueError(
                "wrong value type for key '{}' in config at location '{}'"
                "".format(key, config_path))
    for key, val in allowable[switch].items():
        if key in config:
            if not isinstance(config[key], val):
                raise ValueError(
                    "wrong value type for key '{}' in config at location '{}'"
                    "".format(key, config_path))
    for key in config:
        if key not in allowable[switch]:
            raise KeyError(
                "invalid key '{}' in config at location '{}'"
                "".format(key, config_path))
    return config


def validate_leaf_structure(section):
    if section:
        if 'branches' in section:
            for branch in section['branches'].values():
                validate_leaf_structure(branch)
        elif 'files' in section:
            scripts = [filename for filename in section['files']
                       if filename.split('.')[0] == 'script']
            if len(scripts) > 1:
                raise Exception("more than one script.ext found in '{}'"
                                "".format(section['path']))
            elif scripts and files['model'] in section:
                raise Exception("script.ext file and model.json found in '{}'"
                                "".format(section['path']))
            elif scripts and files['url'] in section:
                raise Exception("script.ext file and url.json found in '{}'"
                                "".format(section['path']))
            elif files['model'] in section and files['url'] in section:
                raise Exception("model.json and url.json found in '{}'"
                                "".format(section['path']))


def process_tree(section, processed_ids):
    if section:
        if section['is_leaf']:
            global example_count
            example_count += 1
            print("\t{} of {}".format(example_count, total_examples)),
            try:
                if files['model'] in section['files']:
                    process_model_leaf(section)
                elif any(['script' in filename for filename in section['files']]):
                    process_script_leaf(section)
                elif files['url'] in section['files']:
                    process_url_leaf(section)
                # todo: add exempt. just copies over config...
                else:
                    print("\t\tleaf '{}' cannot be processed"
                          "".format(section))
            except plotly.exceptions.PlotlyError as err:
                print "\t\t" + "\n\t\t\t".join(err.message.splitlines())
                # section['complete'] = False
            else:
                processed_ids.add(section['id'])
                # mark_completeness(section)
        else:
            for branch in section['branches'].values():
                process_tree(branch, processed_ids)


def process_model_leaf(leaf):
    """
    1. load model.json file
    2. for each language with 'model' as the *source*...
    3. translate model to language with translator
    4. save code
    5. save url
    """
    print "\tprocessing {} in {}".format(files['model'], leaf['path'])
    leaf['type'] = 'model'
    try:
        with open(leaf['files'][files['model']]) as f:
            model = json.load(f)
    except KeyError:
        raise KeyError(
            "{} required and could not be found in {}"
            "".format(files['model'], leaf['path']))
    except ValueError:
        raise ValueError(
            "{} required and could not be opened in {}"
            "".format(files['model'], leaf['path']))
    if 'python' not in leaf['config']['languages']:
        code = ""
        if 'init' in leaf['config'] and leaf['config']['init']:
            init_file = "init.{}".format(lang_to_ext['python'])
            if init_file in leaf['files']:
                with open(leaf['files'][init_file]) as f:
                    code += f.read() + "\n"
            else:
                raise plotly.exceptions.PlotlyError(
                    "couldn't find '{}' in '{}'"
                    "".format(init_file, leaf['path'])
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
        exec_string = format_code(code, 'python', leaf, model, 'execution')
        leaf['python-exec'] = exec_string
    for language in leaf['config']['languages']:
        code = ""
        if 'init' in leaf['config'] and leaf['config']['init']:
            init_file = "init.{}".format(lang_to_ext[language])
            if init_file in leaf['files']:
                with open(leaf['files'][init_file]) as f:
                    code += f.read() + "\n"
            else:
                raise plotly.exceptions.PlotlyError(
                    "couldn't find '{}' in '{}'"
                    "".format(init_file, leaf['path'])
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
        exec_string = format_code(code, language, leaf, model, 'execution')
        if language == 'python':
            leaf['python-exec'] = exec_string
        code_string = format_code(code, language, leaf, model)
        code_path = save_code(code_string, leaf, language, 'documentation')
        leaf[language] = code_path
        save_code(exec_string, leaf, language, 'execution')
    if 'python-exec' in leaf:
        try:
            exec_locals = exec_python_string(leaf['python-exec'])
        except Exception as err:
            raise plotly.exceptions.PlotlyError(
                "exec of python string raised exception:"
                "\n\'{}'"
                "\nskipping...".format(err.message))
        if 'plot_url' in exec_locals:
            leaf['url'] = exec_locals['plot_url']
        else:
            raise plotly.exceptions.PlotlyError(
                "\t\t'plot_url' not in exec_locals, skipping..."
            )
    # mark_completeness(leaf)


def process_script_leaf(leaf):
    """
    1. for each language with 'model' as the *source*...
    2. load script.ext file
    3. save code
    """
    print "\tprocessing scripts in {}".format(leaf['path'])
    leaf['type'] = 'script'
    script_file = [fn for fn in leaf['files'] if 'script' in fn][0]
    language = ext_to_lang[script_file.split('.')[-1]]
    leaf['config']['languages'] = [language]
    try:
        with open(leaf['files'][script_file]) as f:
            script = f.read()
    except KeyError:
        raise plotly.exceptions.PlotlyError(
            "'{}' not found in '{}'".format(script_file, leaf['path'])
        )
    exec_string = ""
    for line in script.splitlines():
        if line[:6] == sign_in['execution'][language][:6]:  # TODO, better way?
            exec_string += sign_in['execution'][language]
        elif '>>>filename<<<' in line:
            exec_string += line.replace('>>>filename<<<', leaf['id'])
        else:
            exec_string += line
        exec_string += "\n"
    save_code(exec_string, leaf, language, 'exception')
    code_string = exec_string.replace(sign_in['execution'][language],
                                      sign_in['documentation'][language])
    code_string = cgi.escape(code_string)
    code_path = save_code(code_string, leaf, language, 'documentation')
    leaf[language] = code_path
    save_code(exec_string, leaf, language, 'execution')


def process_url_leaf(leaf):
    """
    1. for each language with 'url' as the *source*...
    2. translate model to language with translator
    3. save code
    """
    print "\tprocessing {} in {}".format(files['url'], leaf['path'])
    leaf['type'] = 'url'
    try:
        with open(leaf['files'][files['url']]) as f:
            url = json.load(f)['url']
    except ValueError:
        raise plotly.exceptions.PlotlyError(
            "{} required and could not be opened in {}"
            "".format(files['url'], leaf['path']))
    except KeyError:
        raise plotly.exceptions.PlotlyError(
            "{} required and could not be found in {}"
            "".format(files['url'], leaf['path']))
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
    if 'python' not in leaf['config']['languages']:
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
            code, 'python', leaf, figure, 'execution'
        )
        leaf['python-exec'] = exec_string
    for language in leaf['config']['languages']:
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
            code, language, leaf, figure, 'execution'
        )
        if language == 'python':
            leaf['python-exec'] = exec_string
        code_string = format_code(code, language, leaf, figure)
        code_path = save_code(code_string, leaf, language, 'documentation')
        leaf[language] = code_path
        save_code(exec_string, leaf, language, 'execution')
    try:
        exec_locals = exec_python_string(leaf['python-exec'])
    except Exception as err:
        raise plotly.exceptions.PlotlyError(
            "exec of python string raised exception:"
            "\n\'{}'"
            "\nskipping...".format(err.message))
    if 'plot_url' in exec_locals:
        leaf['url'] = exec_locals['plot_url']
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


def save_code(code, leaf, language, mode):
    if mode == 'documentation':
        leaf_folder = os.path.join(dirs['run'],
                                      *leaf['path'].split(os.path.sep)[1:])
        code_folder = os.path.join(leaf_folder, language)
        code_path = os.path.join(code_folder, files['code'])
    elif mode == 'execution':
        code_folder = os.path.join(dirs['run'], dirs['executables'], language)
        filename = "{}.{}".format(leaf['id'], lang_to_ext[language])
        code_path = os.path.join(code_folder, filename.replace("-", "_"))
    elif mode == 'exception':
        code_folder = os.path.join(dirs['exceptions'], language)
        filename = "{}.{}".format(leaf['id'], lang_to_ext[language])
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


def format_code(body_string, language, leaf, figure, mode='documentation'):
    file_import = imports[language]
    file_sign_in = sign_in[mode][language]
    plot_call = get_plot_call(language, figure, leaf, mode=mode)
    sections = [file_import, file_sign_in, body_string, plot_call]
    sections = [sec for sec in sections if sec]
    code_string = ("\n" * lines_between_sections).join(sections)
    if mode == 'documentation':
        code_string = cgi.escape(code_string)
    return code_string


def get_plot_call(language, figure, leaf, mode):
    """define strings for actual plot calls

    :rtype : str
    """
    tf_dict = {
        True: dict(
            python='True',
            matlab='true',
            julia='true',
            r='TRUE',
            nodejs='true'
        ),
        False: dict(
            python='False',
            matlab='false',
            julia='false',
            r='FALSE',
            nodejs='false'
        )
    }
    filename = leaf['path'].split(os.path.sep)[-1]
    try:
        plot_options = leaf['config']['plot-options']
    except KeyError:
        plot_options = {}
    else:
        if 'world_readable' in plot_options and not plot_options['world_readable']:
            leaf['private'] = True
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
    elif language == 'nodejs':
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


# def mark_completeness(leaf):
#     has_url = 'url' in leaf
#     has_all_languages = all([language in leaf
#                              for language in leaf['config']['languages']])
#     if has_url and has_all_languages:
#         leaf['complete'] = True
#     else:
#         leaf['complete'] = False


def trim_tree(section):
    if section:
        section_keys = section.keys()
        if section['is_leaf']:
            for key in section_keys:
                if key not in tree_keys['all'] and key not in tree_keys['leaf']:
                    if key not in languages:
                        del section[key]
        else:
            for key in section_keys:
                if key not in tree_keys['all'] and key not in tree_keys['branch']:
                    del section[key]
            for branch in section['branches'].values():
                trim_tree(branch)


def reset_reprocessed_leaves(section, processed_ids):
    if section:
        if section['is_leaf']:
            if section['id'] in processed_ids:
                keys = section.keys()
                for key in keys:
                    del section[key]
        else:
            for branch in section['branches'].values():
                reset_reprocessed_leaves(branch, processed_ids)


def save_tree(tree, previous_tree):
    try:
        os.makedirs(dirs['run'])
    except OSError:
        pass
    new_tree = nested_merge(previous_tree, tree)
    with open(files['tree'], 'w') as f:
        json.dump(new_tree, f, indent=4)


def save_processed_ids(processed_ids, previous_leaf_ids):
    ids = list(set.union(processed_ids, previous_leaf_ids))
    ids.sort()
    with open(files['ids'], 'w') as f:
        json.dump(ids, f, indent=4)


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
    command = get_command()
    options = get_options()
    leaf_ids = dict()
    print "\n\nrunning with command: {}\n\n".format(command)
    if command == 'obliterate':
        print "wholly obliterating the following: {}".format(options)
        for option in options:
            obliterate(option)
        sys.exit(0)
    previous_tree = load_previous_tree()
    previous_leaf_ids = load_previous_leaf_ids()
    print "compiling pre-book"
    tree = grow_tree(dirs['hard'], options, previous_leaf_ids, leaf_ids)
    print "validating file structure in examples"
    validate_leaf_structure(tree)
    if command == 'process':
        print "about to get it done."
        processed_ids = set()
        process_tree(tree, processed_ids)
        print "got it done, cleaning up!"
        trim_tree(tree)
        reset_reprocessed_leaves(previous_tree, processed_ids)
        save_tree(tree, previous_tree)
        save_processed_ids(processed_ids, previous_leaf_ids)
        sys.exit(0)
    if command == 'clear':
        remaining_ids = previous_leaf_ids - set(options)
        clear(previous_tree, options, previous_leaf_ids)
        save_tree({}, previous_tree)
        save_processed_ids(remaining_ids, set())
        sys.exit(0)
    if command == 'meta':
        crud = set(leaf_ids.keys()) - previous_leaf_ids
        clear(tree, crud, set())  # don't save things in unprocessed leaves!
        save_tree(tree, previous_tree)
        sys.exit(0)
    print "hmmm, something went wrong... this should never happen."

if __name__ == "__main__":
    main()
