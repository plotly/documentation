import matplotlib.pyplot as plt
import numpy as np

import plotly.plotly as py
py.sign_in('TestBot', 'r1neazxo9w')

x = np.linspace(0, 10)
line, = plt.plot(x, np.sin(x), '--', linewidth=2)

fig = plt.gcf()

plot_url = py.plot_mpl(fig, filename='mpl-basic-line')
