"""
Update _data/plotschema.json for rakefile.
"""
import requests

plotschema = requests.get('https://api.plot.ly/v2/plot-schema/?sha1=%27%27',
                          headers={'plotly-client-platform': 'python'},
                          auth=('plotly_docs', 'ikwqmjam2o')).content
f = open('plotschema.json', 'w')

# put quotes around all hex-color dflt lists with len 10
n = 10  # number of colors in colorway
pattern = '"dflt":[ ]*\[' + '"#[0-z]+",[ ]*'*(n-1) + '"#[0-z]+"[ ]*\]'
colorway = re.findall(pattern, plotschema)

for j in range(len(colorway)):
    colorway[j] = colorway[j].replace('[', "\'[")
    colorway[j] = colorway[j].replace(']', "]\'")

new_plotschema = ''
if len(colorway) > 0:
    split = re.split(pattern, plotschema)
    for _ in range(len(split) - 1):
        new_plotschema += split[_]
        new_plotschema += colorway[_]
    new_plotschema += split[len(split) - 1]
    
else:    
    new_plotschema = plotschema
f.write(new_plotschema)
