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
    v4upgrade: true
    name: Requests Behind Corporate Proxies
    permalink: python/proxy-configuration/
    description: How to configure Plotly's Python API to work with corporate proxies
    layout: base
    language: python
    thumbnail: thumbnail/net.jpg
    display_as: chart_studio
    order: 10
---

<!-- #region -->
If you are behind a corporate firewall, you may see the error message:
```
requests.exceptions.ConnectionError: ('Connection aborted.', TimeoutError(10060, ...)
```
Plotly uses the requests module to communicate with the Plotly server. You can configure proxies by setting the environment variables HTTP_PROXY and HTTPS_PROXY.
```
$ export HTTP_PROXY="http://10.10.1.10:3128"
$ export HTTPS_PROXY="http://10.10.1.10:1080"
```
To use HTTP Basic Auth with your proxy, use the http://user:password@host/ syntax:

```
$ export HTTP_PROXY="http://user:pass@10.10.1.10:3128/"
```

Note that proxy URLs must include the scheme.

You may also see this error if your proxy variable is set but you are no longer behind the corporate proxy. Check if a proxy variable is set with:

```
$ echo $HTTP_PROXY
$ echo $HTTPS_PROXY
```
**Still not working?**

[Log an issue](https://github.com/plotly/plotly.py)

Contact [support@plot.ly]()

Get in touch with your IT department, and ask them about corporate proxies.

[Requests documentation on configuring proxies](http://docs.python-requests.org/en/latest/user/advanced/#proxies) the requests documentation.

Plotly for IPython Notebooks is also available for [offline use](https://plot.ly/python/offline/).

[Chart Studio Enterprise](https://plot.ly/product/enterprise) is available for behind-the-firewall corporate installations.
<!-- #endregion -->

```python

```
