import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[1, 2, 3, 4],
    y=[10, 15, 13, 17],
    mode='markers'
)
trace2 = Scatter(
    x=[2, 3, 4, 5],
    y=[16, 5, 11, 9],
    mode='lines'
)
trace3 = Scatter(
    x=[1, 2, 3, 4],
    y=[12, 9, 15, 12],
    mode='lines+markers'
)
data = Data([trace1, trace2, trace3])
plot_url = py.plot(data, auto_open=False, filename='line-scatter')