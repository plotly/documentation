import matplotlib.pyplot as plt
import plotly.plotly as py
import numpy as np

py.sign_in('', '')

fig, ax = plt.subplots()
num = 1000
s = 121
x1 = np.linspace(-0.5,1,num) + (0.5 - np.random.rand(num))
y1 = np.linspace(-5,5,num) + (0.5 - np.random.rand(num))
x2 = np.linspace(-0.5,1,num) + (0.5 - np.random.rand(num))
y2 = np.linspace(5,-5,num) + (0.5 - np.random.rand(num))
x3 = np.linspace(-0.5,1,num) + (0.5 - np.random.rand(num))
y3 = (0.5 - np.random.rand(num))
ax.scatter(x1, y1, color='r', s=2*s, marker='^', alpha=.4)
ax.scatter(x2, y2, color='b', s=s/2, alpha=.4)
ax.scatter(x3, y3, color='g', s=s/3, marker='s', alpha=.4)

plot_url = py.plot_mpl(fig, filename=">>>filename<<<")
