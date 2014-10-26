import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 1, 3, 2, 4, 3, 4, 6, 5]
)
trace2 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 4, 5, 1, 2, 2, 3, 4, 2]
)
data = Data([trace1, trace2])
layout = Layout(
    showlegend=False,
    annotations=Annotations([
        Annotation(
            x=2,
            y=5,
            xref='x',
            yref='y',
            text='Annotation Text',
            showarrow=True,
            arrowhead=7,
            ax=0,
            ay=-40
        ),
        Annotation(
            x=4,
            y=4,
            xref='x',
            yref='y',
            text='Annotation Text 2',
            showarrow=True,
            arrowhead=7,
            ax=0,
            ay=-40
        )
    ])
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='multiple-annotation', auto_open=False)
