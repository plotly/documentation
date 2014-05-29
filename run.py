import requests, json, os, sys, base64, time
from collections import OrderedDict
import plotly.plotly as py
import plotly.exceptions
from plotly.graph_objs import *  # for exec statement in 'save_code'
import plotly.utils as utils

### command line stuff ###
commands = ['all', 'clean', 'code', 'both', 'urls', 'reformat-json']

### file stuff ###
json_dir = os.path.join('hard-coded', 'json')
doc_dir = 'docs'
examples_dir = os.path.join(doc_dir, 'examples')
image_dir = os.path.join(examples_dir, 'images')
graph_url_file = os.path.join(examples_dir, 'graph_urls.json')
exec_dir = 'executable'

### sign in stuff ###
users = dict(
    tester=dict(un="test-runner", ak="9h29fe3l0x"),
    julia=dict(un='JuliaAPI', ak='3bule2whyg'),
    matlab=dict(un='MATLABAPI', ak='jzt0hr6tzv'),
    python=dict(un="PythonAPI", ak="ubpiol2cve"),
    r=dict(un='rAPI', ak='yu680v5eii')
)

py.sign_in(users['tester']['un'], users['tester']['ak'])

### server stuff ###
translator_server = "https://plot.ly/translate_figure/"  # not functional yet
image_server = "https://plot.ly/apigenimage/"  # to be: "https://plot.ly/image/"

### style stuff ###
lines_between_sections = 2

### supported languages ###
languages = ['python', 'matlab', 'r', 'julia']

### define headers for docs and tests (plotly docs and executables) ###
header = {
    examples_dir: dict(
        python=(
            "import plotly.plotly as py\nfrom plotly.graph_objs import *\n\n"
            "py.sign_in({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['python'])
        ),
        matlab=(
            "signin({{% if username %}}'{{{{username}}}}'"
            "{{% else %}}'{un}'{{% endif %}}, "
            "{{% if api_key %}}'{{{{api_key}}}}'"
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['matlab'])
        ),
        r=(
            "library(plotly)\n"
            "p &lt;- plotly(username={{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}'{un}'{{% endif %}}, "
            "key={{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}'{ak}'{{% endif %}})".format(**users['r'])
        ),
        julia=(
            "using Plotly\n"
            "Plotly.signin({{% if username %}}\"{{{{username}}}}\""
            "{{% else %}}\"{un}\"{{% endif %}}, "
            "{{% if api_key %}}\"{{{{api_key}}}}\""
            "{{% else %}}\"{ak}\"{{% endif %}})".format(**users['julia'])
        )
    ),
    exec_dir: dict(
        python=(
            "import plotly.plotly as py\nfrom plotly.graph_objs import *\n\n"
            "py.sign_in('{un}', '{ak}')".format(**users['tester'])
        ),
        matlab=(
            "signin('{un}', '{ak}')".format(**users['tester'])
        ),
        r=(
            "library(plotly)\n"
            "p <- plotly(username='{un}', key='{ak}')".format(**users['tester'])
        ),
        julia=(
            'using Plotly\nPlotly.signin("{un}", "{ak}")'
            ''.format(**users['tester'])
        )
    )
}

### define extensions for executable code ###
extensions = dict(python='.py', julia='.jl', matlab='.m', r='.r')


def setup():
    if not os.path.exists(doc_dir):
        os.mkdir(doc_dir)
    if not os.path.exists(examples_dir):
        os.mkdir(examples_dir)
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


def get_example_filenames():
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


def filter_examples(examples, run_list):
    if run_list:
        return [example for example in examples
                if example['examplename'] in run_list]
    else:
        return examples


def reformat_json():
    filenames = get_example_filenames()
    for filename in filenames:
        file_examples = load_json_examples([filename])
        with open(filename, 'w') as f:
            json.dump(file_examples, f, indent=2)


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
    else:
        return ''


def save_code(directory, language, body_string, example_number, example):
    """saves code to directory, options for which are the the top of this file
    """
    filename = os.path.join(directory, language, example['examplename'])
    if directory == examples_dir:
        filename += '.txt'
    elif directory == exec_dir:
        filename += extensions[language]
    file_head = header[directory][language]
    plot_call = get_plot_call(language, example)
    sections = [file_head, body_string, plot_call]
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

### compile all examples (name, prepend, append, figure) ###
    filenames = get_example_filenames()
    examples = filter_examples(load_json_examples(filenames), run_list)

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