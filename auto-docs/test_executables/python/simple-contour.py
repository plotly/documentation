import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np

size = 100
x = np.linspace(-2*np.pi, 2*np.pi, size)
y = np.linspace(-2*np.pi, 2*np.pi, size)
z = np.empty((size, size))
for i, xi in enumerate(x):
    for j, yj in enumerate(y):
        r2 = (xi**2+yj**2)
        z[i][j] = np.sin(xi)*np.cos(yj)*np.sin(r2)/(np.log(r2+1))
data = Data([
    Contour(
        z=z,
        x=x,
        y=y
    )
])

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(data, filename='simple-contour', auto_open=False)