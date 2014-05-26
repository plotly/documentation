import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

trace1 = Scatter(
    x=[0, 1, 2, 3],
    y=[0, 2, 4, 6],
    visible=True
)
trace2 = Scatter(
    x=[0, 1, 2, 3],
    y=[8, 4, 2, 0],
    visible=False
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='data-visible')