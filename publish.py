"""
Takes the input from tree and outputs the final 'references'
The reason for the logical split is to allow language-specific examples to
generate their urls between running 'run.py' and 'publish.py'
"""

import json
import os
import sys
import threading
import time
from collections import OrderedDict
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
             'matplotlib', 'js']

### define extensions for executable code ###
lang_to_ext = dict(python='py', julia='jl', matlab='m', r='r', nodejs='js', js='html')
ext_to_lang = dict(py='python', jl='julia', m='matlab', r='r', js='nodejs', html='js')

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


def port_urls(section, command, threads):
    if section['is_leaf'] and 'url' in section:
        global example_count
        example_count += 1
        if (command == 'test' and 'test-url' not in section) or \
           (command == 'publish' and 'publish-url' not in section):

            name = section['id']
            thread = threading.Thread(
                name=name,
                target=url_worker,
                args=(section, command))
            thread.setDaemon(True)
            start_msg = (
                "\tstarting {} of {}: ({})"
                .format(example_count, total_examples, section['id'])
            )
            finish_msg = (
                "\tfinished {} of {}: ({})"
                .format(example_count, total_examples, section['id'])
            )
            messages = {'start': start_msg,
                        'finish': finish_msg,
                        'error': ''}
            threads.append(
                {'name': name, 'thread': thread, 'messages': messages}
            )
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            port_urls(branch, command, threads)


def url_worker(section, command):
    username = section['url'].replace("https://plot.ly/~", "").split('/')[0]
    fid = section['url'].replace("https://plot.ly/~", "").split('/')[1]
    if 'private' in section and section['private']:
        time.sleep(1)  # thread issues if we're singing in differently...
        match = [usr for usr in users.values()
                 if usr['un'].lower() == username.lower()]
        if match:
            user = match[0]
            py.sign_in(user['un'], user['ak'])
    try:
        fig = py.get_figure(username, fid)
    except:  # todo, too broad exception clause
        pass
        # print ("couldn't port url over for '{}'."
        #        "".format(section['id']))
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
                # print "\t\tcall to py.plot() failed"
        else:
            try:  # todo clean up exception handling
                # sign in again here to reduce chance of collision...
                py.sign_in(users[doc_user]['un'], users[doc_user]['ak'])
                new_url = py.plot(fig,
                                  filename=section['id'],
                                  auto_open=False)
            except:
                new_url = None
                # print "\t\tcall to py.plot() failed"
        if command == 'test' and new_url:
            section['test-url'] = new_url
            print "\tnew url for ({}): '{}'".format(section['id'], new_url)
        elif command == 'publish' and new_url:
            section['publish-url'] = new_url
            print "\tnew url for ({}): '{}'".format(section['id'], new_url)


def save_images(section, command, threads):
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
            name = "model-thread-{}".format(section['id'])
            thread = threading.Thread(
                name=name,
                target=image_worker,
                args=(section, command, folder_path, file_path)
            )
            thread.setDaemon(True)
            start_msg = (
                "\tstarting {} of {}: ({})"
                .format(example_count, total_examples, section['id'])
            )
            finish_msg = (
                "\tfinished {} of {}: ({})"
                .format(example_count, total_examples, section['id'])
            )
            messages = {'start': start_msg,
                        'finish': finish_msg,
                        'error': ''}
            threads.append(
                {'name': name, 'thread': thread, 'messages': messages}
            )
        else:
            section['image'] = True
    elif not section['is_leaf']:
        for branch in section['branches'].values():
            save_images(branch, command, threads)


def image_worker(section, command, folder_path, file_path):
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
#            if not leaf['image']:
#                raise ValueError()
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
    if reference:
        ordered_referece = get_ordered_dict_with_lists(reference)
        with open(ref_file, 'w') as f:
            json.dump(ordered_referece, f, indent=2, separators=(',', ': '))
            f.write('\n')
    if not reference:
        print "\t\treference is empty, cuttin' this dead weight!"
        if os.path.exists(ref_file):
            os.remove(ref_file)

def get_ordered_dict_with_lists(d):
    od = OrderedDict()
    keys = d.keys()
    keys.sort()
    for key in keys:
        if isinstance(d[key], dict):
            od[key] = get_ordered_dict_with_lists(d[key])
        elif isinstance(d[key], list):
            ol = [get_ordered_dict_with_lists(d[key][iii])
                  for iii in range(len(d[key]))
                  if isinstance(d[key][iii], dict)]
            if len(ol) == len(d[key]):
                od[key] = ol
            else:
                od[key] = d[key]
        else:
            od[key] = d[key]
    return od


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
        f.write("\n")


def save_tree(tree):
    print "saving tree"
    try:
        os.makedirs(dirs['run'])
    except OSError:
        pass
    sorted_new_tree = get_ordered_dict(tree)
    with open(files['tree'], 'w') as f:
        json.dump(sorted_new_tree, f, indent=4, separators=(',', ': '))
        f.write('\n')


def get_ordered_dict(d):
    od = OrderedDict()
    keys = d.keys()
    keys.sort()
    for key in keys:
        if isinstance(d[key], dict):
            od[key] = get_ordered_dict(d[key])
        else:
            od[key] = d[key]
    return od


def thread_space(thread_list, max_threads):
    """Return the (t)head space, number of new threads that can be started.

    This effectively throttles the number of threads which can be alive at
    once.

    """
    living = sum((1 for t in thread_list if t['thread'].isAlive()))
    return max_threads - living


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
    print "compling url porting threads"
    url_threads = []
    port_urls(tree, command, url_threads)
    print "starting url threads"
    index = 0
    max_thread_ct = 20
    while True:
        num_new_threads = thread_space(url_threads, max_thread_ct)
        for i in range(0, num_new_threads):
            if index < len(url_threads):
                print url_threads[index]['messages']['start']
                url_threads[index]['thread'].start()
                index += 1
        if index == len(url_threads):
            break
        time.sleep(.01)
    for index in range(len(url_threads)):
        url_threads[index]['thread'].join()

    print "waiting for url-threads to complete"
    for index in range(len(url_threads)):
        url_threads[index]['thread'].join()

    example_count = 0
    print "saving images"
    image_threads = []
    save_images(tree, command, image_threads)

    index = 0
    max_thread_ct = 20
    while True:
        num_new_threads = thread_space(image_threads, max_thread_ct)
        for i in range(0, num_new_threads):
            if index < len(image_threads):
                print image_threads[index]['messages']['start']
                image_threads[index]['thread'].start()
                index += 1
        if index == len(image_threads):
            break
        time.sleep(.01)
    for index in range(len(image_threads)):
        image_threads[index]['thread'].join()

    print "waiting for image-threads to complete"
    for index in range(len(image_threads)):
        image_threads[index]['thread'].join()

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
