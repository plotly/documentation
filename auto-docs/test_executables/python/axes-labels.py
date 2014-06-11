import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

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
        title='AXIS TITLE',
        showticklabels=True,
        tickangle=45,
        exponentformat='e',
        showexponent='All',
        titlefont=Font(
            family='Arial, sans-serif',
            size=18,
            color='lightgrey'
        ),
        tickfont=Font(
            family='Old Standard TT, serif',
            size=14,
            color='black'
        )
    ),
    yaxis=YAxis(
        title='AXIS TITLE',
        showticklabels=True,
        tickangle=45,
        exponentformat='e',
        showexponent='All',
        titlefont=Font(
            family='Arial, sans-serif',
            size=18,
            color='lightgrey'
        ),
        tickfont=Font(
            family='Old Standard TT, serif',
            size=14,
            color='black'
        )
    )
)
fig = Figure(data=data, layout=layout)

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(fig, filename='axes-labels', auto_open=False)