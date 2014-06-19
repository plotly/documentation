import plotly.plotly as py
py.sign_in("-", "-")

fig = py.get_figure("PlotBot", 5)

plot_url = py.plot(fig, filename=">>>filename<<<")
