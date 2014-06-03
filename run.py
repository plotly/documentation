import requests, json, os, sys, base64, time
from collections import OrderedDict
import plotly.plotly as py
import plotly.exceptions
from plotly.graph_objs import *  # for exec statement in 'save_code'
import plotly.utils as utils

### command line stuff ###
commands = ['all', 'clean', 'code', 'both', 'urls', 'reformat-json',
            'exceptions']

### auto-generated file stuff ###
doc_dir = 'docs'
exec_dir = 'executable'
examples_dir = os.path.join(doc_dir, 'examples')
examples_exceptions_dir = os.path.join(examples_dir, 'exceptions')
image_dir = os.path.join(examples_dir, 'images')

graph_url_file = os.path.join(examples_dir, 'graph_urls.json')

### hard-coded file stuff ###
# run.py EXPECTS THESE FOLDERS TO BE HERE!
hard_coded_dir = 'hard-coded'
json_dir = os.path.join(hard_coded_dir, 'json')
exceptions_dir = os.path.join(hard_coded_dir, 'exceptions')

### sign in stuff ###
users = dict(
    tester=dict(un="test-runner", ak="9h29fe3l0x"),
    julia=dict(un='JuliaAPI', ak='3bule2whyg'),
    matlab=dict(un='MATLABAPI', ak='jzt0hr6tzv'),
    python=dict(un="PythonAPI", ak="ubpiol2cve"),
    r=dict(un='rAPI', ak='yu680v5eii'),
    node=dict(un='nodeAPI', ak='1eobtyua4l')
)

py.sign_in(users['tester']['un'], users['tester']['ak'])

### server stuff ###
translator_server = "https://plot.ly/translate_figure/"
image_server = "https://plot.ly/apigenimage/"  # to be: "https://plot.ly/image/"

### style stuff ###
lines_between_sections = 2

### supported languages ###
languages = ['python', 'matlab', 'r', 'julia', 'node']

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', node='js')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='node')

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
    examples_dir: dict(
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
            "p &lt;- plotly(username={{% if username %}}\"{{{{username}}}}\""
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
            "{{% else %}}'{ak}'{{% endif %}});".format(**users['node'])
    ),
    exec_dir: dict(
        python="py.sign_in('{un}', '{ak}')".format(**users['tester']),
        matlab="signin('{un}', '{ak}')".format(**users['tester']),
        r="p <- plotly(username='{un}', key='{ak}')".format(**users['tester']),
        julia='using Plotly\nPlotly.signin("{un}", "{ak}")'
              ''.format(**users['tester']),
        node="var plotly = require('plotly')('{un}', '{ak}')"
             "".format(**users['tester'])
    )
}

### define headers for docs and tests (plotly docs and executables) ###
# header = {
#     examples_dir: dict(
#         python=(
#             "import plotly.plotly as py\nfrom plotly.graph_objs import *\n\n"
#             "py.sign_in({{% if username %}}\"{{{{username}}}}\""
#             "{{% else %}}'{un}'{{% endif %}}, "
#             "{{% if api_key %}}\"{{{{api_key}}}}\""
#             "{{% else %}}'{ak}'{{% endif %}})".format(**users['python'])
#         ),
#         matlab=(
#             "signin({{% if username %}}'{{{{username}}}}'"
#             "{{% else %}}'{un}'{{% endif %}}, "
#             "{{% if api_key %}}'{{{{api_key}}}}'"
#             "{{% else %}}'{ak}'{{% endif %}})".format(**users['matlab'])
#         ),
#         r=(
#             "library(plotly)\n"
#             "p &lt;- plotly(username={{% if username %}}\"{{{{username}}}}\""
#             "{{% else %}}'{un}'{{% endif %}}, "
#             "key={{% if api_key %}}\"{{{{api_key}}}}\""
#             "{{% else %}}'{ak}'{{% endif %}})".format(**users['r'])
#         ),
#         julia=(
#             "using Plotly\n"
#             "Plotly.signin({{% if username %}}\"{{{{username}}}}\""
#             "{{% else %}}\"{un}\"{{% endif %}}, "
#             "{{% if api_key %}}\"{{{{api_key}}}}\""
#             "{{% else %}}\"{ak}\"{{% endif %}})".format(**users['julia'])
#         ),
#         node=("var plotly = require('plotly')("
#               "{{% if username %}}'{{{{username}}}}'"
#               "{{% else %}}'{un}'{{% endif %}},"
#               "{{% if api_key %}}'{{{{api_key}}}}'"
#               "{{% else %}}'{ak}'{{% endif %}});".format(**users['node'])
#         )
#     ),
#     exec_dir: dict(
#         python=(
#             "import plotly.plotly as py\nfrom plotly.graph_objs import *\n\n"
#             "py.sign_in('{un}', '{ak}')".format(**users['tester'])
#         ),
#         matlab=(
#             "signin('{un}', '{ak}')".format(**users['tester'])
#         ),
#         r=(
#             "library(plotly)\n"
#             "p <- plotly(username='{un}', key='{ak}')".format(**users['tester'])
#         ),
#         julia=(
#             'using Plotly\nPlotly.signin("{un}", "{ak}")'
#             ''.format(**users['tester'])
#         ),
#         node=(
#             "var plotly = require('plotly')('{un}', '{ak}')"
#             "".format(**users['tester'])
#         )
#     )
# }


