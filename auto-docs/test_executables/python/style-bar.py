import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Bar(
    x=['giraffes', 'orangutans', 'monkeys'],
    y=[20, 14, 23],
    name='SF Zoo',
    marker=Marker(
        line=Line(
            color='grey'
        ),
        color='orange'
    )
)
trace2 = Bar(
    x=['giraffes', 'orangutans', 'monkeys'],
    y=[12, 18, 29],
    name='LA Zoo',
    marker=Marker(
        line=Line(
            color='grey',
            width=3
        ),
        color='blue'
    )
)
data = Data([trace1, trace2])
layout = Layout(
    title='Animal Population',
    xaxis=XAxis(
        type='category'
    ),
    yaxis=YAxis(
        title='# of animals (thousands)'
    ),
    categories=['giraffes', 'orangutans', 'monkeys'],
    barmode='group',
    bargap=0.25,
    bargroupgap=0.3,
    orientation='v'
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


plot_url = py.plot(fig, filename='style-bar', auto_open=False)