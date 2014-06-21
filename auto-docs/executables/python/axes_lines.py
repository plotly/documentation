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
    xaxis=XAxis(
        showline=True,
        linecolor='#636363',
        linewidth=6,
        showgrid=True,
        gridcolor='#bdbdbd',
        gridwidth=2,
        zeroline=True,
        zerolinecolor='#969696',
        zerolinewidth=4,
        mirror='ticks'
    ),
    yaxis=YAxis(
        showline=True,
        linecolor='#636363',
        linewidth=6,
        showgrid=True,
        gridcolor='#bdbdbd',
        gridwidth=2,
        zeroline=True,
        zerolinecolor='#969696',
        zerolinewidth=4,
        mirror='ticks'
    )
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='axes-lines', auto_open=False)