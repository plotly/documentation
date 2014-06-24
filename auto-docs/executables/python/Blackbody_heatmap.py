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
        scl='Blackbody'
    )
])
layout = Layout(
    title='Blackbody'
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='Blackbody-heatmap', auto_open=False)