import matplotlib.pyplot as plt # so we don't have to look at mpl's backend
import numpy as np

import plotly.plotly as py
py.sign_in('theengineear', 'o9zlr0hy6z')

gaussian_numbers = np.random.randn(1000)
plt.hist(gaussian_numbers)
plt.title("Gaussian Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")

fig = plt.gcf()

plot_url = py.plot_mpl(fig, filename='mpl-basic-histogram')
