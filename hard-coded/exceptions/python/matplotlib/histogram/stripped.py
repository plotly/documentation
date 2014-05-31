import numpy as np
import matplotlib.pyplot as plt
import plotly.plotly as py

py.sign_in('test-runner', '9h29fe3l0x')

data = np.random.beta(2, 5, size=10000)
fig, ax = plt.subplots()
_ = ax.hist(data)

plot_url = py.plot_mpl(fig, strip_style=True, filename='$$$')