def setup():
    if not os.path.exists(doc_dir):
        os.mkdir(doc_dir)
    if not os.path.exists(examples_dir):
        os.mkdir(examples_dir)
    if not os.path.exists(examples_exceptions_dir):
        os.mkdir(examples_exceptions_dir)
    if not os.path.exists(exec_dir):
        os.mkdir(exec_dir)
    if not os.path.exists(image_dir):
        os.mkdir(image_dir)
    for directory in [examples_dir, exec_dir]:
        for language in languages:
            if not os.path.exists(os.path.join(directory, language)):
                os.mkdir(os.path.join(directory, language))


def get_command():
    try:
        command = sys.argv[1]
        if command not in commands:
            raise Exception()
    except:
        return None
    return command


def get_run_list():
    run_list = []
    while len(sys.argv) > 2:
        run_list += [sys.argv.pop()]
    return run_list


def clean():
    """removes ENTIRE examples_dir directory and exec_dir directory! careful!"""
    def clean_dir(directory):
        for name in os.listdir(directory):
            full_name = os.path.join(directory, name)
            if os.path.isdir(full_name):
                clean_dir(full_name)
                os.rmdir(full_name)
            else:
                os.remove(full_name)
    clean_dir(examples_dir)
    clean_dir(exec_dir)
    setup()


def get_filenames(directory, dot_extension):
    filenames = []
    for name in os.listdir(directory):
        full_name = os.path.join(directory, name)
        if os.path.isdir(full_name):
            filenames += get_filenames(full_name, dot_extension)
        elif dot_extension in full_name:
            filenames += [full_name]
        else:
            pass # forgettaboutit
    return filenames


def load_exceptional_examples(filenames):
    example_dict = {}
    for fn in filenames:
        with open(fn) as f:
            name = "-".join(fn.replace(exceptions_dir, "").split(os.path.sep))[1:]
            name, ext = name.split('.')
            example_dict[name] = {}
            example_dict[name]['code'] = f.read()
            example_dict[name]['ext'] = ext
    return example_dict


def get_json_filenames():
    filenames = []
    for dn in os.listdir(json_dir):
        try:
            dir_files = os.listdir(os.path.join(json_dir, dn))
            for filename in dir_files:
                file_path = os.path.join(json_dir, dn, filename)
                if '.json' in filename:
                    filenames.append(file_path)
        except OSError:
            pass
    return filenames


def load_json_examples(filenames):
    examples = []
    for fn in filenames:
        try:
            with open(fn) as f:
                examples += json.load(f, object_pairs_hook=OrderedDict)
        except:
            print 'error from this file:', fn
            raise
    return examples
    # example_dict = {}
    # for fn in filenames:
    #     try:
    #         with open(fn) as f:
    #             examples = json.load(f, object_pairs_hook=OrderedDict)
    #             for example in examples:
    #                 name = example['examplename'] + '.json'
    #                 example_dict[name] = example
    #     except:
    #         print 'error from this file:', fn
    #         raise
    # return example_dict


def filter_examples(ex_dict, run_list):
    if run_list:
        return {name: ex for name, ex in ex_dict.items()
                if name.split('.')[0] in run_list} # remove extension
    else:
        return ex_dict


def filter_json_examples(examples, run_list):
    if run_list:
        return [ex for ex in examples if ex['examplename'] in run_list]
    else:
        return examples


def reformat_json():
    filenames = get_filenames(json_dir, '.json')
    for filename in filenames:
        try:
            with open(filename) as fin:
                examples = json.load(fin, object_pairs_hook=OrderedDict)
            with open(filename, 'w') as fout:
                json.dump(examples, fout, indent=2)
        except:
            print 'error from this file:', filename
            raise


