import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[8, 7, 6, 5, 4, 3, 2, 1, 0]
)
trace2 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 1, 2, 3, 4, 5, 6, 7, 8]
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis={'tickfont': {'color': 'black', 'family': 'Old Standard TT, serif', 'size': 14}, 'showexponent': 'All', 'showticklabels': True, 'title': 'AXIS TITLE', 'tickangle': 45, 'titlefont': {'color': 'lightgrey', 'family': 'Arial, sans-serif', 'size': 18}, 'exponentformat': 'e'},
    yaxis={'tickfont': {'color': 'black', 'family': 'Old Standard TT, serif', 'size': 14}, 'showexponent': 'All', 'showticklabels': True, 'title': 'AXIS TITLE', 'tickangle': 45, 'titlefont': {'color': 'lightgrey', 'family': 'Arial, sans-serif', 'size': 18}, 'exponentformat': 'e'}
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='axes-labels', auto_open=False)