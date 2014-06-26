"""
Takes the input from tree and outputs the final 'references'
The reason for the logical split is to allow language-specific examples to
generate their urls between running 'run.py' and 'publish.py'
"""

import json
import os
import sys
import plotly.plotly as py
import plotly.exceptions

# holds special references to 'files' like 'tree' shared with publish.py
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

### server stuff ###
image_server = "https://plot.ly/apigenimage/"  # to be: "https://plot.ly/image/"

### globals ###
root = ''
doc_user = ''
total_examples = 0
example_count = 0

### meta-config information ###
meta_config_info = ['languages',
                    'name',
                    'description',
                    'tags',
                    'relative_url',
                    'prepend',
                    'append',
                    'has_thumbnail',
                    'links']

### define recognized languages ###
languages = ['python', 'matlab', 'r', 'julia', 'nodejs', 'json', 'ggplot2',
             'matplotlib']

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', nodejs='js')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='nodejs')

### define commands ###
commands = ['test', 'publish']


def get_command():
    try:
        command = sys.argv[1]
        if command not in commands:
            raise ValueError()
    except (IndexError, ValueError):
        command = None
    if not command:
        print "usage:\n"\
              "python run.py command\n"
        print 'command options:', commands
        sys.exit(0)
    else:
        return command


def make_tree_valid(section):
    if 'branches' in section:
        keys = section['branches'].keys()
        for key in keys:
            if section['branches'][key] == {}:
                del section['branches'][key]
                print ("\tdeleted empty branch with key '{}', "
                       "from '{}'['branches']".format(key, section['id']))
        for branch in section['branches'].values():
            make_tree_valid(branch)


def set_total_examples(section):
    if section['is_leaf']:
        global total_examples
        total_examples += 1
    else:
        for branch in section['branches'].values():
            set_total_examples(branch)


def fix_tree(section):  # todo rename? has to do with exceptions...
    if section['is_leaf'] and section['type'] == 'script':
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
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            fix_tree(branch)


def port_urls(section, command):
    if section['is_leaf'] and 'url' in section:
        global example_count
        example_count += 1
        print("\t{} of {} ({}): ".format(example_count,
                                         total_examples,
                                         section['id'])),
        username = section['url'].replace("https://plot.ly/~", "").split('/')[0]
        fid = section['url'].replace("https://plot.ly/~", "").split('/')[1]
        if (command == 'test' and 'test-url' not in section) or \
           (command == 'publish' and 'publish-url' not in section):
            if 'private' in section and section['private']:
                match = [usr for usr in users.values()
                         if usr['un'].lower() == username.lower()]
                if match:
                    user = match[0]
                    py.sign_in(user['un'], user['ak'])
            try:
                fig = py.get_figure(username, fid)
            except:  # todo, too broad exception clause
                print ("couldn't port url over for '{}'."
                       "".format(section['id']))
                fig = None
            finally:
                py.sign_in(users[doc_user]['un'], users[doc_user]['ak'])
            if fig:
                if 'layout' not in fig:
                    fig['layout'] = dict()
                if 'margin' not in fig['layout']:
                    fig['layout']['margin'] = dict(t=90, b=65, r=50, l=65)
                if 'title' not in fig['layout']:
                    fig['layout']['margin']['t'] = 65
                fig['layout'].update(autosize=False, width=500, height=500)
                if 'private' in section and section['private']:
                    try:  # todo clean up exception handling
                        new_url = py.plot(
                            fig, filename=section['id'], auto_open=False,
                            world_readable=False)
                    except:
                        new_url = None
                        print "\t\tcall to py.plot() failed"
                else:
                    try:  # todo clean up exception handling
                        new_url = py.plot(fig,
                                          filename=section['id'],
                                          auto_open=False)
                    except:
                        new_url = None
                        print "\t\tcall to py.plot() failed"
                if command == 'test' and new_url:
                    section['test-url'] = new_url
                    print "new url: '{}'".format(new_url)
                elif command == 'publish' and new_url:
                    section['publish-url'] = new_url
                    print "new url: ({})".format(new_url)
        else:
            print ("already ported to '{}' ({})"
                   "".format(users[doc_user]['un'],
                             section["{}-url".format(command)]))
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            port_urls(branch, command)


def save_images(section, command):
    if command == 'test':
        has_url = 'test-url' in section
    else:
        has_url = 'publish-url' in section
    if section['is_leaf'] and has_url:
        global example_count
        example_count += 1
        folder_path = os.path.join(root, dirs['images'])
        file_path = os.path.join(folder_path, "{}.png".format(section['id']))
        if not os.path.exists(file_path):
            print "\t{} of {}: saving image for '{}'".format(
                example_count, total_examples, section['id']
            )
            url = section["{}-url".format(command)]
            username = url.replace("https://plot.ly/~", "").split('/')[0]
            fid = url.replace("https://plot.ly/~", "").split('/')[1]
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
                    print "\t\timage save failed..."
                    section['image'] = False
                else:
                    section['image'] = True
        else:
            print "\t{} of {}: image already exists for '{}'".format(
                example_count, total_examples, section['id']
            )
            section['image'] = True
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            save_images(branch, command)


def check_languages(leaf):
    for language in leaf['config']['languages']:
        if language not in leaf:
            return False
    return True


