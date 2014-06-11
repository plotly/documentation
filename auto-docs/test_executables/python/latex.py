import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[1, 2, 3, 4],
    y=[1, 4, 9, 16],
    name='$\\alpha_{1c} = 352 \\pm 11 \\text{ km s}^{-1}$'
)
trace2 = Scatter(
    x=[1, 2, 3, 4],
    y=[0.5, 2, 4.5, 8],
    name='$\\beta_{1c} = 25 \\pm 11 \\text{ km s}^{-1}$'
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis=XAxis(
        title='$\\sqrt{(n_\\text{c}(t|{T_\\text{early}}))}$'
    ),
    yaxis=YAxis(
        title='$d, r \\text{ (solar radius)}$'
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


plot_url = py.plot(fig, filename='latex', auto_open=False)