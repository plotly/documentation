"""
Update _data/plotschema.json for rakefile.
"""
import requests

plotschema = requests.get('https://api.plot.ly/v2/plot-schema/?sha1=%27%27',
                          headers={'plotly-client-platform': 'python'},
                          auth=('plotly_docs', 'ikwqmjam2o')).content
f = open('plotschema.json', 'w')

# inject single 's around colorway dflt list
n = 10  # number of colors in colorway
pattern = '"dflt":\[' + '"#[0-z]+",[ ]*'*(n-1) + '"#[0-z]+"[ ]*\]'
colorway = re.findall(pattern, plotschema)[0]

colorway = colorway.replace('[', "\'[")
colorway = colorway.replace(']', "]\'")

split = re.split(pattern, plotschema)
plotschema = split[0] + colorway + split[1]

f.write(plotschema)