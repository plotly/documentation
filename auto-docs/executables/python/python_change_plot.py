import plotly.plotly as py
py.sign_in('theengineear', 'o9zlr0hy6z')

fig = py.get_figure("https://plot.ly/~PlotBot/5")

fig['layout']['title'] = "Never forget that title!"

plot_url = py.plot(fig, filename="python-change_plot")
