import numpy as np
import matplotlib.pyplot as plt
import plotly.plotly as py
import plotly.tools as tls
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = np.random.beta(2, 5, size=10000)
fig, ax = plt.subplots()
_ = ax.hist(data)

pfig = tls.mpl_to_plotly(fig)
pfig['data'][0].update(x=data)
plot_url = py.plot([Histogram(x=data)], filename='$$$')