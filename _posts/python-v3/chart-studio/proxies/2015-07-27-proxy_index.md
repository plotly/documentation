---
name: Requests Behind Corporate Proxies
permalink: python/v3/proxy-configuration/
description: How to configure Plotly's Python API to work with corporate proxies
layout: base
language: python/v3
thumbnail: thumbnail/net.jpg
display_as: chart_studio
order: 10
---

### Using Plotly's Python API Behind a Corporate Proxy

If you are behind a corporate firewall, you may see the error message:

<pre><code>requests.exceptions.ConnectionError: ('Connection aborted.', TimeoutError(10060, ...)</code></pre>

Plotly uses the `requests` module to communicate with the Plotly server. You can configure proxies by setting the environment variables `HTTP_PROXY` and `HTTPS_PROXY`.


<pre><code>$ export HTTP_PROXY="http://10.10.1.10:3128"
$ export HTTPS_PROXY="http://10.10.1.10:1080"
</code></pre>

To use HTTP Basic Auth with your proxy, use the http://user:password@host/ syntax:

<pre><code>$ export HTTP_PROXY="http://user:pass@10.10.1.10:3128/"</code></pre>

Note that proxy URLs must include the scheme.

You may also see this error if your proxy variable is set but you are no longer behind the
corporate proxy. Check if a proxy variable is set with:

<pre><code>$ echo $HTTP_PROXY
$ echo $HTTPS_PROXY
</code></pre>


**Still not working?**

- [Log an issue](https://github.com/plotly/python-api)
- Contact <support@plot.ly>
- Get in touch with your IT department, and ask them about corporate proxies
- [Requests documentation on configuring proxies](http://docs.python-requests.org/en/latest/user/advanced/#proxies)
the requests documentation.
- Plotly for IPython Notebooks is also [available for offline use](https://plot.ly/python/offline/)
- [Chart Studio Enterprise](https://plot.ly/product/enterprise) is available for behind-the-firewall corporate installations
