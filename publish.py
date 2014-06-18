"""
Takes the input from pre_book and outputs the final 'book-of-things'
The reason for the logical split is to allow language-specific examples to
generate their images in between running 'run.py' and 'finalize.py'
"""

import requests, json, os, sys
import plotly.plotly as py
import plotly.exceptions

### sign in stuff: each user has a 'un' and 'ak' ###
## users ##
# tester, julia, matlab, python, r, node, publisher
with open('users.json') as user_file:
    users = json.load(user_file)

### directory information ###
with open('dirs.json') as dirs_file:
    dirs = json.load(dirs_file)

### server stuff ###
image_server = "https://plot.ly/apigenimage/"  # to be: "https://plot.ly/image/"

### globals ###
root = ''
doc_user = ''
total_examples = 0
example_count = 0

### file names ###
pre_book_file = 'pre-book.json'

### meta-config information ###
meta_config_info = ['languages', 'name', 'description', 'tags',
                    'relative_url', 'prepend', 'append', 'has_thumbnail']

### define recognized languages ###
languages = ['python', 'matlab', 'r', 'julia', 'node', 'json', 'ggplot',
             'matplotlib']

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', node='js')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='node')

### define commands ###
commands = ['test', 'publish']


def get_command():
    try:
        command = sys.argv[1]
        if command not in commands:
            raise Exception()
    except:
        command = None
    if not command:
        print "usage:\n"\
              "python run.py command\n"
        print 'command options:', commands
        sys.exit(0)
    else:
        return command


def set_total_examples(section):
    if section['is_leaf']:
        global total_examples
        total_examples += 1
    else:
        for subsection in section['subsections'].values():
            set_total_examples(subsection)


def fix_book(section):
    if section['is_leaf']:
        if not section['complete']:
            language = section['config']['languages'][0]
            if 'url' not in section:
                filename = "{}.json".format(section['id']).replace("-", "_")
                path = os.path.join(dirs['exceptions'], language, filename)
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


def port_urls(section):
    if section['is_leaf'] and section['complete']:
        global example_count
        example_count += 1
        print("\t{} of {}: example '{}' with url '{}'".format(
            example_count, total_examples, section['id'], section['url']
        )),
        username = section['url'].replace("https://plot.ly/~", "").split('/')[0]
        fid = section['url'].replace("https://plot.ly/~", "").split('/')[1]
        if username.lower() != users[doc_user]['un'].lower():
            if 'private' in section and section['private']:
                user = [usr for usr in users.values()
                        if usr['un'].lower() == username.lower()][0]
                py.sign_in(user['un'], user['ak'])
            try:
                fig = py.get_figure(username, fid)
            except plotly.exceptions.PlotlyError:
                print ("\tcouldn't port url over for example, '{}'."
                       "\n\tis the plot private?\n\t'{}'"
                       "".format(section['id'], section['url']))
                fig = None
            finally:
                py.sign_in(users[doc_user]['un'], users[doc_user]['ak'])
            if fig:
                if 'layout' not in fig:
                    fig['layout'] = dict()
                if 'margin' not in fig['layout']:
                    fig['layout']['margin'] = dict(t=90, b=65, r=50, l=65)
                fig['layout'].update(autosize=False, width=500, height=500)
                if 'private' in section and section['private']:
                    new_url = py.plot(
                        fig, filename=section['id'], auto_open=False,
                        world_readable=False)
                else:
                    new_url = py.plot(fig, filename=section['id'], auto_open=False)
                section['url'] = new_url
                print ", new url: '{}'".format(section['url'])
        else:
            print ", already owned by '{}'".format(users[doc_user]['un'])
    elif not section['is_leaf']:
        for subsection in section['subsections'].values():
            port_urls(subsection)


def save_images(section):  # todo, appropriateley make incomplete if this fails
    if section['is_leaf'] and section['complete']:
        global example_count
        example_count += 1
        folder_path = os.path.join(root, dirs['images'])
        file_path = os.path.join(folder_path, "{}.png".format(section['id']))
        if not os.path.exists(file_path):
            print "\t{} of {}: saving image for '{}'".format(
                example_count, total_examples, section['id']
            )
            username = section['url'].replace("https://plot.ly/~", "").split('/')[0]
            fid = section['url'].replace("https://plot.ly/~", "").split('/')[1]
            try:
                fig = py.get_figure(username, fid)
            except plotly.exceptions.PlotlyError:
                print ("\tcouldn't get figure to save image for example, '{}'."
                       "\n\tis the plot private?\n\t'{}'"
                       "".format(section['id'], section['url']))
            else:
                if not os.path.exists(folder_path):
                    os.makedirs(folder_path)
                try:
                    py.image.save_as(fig, file_path)
                except plotly.exceptions.PlotlyError:
                    pass
                else:
                    section['image'] = True
        else:
            print "\t{} of {}: image already exists for '{}'".format(
                example_count, total_examples, section['id']
            )
            section['image'] = True
    elif not section['is_leaf']:
        for subsection in section['subsections'].values():
            save_images(subsection)


