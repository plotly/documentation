import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1

data = Data([
    Histogram2d(
        x=x,
        y=y,
        histnorm='probability',
        autobinx=False,
        xbins=XBins(
            start=-3,
            end=3,
            size=0.1
        ),
        autobiny=False,
        ybins=YBins(
            start=-2.5,
            end=4,
            size=0.1
        ),
        colorscale=[[0, 'rgb(12,51,131)'], [0.25, 'rgb(10,136,186)'], [0.5, 'rgb(242,211,56)'], [0.75, 'rgb(242,143,56)'], [1, 'rgb(217,30,30)']]
    )
])
plot_url = py.plot(data, filename='2d-histogram-options', auto_open=False)
