import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[1, 2, 3, 4],
    y=[0, 2, 3, 5],
    fill='tozeroy'
)
trace2 = Scatter(
    x=[1, 2, 3, 4],
    y=[3, 5, 1, 7],
    fill='tonexty'
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='basic-area', auto_open=False)
