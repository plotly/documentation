"""
Takes the input from pre_book and outputs the final 'book-of-things'
The reason for the logical split is to allow language-specific examples to
generate their images in between running 'run.py' and 'finalize.py'
"""

import requests, json, os, sys, base64, time, cgi
from collections import OrderedDict
import plotly.plotly as py
import plotly.exceptions
from plotly.graph_objs import *  # for exec statements
import plotly.utils as utils
from exceptions import OSError

## load up the pre_book

## setup output file structure

## write book-of-things

### auto-generated file stuff ###
auto_dir = 'auto-docs'  # where we keep any auto-generated content
doc_dir = os.path.join(auto_dir, 'api')  # the main page for all documentation
exceptions_dir = 'exceptions'
pre_book_file = 'pre-book.json'
ref_dir = os.path.join(doc_dir, 'references')
book_of_things_file = os.path.join(doc_dir, 'book_of_things.json')

### hard-coded file stuff ###
hard_coded_dir = 'hard-coded'
config_file = 'config.json'
model_file = 'model.json'
url_file = 'url.json'
image_file = 'image.png'
code_file = 'code.txt'

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', node='js')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='node')


def fix_and_tag_book(section):
    if 'subsections' in section:
        for subsection_name, subsection in section['subsections'].items():
            fix_and_tag_book(subsection)
    elif image_file not in section or url_file not in section:
        if len(section[config_file]['languages']) == 1:
            language = section[config_file]['languages'].keys()[0]
            folder = "-".join(section['path'].split(os.path.sep)[-2:])
            image_path = os.path.join(exceptions_dir,
                                      language,
                                      folder,
                                      image_file)
            url_path = os.path.join(exceptions_dir,
                                    language,
                                    folder,
                                    url_file)
            try:
                with open(image_path) as f_image:
                    section[image_file] = f_image.read()
                with open(url_path) as f_url:
                    section['url'] = json.load(f_url)['url']
                section['complete'] = True
            except OSError:
                section['complete'] = False
        else:
            section['complete'] = False
    else:
        section['complete'] = True


def make_paths(section):
    if 'subsections' in section:
        for subsection_name, subsection in section['subsections'].items():
            make_paths(subsection)
    elif section['complete']:
        print 'complete: {}'.format(section['name'])
        path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
        try:
            os.makedirs(path)
        except OSError:
            pass
        for language in section[config_file]['languages']:
            language_path = os.path.join(path, language)
            try:
                os.makedirs(language_path)
            except OSError:
                pass
    else:
        print 'incomplete: {}'.format(section['name'])


def write_code(section):
    if 'subsections' in section:
        for subsection_name, subsection in section['subsections'].items():
            write_code(subsection)
    elif section['complete']:
        path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
        for language in section[config_file]['languages']:
            language_path = os.path.join(path, language)
            file_path = os.path.join(language_path, code_file)
            with open(file_path, 'w') as f:
                f.write(section[language])


def write_images(section):
    if 'subsections' in section:
        for subsection_name, subsection in section['subsections'].items():
            write_images(subsection)
    elif section['complete']:
        path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
        file_path = os.path.join(path, image_file)
        with open(file_path, 'w') as f:
            f.write(base64.b64decode(section[image_file]))  # TODO: image_file?


def write_urls(section):
    if 'subsections' in section:
        for subsection_name, subsection in section['subsections'].items():
            write_urls(subsection)
    elif section['complete']:
        path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
        file_path = os.path.join(path, url_file)
        with open(file_path, 'w') as f:
            json.dump({'url': section[url_file]}, f)



def main():
    with open(pre_book_file) as f:
        pre_book = json.load(f)
    print "setting up auto-generated structure"
    fix_and_tag_book(pre_book)
    make_paths(pre_book)
    write_code(pre_book)
    write_images(pre_book)
    write_urls(pre_book)

if __name__ == "__main__":
    main()