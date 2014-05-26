import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = Data([
    Scatter(
        x=['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y=[1, 3, 6]
    )
])
plot_url = py.plot(data, filename='date-axes')