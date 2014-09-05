import numpy as np


x0 = np.random.randn(100)/5. + 0.5  # 5. enforces float division
y0 = np.random.randn(100)/5. + 0.5
x1 = np.random.rand(50)
y1 = np.random.rand(50) + 1.0


x = np.concatenate([x0, x1])
y = np.concatenate([y0, y1])
import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=x0,
    y=y0,
    mode='markers',
    marker=Marker(
        symbol='circle',
        opacity=0.7
    )
)
trace2 = Scatter(
    x=x1,
    y=y1,
    mode='markers',
    marker=Marker(
        symbol='square',
        opacity=0.7
    )
)
trace3 = Histogram2d(
    x=x,
    y=y
)
data = Data([trace1, trace2, trace3])
plot_url = py.plot(data, auto_open=False, filename='2d-histogram-scatter')