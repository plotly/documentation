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
image_dir = os.path.join(auto_dir, 'images')
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

### meta-config information ###
meta_config_info = ['languages', 'name', 'description', 'tags', 'relative_url']

### define recognized languages ###
languages = ['python', 'matlab', 'r', 'julia', 'node', 'json']

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', node='js')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='node')


def fix_book(section):
    if section['is_leaf']:
        if not section['complete']:
            language = section['config']['languages'][0]
            if 'image' not in section:
                filename = "{}.png".format(section['id'])
                path = os.path.join(exceptions_dir, language, filename)
                if os.path.exists(path):
                    new_path = os.path.join(image_dir, filename)
                    os.rename(path, new_path)
                    section['image'] = new_path
            if 'url' not in section:
                filename = "{}.json".format(section['id'])
                path = os.path.join(exceptions_dir, language, filename)
                if os.path.exists(path):
                    try:
                        with open(path) as f:
                            content = json.load(f)
                            section['url'] = content['url']
                    except ValueError:
                        print ("\tcouldn't open '{}' for exception handled by "
                               "language, '{}'".format(filename, language))
                    except KeyError:
                        print ("\t'url' key not in '{}' for exception handled "
                               "by language, '{}'".format(filename, language))
            mark_completeness(section)  # hopefully, False -> True!
    else:
        for subsection in section['subsections'].values():
            fix_book(subsection)


def mark_completeness(example):
    has_image = 'image' in example
    has_url = 'url' in example
    has_all_languages = all([language in example
                             for language in example['config']['languages']])
    if all((has_image, has_url, has_all_languages)):
        example['complete'] = True
    else:
        example['complete'] = False


# def make_paths(section):
#     if section['is_leaf'] and section['complete']:
#         print 'complete: {}'.format(section['name'])
#         path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
#         try:
#             os.makedirs(path)
#         except OSError:
#             pass
#         for language in section[config_file]['languages']:
#             language_path = os.path.join(path, language)
#             try:
#                 os.makedirs(language_path)
#             except OSError:
#                 pass
#     if 'subsections' in section:
#         for subsection_name, subsection in section['subsections'].items():
#             make_paths(subsection)
#     elif section['complete']:
#         print 'complete: {}'.format(section['name'])
#         path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
#         try:
#             os.makedirs(path)
#         except OSError:
#             pass
#         for language in section[config_file]['languages']:
#             language_path = os.path.join(path, language)
#             try:
#                 os.makedirs(language_path)
#             except OSError:
#                 pass
#     else:
#         print 'incomplete: {}'.format(section['name'])


# def write_code(section):
#     if 'subsections' in section:
#         for subsection_name, subsection in section['subsections'].items():
#             write_code(subsection)
#     elif section['complete']:
#         path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
#         for language in section[config_file]['languages']:
#             language_path = os.path.join(path, language)
#             file_path = os.path.join(language_path, code_file)
#             with open(file_path, 'w') as f:
#                 f.write(section[language])


# def write_images(section):
#     if 'subsections' in section:
#         for subsection_name, subsection in section['subsections'].items():
#             write_images(subsection)
#     elif section['complete']:
#         image_name = section['path'].split(os.path.sep)[-1]
#         file_path = os.path.join(image_dir, "{}.png".format(image_name))
#         with open(file_path, 'w') as f:
#             f.write(base64.b64decode(section[image_file]))  # TODO: image_file?


# def write_urls(section):
#     if 'subsections' in section:
#         for subsection_name, subsection in section['subsections'].items():
#             write_urls(subsection)
#     elif section['complete']:
#         path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
#         file_path = os.path.join(path, url_file)
#         with open(file_path, 'w') as f:
#             json.dump({'url': section[url_file]}, f)


def get_language_reference(section, language):
    reference_dict = dict()
    if section['is_leaf'] and language in section and section['complete']:
        path = os.path.join(doc_dir, *section['path'].split(os.path.sep)[1:])
        reference_dict['code'] = os.path.join(path, language, code_file)
        reference_dict['url'] = section['url']
        reference_dict['id'] = section['path'].split(os.path.sep)[-1]
        reference_dict['parent'] = section['path'].split(os.path.sep)[-2]
        for entry in meta_config_info:
            if entry in section['config']:
                reference_dict[entry] = section['config'][entry]
        return reference_dict
    elif not section['is_leaf']:
        subsections_list = list()
        for subsection in section['subsections'].values():
            subsection_entry = get_language_reference(subsection, language)
            if subsection_entry:
                subsections_list += [subsection_entry]
        if subsections_list:
            reference_dict['subsections'] = subsections_list
            reference_dict['id'] = section['path'].split(os.path.sep)[-1]
            if len(section['path'].split(os.path.sep)) > 1:
                reference_dict['parent'] = section['path'].split(os.path.sep)[-2]
            for entry in meta_config_info:
                if entry in section['config']:
                    reference_dict[entry] = section['config'][entry]
            return reference_dict
    else:
        return None  # nothing to be added!


def write_language_reference(reference, language):
    print "writing language reference for '{}'".format(language)
    if not os.path.exists(ref_dir):
        os.makedirs(ref_dir)
    ref_file = os.path.join(ref_dir, ".".join([language, 'json']))
    with open(ref_file, 'w') as f:
        json.dump(reference, f, indent=2)


def main():
    with open(pre_book_file) as f:
        pre_book = json.load(f)
    print "setting up auto-generated structure"
    fix_book(pre_book)
    # make_paths(pre_book)
    # write_code(pre_book)
    # try:
    #     os.makedirs(image_dir)
    # except OSError:
    #     pass
    # write_images(pre_book)
    for language in languages:
        language_reference = get_language_reference(pre_book,
                                                    language)
        if language_reference:
            write_language_reference(language_reference, language)
        else:
            print "language reference for '{}' NOT created".format(language)


if __name__ == "__main__":
    main()