import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

import plotly.tools as tls

trace1 = Bar(
    y=[1, 2, 3],
    xaxis='x1',
    yaxis='y1'
)
trace2 = Bar(
    y=[1, 2, 3],
    xaxis='x2',
    yaxis='y2'
)
trace3 = Bar(
    y=[1, 2, 3],
    xaxis='x3',
    yaxis='y3'
)
trace4 = Bar(
    y=[1, 2, 3],
    xaxis='x4',
    yaxis='y4'
)
data = Data([trace1, trace2, trace3, trace4])

layout = Layout(
    title='i <3 subplots'
)

fig = Figure(data=data, layout=layout)

fig.update(tls.get_subplots(rows=2, columns=2))

plot_url = py.plot(fig, filename='tools-get-subplots')