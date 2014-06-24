import matplotlib.pyplot as plt # so we don't have to look at mpl's backend
import numpy as np

import plotly.plotly as py
py.sign_in('TestBot', 'r1neazxo9w')

# evenly sampled time at 200ms intervals
t = np.arange(0., 5., 0.2)

# red dashes, blue squares and green triangles
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')

fig = plt.gcf()
plot_url = py.plot_mpl(fig, filename='mpl-line-style')
