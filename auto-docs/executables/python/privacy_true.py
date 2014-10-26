import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Scatter(
        x=[0, 2, 4],
        y=[0, 4, 2]
    )
])
plot_url = py.plot(data, filename='privacy-true', world_readable=True, auto_open=False)
