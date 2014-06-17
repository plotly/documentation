import os, json

with open('dirs.json') as f:
    dirs = json.load(f)

mpl_folder = os.path.join(dirs['exceptions'], 'python')


def main():
    for filename in os.listdir(mpl_folder):
        id, ext = os.path.splitext(filename)
        url_file = "{}.json".format(id)
        if ext == '.py' and url_file not in os.listdir(mpl_folder):
            with open(os.path.join(mpl_folder, filename)) as f:
                exec_locals = exec_python_string(f.read())
            if 'plot_url' not in exec_locals:
                raise Exception("'plot_url' not defined in exec string!")
            content = {"url": exec_locals['plot_url']}
            with open(os.path.join(mpl_folder, "{}.json".format(id)), 'w') as f:
                json.dump(content, f, indent=4)


def exec_python_string(exec_string):
    try:
        exec exec_string
    except:
        print exec_string
        raise
    if 'plot_url' not in locals():
        raise Exception("'plot_url' not found in exec string!")
    return locals()

if __name__ == '__main__':
    main()