def port_code(section, command):
    if section['is_leaf'] and check_languages(section):
        global example_count
        example_count += 1
        print("\t{} of {} ({}): ".format(example_count,
                                         total_examples,
                                         section['id']))
        for language in section['config']['languages']:
            if (command == 'test' and 'test-' + language not in section) or \
               (command == 'publish' and 'publish-' + language not in section):
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
                        if command == 'test':
                            section['test-' + language] = new_path
                        else:
                            section['publish-' + language] = new_path
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            port_code(branch, command)


def check_if_complete(leaf, command):
    try:
        if leaf['type'] in ['model', 'url', 'script']:
            if not leaf['image']:
                raise ValueError()
            if not leaf['{}-url'.format(command)]:
                raise ValueError()
            for language in leaf['config']['languages']:
                if not leaf['{}-{}'.format(command, language)]:
                    raise ValueError()
        elif leaf['type'] == 'exempt':
            pass
    except (ValueError, KeyError):
        return False
    else:
        return True


def get_language_reference(section, language, command):
# here, write a SOLID check to pass leaves into references.
    reference_dict = dict()
    if section['is_leaf'] and check_if_complete(section, command)\
            and language in section['config']['languages']:
        if section['type'] == 'exempt':
            pass  # todo exempt stuff here...
        else:
            rel_path = os.path.join(*section['path'].split(os.path.sep)[1:])
            reference_dict['code'] = os.path.join(rel_path,
                                                  language,
                                                  'code.txt')
            if command == 'test':
                reference_dict['url'] = section['test-url']
            elif command == 'publish':
                reference_dict['url'] = section['publish-url']
            reference_dict['id'] = section['id']
            reference_dict['parent'] = section['path'].split(os.path.sep)[-2]
            reference_dict['type'] = section['type']
            for entry in meta_config_info:
                if entry in section['config']:
                    reference_dict[entry] = section['config'][entry]
            return reference_dict
    elif not section['is_leaf']:
        branches_list = list()
        for branch in section['branches'].values():
            branch_entry = get_language_reference(
                branch, language, command
            )
            if branch_entry:
                branches_list += [branch_entry]
        if branches_list:
            indices = list()
            if 'order' in section['config']:
                for sub_id in section['config']['order']:
                    index = [iii for iii, entry in enumerate(branches_list)
                             if entry['id'] == sub_id]  # list with one entry
                    if index:
                        indices += index
                for iii in range(len(branches_list)):
                    if iii not in indices:
                        indices += [iii]
                reference_dict['branches'] = []
                for index in indices:
                    reference_dict['branches'] += [branches_list[index]]
            else:
                reference_dict['branches'] = branches_list
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
    if not reference:
        print "\t\treference is empty, cuttin' this dead weight!"
        os.remove(ref_file)


def get_report(section, command):
    report = dict()
    if section['is_leaf']:
        if check_if_complete(section, command):
            if section['type'] == 'exempt':
                pass  # todo, what to do?
            return {section['id']: {'status': 'complete', 'section': section}}
        else:
            return {section['id']: {'status': 'incomplete', 'section': section}}
    else:
        for branch in section['branches'].values():
            report.update(get_report(branch, command))
    return report


def save_report(report, command):
    complete_keys = [key for key in report
                     if report[key]['status'] == 'complete']
    incomplete_keys = [key for key in report
                       if report[key]['status'] == 'incomplete']
    completed = len(complete_keys)
    total = completed + len(incomplete_keys)
    print "\t{} of {} examples, completed".format(completed, total)
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
        for key in incomplete_keys:
            string += "\n\t{}".format(key)
            if '{}-url'.format(command) in report[key]['section']:
                string += "\n\t\turl={}".format(
                    report[key]['section']['{}-url'.format(command)])
            if 'image' in report[key]['section']:
                string += "\n\t\timage={}".format(
                    report[key]['section']['image'])
            for language in report[key]['section']['config']['languages']:
                if '{}-{}'.format(command, language) in report[key]['section']:
                    string += "\n\t\t{}={}".format(
                        language,
                        report[key]['section']['{}-{}'.format(command,
                                                              language)]
                    )
    else:
        print "\tyou're a super example-maker! you deserve a bagel!"
    report_file = os.path.join(dirs['reports'], '{}-report.txt'.format(command))
    if not os.path.exists(dirs['reports']):
        os.makedirs(dirs['reports'])
    with open(report_file, 'w') as f:
        f.write(string)


def save_tree(tree):
    with open(files['tree'], 'w') as f:
        json.dump(tree, f, indent=4)


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
    with open(files['tree']) as f:
        tree = json.load(f)
    print "running some checks/repairs on the tree..."
    make_tree_valid(tree)
    set_total_examples(tree)
    print "setting up auto-generated structure"
    fix_tree(tree)
    print "porting urls"
    port_urls(tree, command)
    example_count = 0
    print "saving images"
    save_images(tree, command)
    example_count = 0
    print "porting code"
    port_code(tree, command)
    print "writing language references"
    for language in languages:
        language_reference = get_language_reference(tree, language, command)
        write_language_reference(language_reference, language)
    print "saving changes to the tree file"
    save_tree(tree)
    print "making the report file"
    report = get_report(tree, command)
    save_report(report, command)


if __name__ == "__main__":
    main()