def port_code(section):
    if section['is_leaf'] and section['complete']:
        # todo add nice std output note?
        for language in section['config']['languages']:
            rel_paths = section[language].split(os.path.sep)[1:]
            old_path = os.path.join(dirs['run'], *rel_paths)
            new_path = os.path.join(root, dirs['api'], *rel_paths)
            new_folder = os.path.join(*new_path.split(os.path.sep)[:-1])
            if not os.path.exists(new_folder):
                os.makedirs(new_folder)
            with open(old_path) as fin:
                code = fin.read()
                with open(new_path, 'w') as fout:
                    fout.write(code)
                    section[language] = new_path
    elif not section['is_leaf']:
        for subsection in section['subsections'].values():
            port_code(subsection)


def mark_completeness(example):
    has_url = 'url' in example
    has_all_languages = all([language in example
                             for language in example['config']['languages']])
    if has_url and has_all_languages:
        example['complete'] = True
    else:
        example['complete'] = False


def get_language_reference(section, language):
    reference_dict = dict()
    if (section['is_leaf'] and language in section and section['complete'] and
            'image' in section and section['image']):
        rel_path = os.path.join(*section['path'].split(os.path.sep)[1:])
        reference_dict['code'] = os.path.join(rel_path, language, 'code.txt')
        reference_dict['url'] = section['url']
        reference_dict['id'] = section['id']
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
            indices = list()
            if 'order' in section['config']:
                for sub_id in section['config']['order']:
                    index = [iii for iii, entry in enumerate(subsections_list)
                             if entry['id'] == sub_id]  # list with one entry
                    if index:
                        indices += index
                for iii in range(len(subsections_list)):  # add whatever isn't there
                    if iii not in indices:
                        indices += [iii]
                reference_dict['subsections'] = []
                for index in indices:
                    reference_dict['subsections'] += [subsections_list[index]]
            else:
                reference_dict['subsections'] = subsections_list
            reference_dict['id'] = section['path'].split(os.path.sep)[-1]
            if len(section['path'].split(os.path.sep)) > 1:
                reference_dict['parent'] = section['path'].split(os.path.sep)[-2]
            for entry in meta_config_info:
                if entry in section['config']:
                    reference_dict[entry] = section['config'][entry]
            return reference_dict
    else:
        return None  # not stable! don't add!


def write_language_reference(reference, language):
    print "\twriting language reference for '{}'".format(language)
    ref_folder = os.path.join(root, dirs['api'], dirs['ref'])
    if not os.path.exists(ref_folder):
        os.makedirs(ref_folder)
    ref_file = os.path.join(ref_folder, "{}.json".format(language))
    with open(ref_file, 'w') as f:
        json.dump(reference, f, indent=2)


def get_report(section):
    report = dict()
    if section['is_leaf']:
        if section['complete']:
            return {section['id']: 'complete'}
        else:
            return {section['id']: 'INCOMPLETE'}
    else:
        for subsection in section['subsections'].values():
            report.update(get_report(subsection))
    return report


def save_report(report, command):
    complete_keys = [key for key in report if report[key] == 'complete']
    incomplete_keys = [key for key in report if report[key] == 'INCOMPLETE']
    complete_keys.sort()
    incomplete_keys.sort()
    string = ""
    if complete_keys:
        string += "Complete examples:"
    for key in complete_keys:
        string += "\n\t{}".format(key)
    if incomplete_keys:
        string += "\n\nIncomplete examples:"
        print "\tthere are incomplete examples! check the report."
    else:
        print "\tyou're a super example-maker! you deserve a bagel!"
    for key in incomplete_keys:
        string += "\n\t{}".format(key)
    if command == 'test':
        with open('test-publish-report.txt', 'w') as f:
            f.write(string)
    elif command == 'publish':
        with open('publish.txt', 'w') as f:
            f.write(string)


def main():
    command = get_command()
    global root, doc_user, example_count, total_examples
    if command == 'test':
        doc_user = 'tester'
        root = 'test-published'
    elif command == 'publish':
        doc_user = 'publisher'
        root = 'published'
    else:
        raise Exception("command didn't match up with a username assignment")
    py.sign_in(users[doc_user]['un'], users[doc_user]['ak'])
    with open(pre_book_file) as f:
        pre_book = json.load(f)
    set_total_examples(pre_book)
    print "setting up auto-generated structure"
    fix_book(pre_book)
    print "porting urls"
    port_urls(pre_book)
    example_count = 0
    print "saving images"
    save_images(pre_book)
    print "porting code"
    port_code(pre_book)
    print "writing language references"
    for language in languages:
        language_reference = get_language_reference(pre_book, language)
        if language_reference:
            write_language_reference(language_reference, language)
        else:
            print "\tNOT writing language reference for '{}'".format(language)
    print "making the report file"
    report = get_report(pre_book)
    save_report(report, command)


if __name__ == "__main__":
    main()