def get_plot_call(language, example):
    """define strings for actual plot calls"""
    if language == 'python':
        string = "plot_url = py.plot("
        if 'layout' in example['figure']:
            string += 'fig, '
        else:
            string += 'data, '
        string += "filename='{}'".format(example['examplename'])
        if 'plot_options' in example:
            for key, val in example['plot_options'].items():
                string += ", {}={}".format(key, val)
        return string + ")"
    elif language == 'matlab':
        string = "response = plotly(data, struct("
        if 'layout' in example['figure']:
            string += "'layout', layout, "
        string += "'filename', '{}'".format(example['examplename'])
        string += ", 'fileopt', 'overwrite'));"
        string += "\nplot_url = response.url"
        return string
    elif language == 'julia':
        string = "response = Plotly.plot([data], ["
        if 'layout' in example['figure']:
            string += '"layout" => layout, '
        string += '"filename" => "{fn}"'.format(fn=example['examplename'])
        string += ', "fileopt" => "overwrite"])'
        string += '\nplot_url = response["url"]'
        return string
    elif language == 'r':
        string = 'response <- p$plotly('
        string += ', '.join(map(lambda i: 'trace{i}'.format(i=i),
                                range(len(example['figure']['data']))))
        string += ', kwargs=list('
        if 'layout' in example['figure']:
            string += 'layout=layout, '
        string += 'filename="{}"'.format(example['examplename'])
        string += ', fileopt="overwrite"))'
        string += '\nurl <- response$url\n'
        string += 'filename <- response$filename'
        return string
    elif language == 'node':
        string = "plotly.plot("
        if 'data' in example['figure'] and example['figure']['data']:
            string += "data, "
        else:
            string += "[]"
        if 'layout' in example['figure'] and example['figure']['layout']:
            string += "layout, "
        string += "function (err, msg) {"
        string += "\n    console.log(msg);"
        string += "\n});"
        return string
    else:
        return ''


def save_code(directory, language, body_string, example_number, example):
    """saves code to directory, options for which are the the top of this file
    """
    filename = os.path.join(directory, language, example['examplename'])
    if directory == examples_dir:
        filename += '.txt'
    elif directory == exec_dir:
        filename += "." + lang_to_ext[language]
    file_import = imports[language]
    file_sign_in = sign_in[directory][language]
    plot_call = get_plot_call(language, example)
    sections = [file_import, file_sign_in, body_string, plot_call]
    sections = [sec for sec in sections if sec]
    code_string = ("\n" * lines_between_sections).join(sections)
    with open(filename, 'w') as f:
        f.write(code_string)


def save_image(exec_string, example_number, example):
    """save image to directory by executing python code-string and saving
    """
    fig, data = None, None
    try:
        exec exec_string
    except:
        print exec_string
        raise
    if not fig:
        if not data:
            print exec_string
            raise Exception("no data OR figure!!")
        fig = dict(data=data)  # assumes fig or data
    if 'layout' not in fig:
        fig['layout'] = dict()
    if 'margin' not in fig['layout']:
        fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
    fig['layout'].update(autosize=False, width=500, height=500)
    filename = os.path.join(image_dir, example["examplename"] + '.png')
    for attempt in range(2):
        try:
            headers = {'plotly-username': users['tester']['un'],
                       'plotly-apikey': users['tester']['ak'],
                       'plotly-version': '2.0',
                       'plotly-platform': 'python'}
            server = image_server
            res = requests.post(
                server,
                data=json.dumps(fig, cls=utils._plotlyJSONEncoder),
                headers=headers
            )
            if res.status_code != 200:
                raise plotly.exceptions.PlotlyError()
            image = base64.b64decode(json.loads(res.content)['payload'])
            with open(filename, 'w') as f:
                f.write(image)
            break
        except plotly.exceptions.PlotlyError:
            time.sleep(10)
            if attempt == 1:
                print ("\timage could not be saved, check json and the "
                       "following python executable:\n\n{}\n"
                       "".format(exec_string))


def save_url(exec_string, example_number, example):
    """save image to directory by executing python code-string and saving
    """
    # TODO, this can be put in with save_image for efficiency soon!
    fig, data = None, None
    try:
        exec exec_string
    except:
        print exec_string
        raise
    if not fig:
        if not data:
            print exec_string
            raise Exception("no data OR figure!!")
        fig = dict(data=data)  # assumes fig or data
    if 'layout' not in fig:
        fig['layout'] = dict()
    if 'margin' not in fig['layout']:
        fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
    fig['layout'].update(autosize=False, width=500, height=500)
    url = py.plot(fig, filename=example['examplename'], auto_open=False)
    try:
        with open(graph_url_file) as fin:
            urls = json.load(fin)
    except (IOError, ValueError):
        urls = {}
    urls[example['examplename']] = url
    with open(graph_url_file, 'w') as fout:
        json.dump(urls, fout, indent=4)


def main():
    """compile all examples, optionally save code and images 'code' or 'both'"""

### ensure all paths exist ###
    setup()

### grab command-line arguments ###
    command = get_command()
    if not command or command not in commands:
        print ("usage:\n"
               "python run.py command examplename\n"
               "python run.py command\n")
        print 'commands:', commands
        sys.exit(0)
    elif command == 'clean':
        clean()
        sys.exit(0)
    elif command == 'reformat-json':
        reformat_json()
        sys.exit(0)

