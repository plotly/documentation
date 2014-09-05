import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Bar(
        x=[1, 2, 3, 4],
        y=[5, 4, -3, 2],
        marker=Marker(
            color=['#447adb', '#447adb', '#db5a44', '#447adb']
        )
    )
])
plot_url = py.plot(data, auto_open=False, filename='bar-marker-array')