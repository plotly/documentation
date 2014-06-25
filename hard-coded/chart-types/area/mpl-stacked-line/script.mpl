import numpy as np
import matplotlib.pyplot as plt
import plotly.plotly as py
py.sign_in("-", "-")

# create our stacked data manually
y0 = np.random.rand(100)
y1 = y0 + np.random.rand(100)
y2 = y1 + np.random.rand(100)
capacity = 3*np.ones(100)

# make the mpl plot (no fill yet)
fig, ax = plt.subplots()
ax.plot(y0, label='y0')
ax.plot(y1, label='y1')
ax.plot(y2, label='y2')
ax.plot(capacity, label='capacity')

# set all traces' "fill" so that it fills to the next 'y' trace
update = {'data':[{'fill': 'tonexty'}]}

# strip style just lets Plotly make the styling choices (e.g., colors)
plot_url = py.plot_mpl(fig, update=update, strip_style=True, filename='>>>filename<<<')