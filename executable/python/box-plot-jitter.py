import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = Data([
    Box(
        y=[0, 1, 1, 2, 3, 5, 8, 13, 21],
        boxpoints='all',
        jitter=0.3,
        pointpos=-1.8
    )
])
plot_url = py.plot(data, filename='box-plot-jitter')