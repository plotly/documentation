import numpy as np
import matplotlib.pyplot as plt
import plotly.plotly as py
import plotly.tools as tls

py.sign_in('test-runner', '9h29fe3l0x')

data = np.random.beta(2, 5, size=10000)
fig, ax = plt.subplots()
_ = ax.hist(data)

fig = tls.mpl_to_plotly(fig)  # convert mpl figure to json representation
fig['layout']['bargap'] = 0
plot_url = py.plot(fig, filename='$$$')
