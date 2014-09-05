import matplotlib.pyplot as plt
import plotly.plotly as py
import numpy as np

py.sign_in('TestBot', 'r1neazxo9w')

fig, ax = plt.subplots()
ax.scatter(np.linspace(-1, 1, 50), np.random.randn(50))

plot_url = py.plot_mpl(fig, filename="mpl-scatter")
