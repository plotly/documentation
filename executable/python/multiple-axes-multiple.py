import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

trace1 = Scatter(
    x=[1, 2, 3],
    y=[4, 5, 6],
    name='yaxis1 data'
)
trace2 = Scatter(
    x=[2, 3, 4],
    y=[40, 50, 60],
    name='yaxis2 data',
    yaxis='y2'
)
trace3 = Scatter(
    x=[3, 4, 5],
    y=[400, 500, 600],
    name='yaxis3 data',
    yaxis='y3'
)
trace4 = Scatter(
    x=[4, 5, 6],
    y=[40000, 50000, 60000],
    name='yaxis4 data',
    yaxis='y4'
)
trace5 = Scatter(
    x=[5, 6, 7],
    y=[400000, 500000, 600000],
    name='yaxis5 data',
    yaxis='y5'
)
trace6 = Scatter(
    x=[6, 7, 8],
    y=[4000000, 5000000, 6000000],
    name='yaxis6 data',
    yaxis='y6'
)
data = Data([trace1, trace2, trace3, trace4, trace5, trace6])

layout = Layout(
    title='multiple y-axes example',
    xaxis=XAxis(
        domain=[0.3, 0.7]
    ),
    yaxis=YAxis(
        title='yaxis title',
        titlefont=Font(
            color='#1f77b4'
        ),
        tickfont=Font(
            color='#1f77b4'
        )
    ),
    width=800,
    yaxis2=YAxis(
        title='yaxis2 title',
        titlefont=Font(
            color='#ff7f0e'
        ),
        tickfont=Font(
            color='#ff7f0e'
        ),
        position=0.15,
        anchor='free',
        side='left',
        overlaying='y'
    ),
    yaxis3=YAxis(
        title='yaxis3 title',
        titlefont=Font(
            color='#2ca02c'
        ),
        tickfont=Font(
            color='#2ca02c'
        ),
        position=0,
        anchor='free',
        side='left',
        overlaying='y'
    ),
    yaxis4=YAxis(
        title='yaxis4 title',
        titlefont=Font(
            color='#d62728'
        ),
        tickfont=Font(
            color='#d62728'
        ),
        anchor='x',
        side='right',
        overlaying='y'
    ),
    yaxis5=YAxis(
        title='yaxis5 title',
        titlefont=Font(
            color='#9467bd'
        ),
        tickfont=Font(
            color='#9467bd'
        ),
        position=0.85,
        anchor='free',
        side='right',
        overlaying='y'
    ),
    yaxis6=YAxis(
        title='yaxis6 title',
        titlefont=Font(
            color='#8c564b'
        ),
        tickfont=Font(
            color='#8c564b'
        ),
        position=1.0,
        anchor='free',
        side='right',
        overlaying='y'
    )
)

fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='multiple-axes-multiple')