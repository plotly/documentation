import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[974, 29796, 1391, 1713, 4959],
    y=[43, 75, 64, 59, 72],
    mode='markers',
    name='Europe',
    text=['Afghanistan', 'Bahrain', 'Bangladesh', 'Cambodia', 'China'],
    marker=Marker(
        color='#0074D9',
        size=[5.647, 0.841, 12.265, 3.759, 36.313],
        sizemode='area',
        sizeref=0.01
    )
)
trace2 = Scatter(
    x=[6223, 4797, 1441, 12569, 430],
    y=[72, 42, 56, 50, 49],
    mode='markers',
    name='Africa',
    text=['Algeria', 'Angola', 'Benin', 'Botswana', 'Burundi'],
    marker=Marker(
        color='#FF851B',
        size=[5.773, 3.524, 2.842, 1.28, 2.896],
        sizemode='area',
        sizeref=0.1
    )
)
trace3 = Scatter(
    x=[12779, 3822, 9065, 36319, 13171],
    y=[75, 65, 72, 80, 78],
    mode='markers',
    name='Americas',
    text=['Argentina', 'Bolivia', 'Brazil', 'Canada', 'Chile'],
    marker=Marker(
        color='#3D9970',
        size=[6.348, 3.019, 13.784, 5.778, 4.035],
        sizemode='area',
        sizeref=0.1
    )
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    xaxis=XAxis(
        title='GDP per Capita',
        type='log'
    ),
    yaxis=YAxis(
        title='Life Expectancy'
    ),
    annotations=Annotations([
        Annotation(
            x=-0.15,
            y=-0.15,
            xref='paper',
            yref='paper',
            text='Points are sized by<br>country population',
            showarrow=False,
            xanchor='left'
        )
    ]),
    hovermode='closest'
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='pretty-bubble', auto_open=False)