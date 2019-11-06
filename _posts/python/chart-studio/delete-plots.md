---
jupyter:
  jupytext:
    notebook_metadata_filter: all
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.1'
      jupytext_version: 1.1.7
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
  language_info:
    codemirror_mode:
      name: ipython
      version: 3
    file_extension: .py
    mimetype: text/x-python
    name: python
    nbconvert_exporter: python
    pygments_lexer: ipython3
    version: 3.6.5
  plotly:
    description: How to delete plotly graphs in python.
    display_as: chart_studio
    ipynb: ~notebook_demo/98
    language: python
    layout: base
    name: Deleting Plots
    order: 9
    page_type: u-guide
    permalink: python/delete-plots/
    thumbnail: thumbnail/delete.jpg
    v4upgrade: true
---

#### Imports and Credentials
In additional to importing python's `requests` and `json` packages, this tutorial also uses [Plotly's REST API](https://api.plot.ly/v2/)

First define YOUR [username and api key](https://plot.ly/settings/api) and create `auth` and `headers` to use with `requests`

```python
import chart_studio
import chart_studio.plotly as py

import json
import requests
from requests.auth import HTTPBasicAuth

username = 'private_plotly' # Replace with YOUR USERNAME
api_key = 'k0yy0ztssk' # Replace with YOUR API KEY

auth = HTTPBasicAuth(username, api_key)
headers = {'Plotly-Client-Platform': 'python'}

chart_studio.tools.set_credentials_file(username=username, api_key=api_key)
```

#### [Trash](https://api.plot.ly/v2/files/#trash) and [Restore](https://api.plot.ly/v2/files/#restore)
Create a plot and return the url to see the file id which will be used to delete the plot.

```python
url = py.plot({"data": [{"x": [1, 2, 3],
                         "y": [4, 2, 4]}],
               "layout": {"title": "Let's Trash This Plot<br>(then restore it)"}},
              filename='trash example')

url
```

Include the file id in your request. <br>The file id is your `username:plot_id#`

```python
fid = username+':658'
fid
```

The following request moves the plot from the [organize folder](https://plot.ly/organize/home) into the trash. <br>Note: a successful trash request will return a `Response [200]`.

```python
requests.post('https://api.plot.ly/v2/files/'+fid+'/trash', auth=auth, headers=headers)
```

Now if you visit the url, the plot won't be there. <br>However, at this point, there is the option to restore the plot (i.e. move it out of trash and back to the organize folder) with the following request:





#### [<b>PERMANENT</b> Delete](https://api.plot.ly/v2/files/#permanent_delete)

This request <b>CANNOT!!!!!!!</b> be restored.
Only use `permanent_delete` when <b>absolutely sure the plot is no longer needed</b>.<br>

```python
url = py.plot({"data": [{"x": [1, 2, 3],
                         "y": [3, 2, 1]}],
               "layout": {"title": "Let's Delete This Plot<br><b>FOREVER!!!!</b>"}},
              filename='PERMANENT delete ex')
url
```

```python
fid_permanent_delete = username+':661'
fid_permanent_delete
```

To <b>PERMANENTLY</b> delete a plot, first move the plot to the trash (as seen above):

```python
requests.post('https://api.plot.ly/v2/files/'+fid_permanent_delete+'/trash', auth=auth, headers=headers)
```

Then [<b>permanent</b> delete](https://api.plot.ly/v2/files/#permanent_delete).<br>
Note: a successful permanent delete request will return a `Response [204]` (No Content).

```python
requests.delete('https://api.plot.ly/v2/files/'+fid_permanent_delete+'/permanent_delete', auth=auth, headers=headers)
```

#### Delete All Plots and Grids PERMANENTLY!
In order to delete all plots and grids permanently, you need to delete all of your plots first, then delete all the associated grids.

```python
def get_pages(username, page_size):
    url = 'https://api.plot.ly/v2/folders/all?user='+username+'&page_size='+str(page_size)
    response = requests.get(url, auth=auth, headers=headers)
    if response.status_code != 200:
        return
    page = json.loads(response.content)
    yield page
    while True:
        resource = page['children']['next']
        if not resource:
            break
        response = requests.get(resource, auth=auth, headers=headers)
        if response.status_code != 200:
            break
        page = json.loads(response.content)
        yield page

def permanently_delete_files(username, page_size=500, filetype_to_delete='plot'):
    for page in get_pages(username, page_size):
        for x in range(0, len(page['children']['results'])):
            fid = page['children']['results'][x]['fid']
            res = requests.get('https://api.plot.ly/v2/files/' + fid, auth=auth, headers=headers)
            res.raise_for_status()
            if res.status_code == 200:
                json_res = json.loads(res.content)
                if json_res['filetype'] == filetype_to_delete:
                    # move to trash
                    requests.post('https://api.plot.ly/v2/files/'+fid+'/trash', auth=auth, headers=headers)
                    # permanently delete
                    requests.delete('https://api.plot.ly/v2/files/'+fid+'/permanent_delete', auth=auth, headers=headers)

permanently_delete_files(username, filetype_to_delete='plot')
permanently_delete_files(username, filetype_to_delete='grid')
```

```python

```
