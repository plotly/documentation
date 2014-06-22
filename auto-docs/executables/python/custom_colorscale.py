import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

import numpy as np

size = 50
z = np.zeros((size, size)).tolist()
for r in range(1, size + 1):
    for c in range(1, size + 1):
        z[r-1][c-1] = r+c

data = Data([
    Heatmap(
        z=z,
        scl=[[0.0, 'rgb(165,0,38)'], [0.1111111111111111, 'rgb(215,48,39)'], [0.2222222222222222, 'rgb(244,109,67)'], [0.3333333333333333, 'rgb(253,174,97)'], [0.4444444444444444, 'rgb(254,224,144)'], [0.5555555555555556, 'rgb(224,243,248)'], [0.6666666666666666, 'rgb(171,217,233)'], [0.7777777777777778, 'rgb(116,173,209)'], [0.8888888888888888, 'rgb(69,117,180)'], [1.0, 'rgb(49,54,149)']]
    )
])

plot_url = py.plot(data, filename='custom-colorscale', auto_open=False)