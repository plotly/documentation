import matplotlib.pyplot as plt
import numpy as np

import plotly.plotly as py
py.sign_in('-', '-')

gaussian_numbers = np.random.randn(1000)
plt.hist(gaussian_numbers)
plt.title("Gaussian Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")

fig = plt.gcf()

plot_url = py.plot_mpl(fig, filename='>>>filename<<<')
