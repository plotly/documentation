"""
Update _data/plotschema.json for rakefile.
"""
import requests

plotschema = requests.get('https://api.plot.ly/v2/plot-schema/?sha1=%27%27',
                          headers={'plotly-client-platform': 'python'},
                          auth=('plotly_docs', 'ikwqmjam2o')).content
f = open('_data/plotschema.json', 'wb')
f.write(plotschema)