### graph specific examples if they exist ###
    run_list = get_run_list()

### run exceptional examples if that's what you want ###
    if command == 'exceptions':
        exceptional_examples = {}
        for language in languages:
            filenames = get_filenames(exceptions_dir, "." + lang_to_ext[language])
            exceptional_examples.update(load_exceptional_examples(filenames))

    ### format exceptional examples ###
        formatted_examples = {}
        image_examples = {}
        for name, example in exceptional_examples.items():
            formatted_examples[name] = {}
            image_examples[name] = {}
            language = ext_to_lang[example['ext']]  # throws KeyError if bad
            formatted_code = ""
            image_code = ""
            for line in example['code'].splitlines():
                if users['tester']['ak'] in line:
                    formatted_code += sign_in[examples_dir][language] + "\n"
                    image_code += line + "\n"
                elif '$$$' in line:
                    formatted_code += line.replace("$$$", name) + "\n"
                    image_code += line + "\n"
                else:
                    formatted_code += line + "\n"
                    image_code += line + "\n"
            formatted_examples[name]['code'] = formatted_code
            formatted_examples[name]['ext'] = example['ext']
            image_examples[name]['code'] = image_code
            image_examples[name]['ext'] = example['ext']
        for name, example in formatted_examples.items():
            output_name = os.path.join(examples_exceptions_dir, name + '.txt')
            with open(output_name, 'w') as f:
                f.write(example['code'])

        for name, example in image_examples.items():
            if example['ext'] != 'py':
                print example['ext']
                continue
            fig, data = None, None
            try:
                exec example['code']
            except:
                print example['code']
                raise
            time.sleep(3)
            fig = py.get_figure('test-runner', 153)
            if 'layout' not in fig:
                fig['layout'] = dict()
            if 'margin' not in fig['layout']:
                fig['layout']['margin'] = dict()
            fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
            fig['layout'].update(autosize=False, width=500, height=500)
            filename = os.path.join(image_dir, name + '.png')
            for attempt in range(2):
                try:
                    headers = {'plotly-username': users['tester']['un'],
                               'plotly-apikey': users['tester']['ak'],
                               'plotly-version': '2.0',
                               'plotly-platform': 'python'}
                    server = image_server
                    res = requests.post(
                        server,
                        data=json.dumps(fig, cls=utils._plotlyJSONEncoder),
                        headers=headers
                    )
                    if res.status_code != 200:
                        raise plotly.exceptions.PlotlyError()
                    image = base64.b64decode(json.loads(res.content)['payload'])
                    with open(filename, 'w') as f:
                        f.write(image)
                    break
                except plotly.exceptions.PlotlyError:
                    time.sleep(10)
                    if attempt == 1:
                        print ("\timage could not be saved, check json and the "
                               "following python executable:\n\n{}\n"
                               "".format(example['code']))
        sys.exit(0)

### compile all examples (name, prepend, append, figure) ###
    filenames = get_filenames(json_dir, ".json")
    json_examples = load_json_examples(filenames)
    examples = filter_json_examples(json_examples, run_list)


### run them examples! ###
    for iii, example in enumerate(examples):
        print "{} '{}' with command '{}'".format(iii,
                                                 example['examplename'],
                                                 command)
        for language in languages:
            data, fig = None, None
            string = ""
            if 'prepend' in example:
                try:
                    string += "\n".join(example['prepend'][language])
                    string += "\n\n"
                except KeyError:
                    print "\tno prepend, skipping '{}'".format(
                        language)
                    continue
            data = {'json_figure': example['figure'],
                    'language': language,
                    'pretty': True}
            res = requests.get(translator_server, data=json.dumps(data))
            if res.status_code == 200:
                string += res.content  # todo, text?
                string = string.replace("<pre>", "").replace("</pre>", "")
                string = string.replace("<br />", "\n")
            else:
                print "\tskipping '{}', bad response from plotly translator!" \
                      "".format(language)
                continue
            if 'append' in example:
                try:
                    string += "\n"
                    string += "\n".join(example['append'][language])
                except KeyError:
                    print "\tno append, skipping '{}'".format(language)
                    continue
            string = string.replace('">>>', "").replace('<<<"', "")
            string = string.replace("'>>>", "").replace("<<<'", "")
            if command == 'code':
                save_code(examples_dir, language, string, iii, example)
                save_code(exec_dir, language, string, iii, example)
            elif command == 'both':
                save_code(examples_dir, language, string, iii, example)
                if language == 'python':
                    save_image(string, iii, example)
            elif command == 'urls':
                if language == 'python':
                    save_url(string, iii, example)
            elif command == 'all':
                save_code(examples_dir, language, string, iii, example)
                save_code(exec_dir, language, string, iii, example)
                if language == 'python':
                    save_image(string, iii, example)
                    save_url(string, iii, example)

if __name__ == "__main__":
    main()