import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = Data([
    Scatter(
        x=[0, 2, 4],
        y=[0, 4, 2]
    )
])
plot_url = py.plot(data, filename='file-name', filename=myfolder/myplotlygraph)