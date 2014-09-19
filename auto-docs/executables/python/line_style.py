import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[52698, 43117],
    y=[53, 31],
    mode='markers',
    name='North America',
    text=['United States', 'Canada'],
    marker=Marker(
        color='rgb(164, 194, 244)',
        size=12,
        line=Line(
            color='white',
            width=0.5
        )
    )
)
trace2 = Scatter(
    x=[39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
    y=[33, 20, 13, 19, 27, 19, 49, 44, 38],
    mode='markers',
    name='Europe',
    text=['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
    marker=Marker(
        color='rgb(255, 217, 102)',
        size=12,
        line=Line(
            color='white',
            width=0.5
        )
    )
)
trace3 = Scatter(
    x=[42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
    y=[23, 42, 54, 89, 14, 99, 93, 70],
    mode='markers',
    name='Asia/Pacific',
    text=['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
    marker=Marker(
        color='rgb(234, 153, 153)',
        size=12,
        line=Line(
            color='white',
            width=0.5
        )
    )
)
trace4 = Scatter(
    x=[19097, 18601, 15595, 13546, 12026, 7434, 5419],
    y=[43, 47, 56, 80, 86, 93, 80],
    mode='markers',
    name='Latin America',
    text=['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
    marker=Marker(
        color='rgb(142, 124, 195)',
        size=12,
        line=Line(
            color='white',
            width=0.5
        )
    )
)
data = Data([trace1, trace2, trace3, trace4])
layout = Layout(
    title='Quarter 1 Growth',
    xaxis=XAxis(
        title='GDP per Capita',
        showgrid=False,
        zeroline=False
    ),
    yaxis=YAxis(
        title='Percent',
        showline=False
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='line-style', auto_open=False)
