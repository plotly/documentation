import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Bar(
        x=['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GE', 'HA', 'ID', 'IL', 'IN', 'IO', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NE', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
        y=['4833722', '735132', '6626624', '2959373', '38332521', '5268367', '3596080', '925749', '646449', '19552860', '9992167', '1404054', '1612136', '12882135', '6570902', '3090416', '2893957', '4395295', '4625470', '1328302', '5928814', '6692824', '9895622', '5420380', '2991207', '6044171', '1015165', '1868516', '2790136', '1323459', '8899339', '2085287', '19651127', '9848060', '723393', '11570808', '3850568', '3930065', '12773801', '1051511', '4774839', '844877', '6495978', '26448193', '2900872', '626630', '8260405', '6971406', '1854304', '5742713', '582658'],
        name='Col2'
    )
])
layout = Layout(
    title='Click to enter Plot title',
    xaxis=XAxis(
        title='Click to enter X axis title',
        domain=[0, 1],
        range=[-0.5, 49.5],
        type='category',
        showline=False,
        linecolor='#444',
        linewidth=1,
        tick0=0,
        dtick=1,
        ticks='',
        ticklen=5,
        tickcolor='#444',
        tickwidth=1,
        nticks=0,
        showticklabels=True,
        tickangle='auto',
        exponentformat='B',
        showexponent='all',
        showgrid=False,
        gridcolor='#eee',
        gridwidth=1,
        autorange=True,
        rangemode='normal',
        autotick=True,
        zeroline=False,
        zerolinecolor='#444',
        zerolinewidth=1,
        titlefont=Font(
            family='',
            size=0,
            color=''
        ),
        tickfont=Font(
            family='',
            size=0,
            color=''
        ),
        overlaying=False,
        position=0,
        anchor='y',
        mirror=False
    ),
    yaxis=YAxis(
        title='Click to enter Y axis title',
        domain=[0, 1],
        range=[0, 40350022.10526316],
        type='linear',
        showline=False,
        linecolor='#444',
        linewidth=1,
        tick0=0,
        dtick=5000000,
        ticks='',
        ticklen=5,
        tickcolor='#444',
        tickwidth=1,
        nticks=0,
        showticklabels=True,
        tickangle='auto',
        exponentformat='B',
        showexponent='all',
        showgrid=True,
        gridcolor='#eee',
        gridwidth=1,
        autorange=True,
        rangemode='normal',
        autotick=True,
        zeroline=True,
        zerolinecolor='#444',
        zerolinewidth=1,
        titlefont=Font(
            family='',
            size=0,
            color=''
        ),
        tickfont=Font(
            family='',
            size=0,
            color=''
        ),
        position=0,
        anchor='x',
        mirror=False,
        overlaying=False
    ),
    legend=Legend(
        x=1.02,
        y=1,
        bgcolor='#fff',
        bordercolor='#444',
        borderwidth=0,
        font=Font(
            family='',
            size=0,
            color=''
        ),
        traceorder='normal',
        xanchor='left',
        yanchor='top'
    ),
    width=1270,
    height=466,
    autosize=True,
    margin=Margin(
        l=80,
        r=80,
        b=80,
        t=100,
        pad=0,
        autoexpand=True
    ),
    paper_bgcolor='#fff',
    plot_bgcolor='#fff',
    dragmode='zoom',
    hovermode='x',
    barmode='group',
    bargap=0.2,
    bargroupgap=0,
    boxmode='overlay',
    boxgap=0.3,
    boxgroupgap=0.3,
    font=Font(
        family='"Open sans", verdana, arial, sans-serif',
        size=12,
        color='#444'
    ),
    titlefont=Font(
        family='',
        size=0,
        color=''
    ),
    separators='.,',
    hidesources=False,
    showlegend=True
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='2013-US-Population', auto_open=False)