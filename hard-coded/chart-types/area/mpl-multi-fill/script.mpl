import numpy as np
import matplotlib.pyplot as plt
import plotly.plotly as py
py.sign_in("-", "-")

x = np.linspace(0, 2*np.pi, 100)
fig, ax = plt.subplots()
ax.plot(np.sin(x), label='sin'); ax.plot(np.cos(x), label='cos')

update = {'data':[{'fill': 'tozeroy'}]}  # this updates BOTH traces now
plot_url = py.plot_mpl(fig, update=update, filename='>>>filename<<<')