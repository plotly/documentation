import matplotlib.pyplot as plt

import plotly.plotly as py
py.sign_in('theengineear', 'o9zlr0hy6z')

y = [3, 10, 7, 5, 3, 4.5, 6, 8.1]
N = len(y)
x = range(N)
width = 1/1.5
plt.bar(x, y, width, color="blue")

    
fig = plt.gcf()
plot_url = py.plot_mpl(fig, filename='mpl-basic-bar')
