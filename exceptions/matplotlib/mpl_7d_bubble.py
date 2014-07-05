import matplotlib.pyplot as plt
import numpy as np
import plotly.plotly as py
py.sign_in('TestBot', 'r1neazxo9w')

n = 50
x = np.random.rand(n)
y = np.random.rand(n)
c = np.random.rand(n,4)  # rgba
z = np.random.rand(n)
s = np.random.rand(n)
ew = np.random.rand(n)
ec = np.random.rand(n,4)  # rgba
area_scale = 500
width_scale = 5

fig, ax = plt.subplots()
sc = ax.scatter(x,
                y,
                s=np.square(s)*area_scale,
                c=c,
                edgecolor=ec,
                linewidth=ew*width_scale)
ax.grid()

plot_url = py.plot_mpl(fig, filename='mpl-7d-bubble')
