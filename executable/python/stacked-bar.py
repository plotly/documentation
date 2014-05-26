import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

trace1 = Bar(
    x=['giraffes', 'orangutans', 'monkeys'],
    y=[20, 14, 23],
    name='SF Zoo'
)
trace2 = Bar(
    x=['giraffes', 'orangutans', 'monkeys'],
    y=[12, 18, 29],
    name='LA Zoo'
)
data = Data([trace1, trace2])

layout = Layout(
    xaxis=XAxis(
        type='category'
    ),
    categories=['giraffes', 'orangutans', 'monkeys'],
    barmode='stack'
)

fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='stacked-bar')