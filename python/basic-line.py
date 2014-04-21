import plotly
py = plotly.plotly('PythonAPI', 'ubpiol2cve')

x0 = [1,2,3,4]; y0 = [10,15,13,17]
x1 = [2,3,4,5]; y1 = [16,5,11,9]

py.plot(x0, y0, x1, y1)
