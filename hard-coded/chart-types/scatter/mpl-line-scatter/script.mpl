import matplotlib.pyplot as plt

import plotly.plotly as py
py.sign_in('--', '--')

x = [1,2,3,4]
y = [3,4,8,6]

plt.plot(x, 'o')
plt.plot(y)
fig = plt.gcf()

plot_url = py.plot_mpl(fig, filename='>>>filename<<<')
