import matplotlib.pyplot as plt
import numpy as np
import plotly.plotly as py
py.sign_in('-', '-')

durl = 'http://datasets.flowingdata.com/crimeRatesByState2005.csv'
rdata = np.genfromtxt(durl,dtype='S8,f,f,f,f,f,f,f,i',delimiter=',')
rdata=rdata[2:]  # cut titles/statistics

# pull out data
x = [data[1] for data in rdata] # murders per 100,000 people
y = [data[5] for data in rdata] # buglaries per 100,000 people
c = [data[6] for data in rdata] # larceny_theft per 100,000 people
s = [data[8] for data in rdata] # population
name = [data[0] for data in rdata] # state name
annotations = [[x[i], y[i], name[i]] for i in range(len(rdata))]

# making the scatter plot
fig, ax = plt.subplots()
cm = plt.cm.get_cmap('RdBu_r')  # define color map ('_r' means 'reverse')
al = 0.9
ax.scatter(x, y, c=c, cmap=cm, s=np.sqrt(s), linewidths=2, edgecolor='w', alpha=al)

# put in annotations
text_style = {"size": 11, "horizontalalignment": "center"}
for text_data in annotations:
    ax.text(*text_data, **text_style)  # *unpack_x_y_name, **unpack_size_alignment
ax.text(.97, .97, "Color represents\nlarceny-theft levels",
        transform=ax.transAxes,
        horizontalalignment='right',
        verticalalignment='top',
        size=11)

# label axes
ax.set_xlabel('Murders per 100,000 population')
ax.set_ylabel('Burglaries per 100,000 population')

# send resulting figure to plotly
plot_url = py.plot_mpl(fig, filename='>>>filename<<<')
