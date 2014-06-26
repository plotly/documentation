import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Bar(
        x=['Bob Dylan', 'The Beatles', 'David Bowie', 'Randy Newman', 'The Rolling Stones', 'Madonna', 'Frank Sinatra', 'The Beach Boys', 'Marvin Gaye', 'Prince', 'The Kinks', 'Elvis Presley', 'Tom Waits', 'U2', 'The Clash', 'Johnny Cash', 'Kate Bush', 'The Supremes', 'The Smiths', 'Al Green', 'Pulp', 'Chuck Berry', 'Elvis Costello and the Attractions', 'Neil Young', 'Stevie Wonder', 'Ray Charles', 'The Pogues', 'Grace Jones', 'Bill Withers', 'The Who', 'Paul Simon', 'Roy Orbison', 'Arctic Monkeys', 'Bruce Springsteen', 'The Police', 'Rod Stewart', 'Steve Earle'],
        y=[24, 19, 9, 8, 8, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        text=['Girl from the North Country  (1963)<br>Dont Think Twice, Its All Right (1963)<br>Masters of War (1963)<br>When the Ship Comes In (1964)<br>The Times They Are a-Changin (1964)<br>The Lonesome Death of Hattie Carroll (1964)<br>Like a Rolling Stone (1965)<br>Maggies Farm (1965)<br>Ballad of a Thin Man (1965)<br>Visions of Johanna (1966)<br>I Want You (1966)<br>Just Like a Woman (1966)<br>Shes Your Lover Now (1966)<br> and 11 more ...', 'I Want to Hold Your Hand (1963)<br>She Loves You (1963)<br>Eight Days a Week (1964)<br>Norwegian Wood (This BirdHas Flown) (1965)<br>Another Girl (1965)<br>Youve Got to Hide Your Love Away (1965)<br>Drive My Car (1965)<br>Girl (1965)<br>Yesterday (1965)<br>Eleanor Rigby (1966)<br>Doctor Robert (1966)<br>Penny Lane (1967)<br>Shes Leaving Home (1967)<br> and 6 more ...', 'Letter to Hermione (1969)<br>Space Oddity (1969)<br>Life On Mars? (1971)<br>Kooks (1971)<br>Heroes (1977)<br>Repetition (1979)<br>Lets Dance (1983)<br>The Wedding Song (1993)<br>Never Get Old (2003)<br>', 'You Can Leave Your Hat On (1972)<br>Gods Song (Thats Why I LoveMankind) (1972)<br>Baltimore (1977)<br>Short People (1977)<br>Short People (1977)<br>I Love LA (1983)<br>Youve Got a Friend (1995)<br>A Few Words in Defense of Our Country (2008)<br>', 'Stupid Girl (1966)<br>Under My Thumb (1966)<br>Paint it Black (1966)<br>Ruby Tuesday (1967)<br>Lets Spend the NightTogether (1967)<br>Street Fighting Man (1968)<br>Honky Tonk Women (1969)<br>Moonlight Mile (1971)<br>', 'Everybody (1982)<br>Holiday (1983)<br>Crazy For You (1985)<br>Material Girl (1985)<br>Justify My Love (1990)<br>Beautiful Stranger (1999)<br>', 'Love and Marriage (1955)<br>Only the Lonely (1958)<br>It Was a Very Good Year (1965)<br>Fly Me to the Moon (1966)<br>Get Me to the Church On Time (1966)<br>New York, New York (1980)<br>', 'In My Room (1963)<br>Fun, Fun, Fun (1964)<br>God Only Knows (1966)<br>Good Vibrations (1966)<br>Wouldnt It Be Nice (1966)<br>A Day in the Life of a Tree (1971)<br>', 'I Heard it Through the Grapevine (1967)<br>Mercy Mercy Me (The Ecology) (1971)<br>Whats Going On? (1971)<br>Save the Children (1971)<br>Lets Get It On (1973)<br>Sexual Healing (1982)<br>', 'Little Red Corvette (1983)<br>1999 (1983)<br>When Doves Cry (1984)<br>Lets Go Crazy (1984)<br>If I Was Your Girlfriend (1987)<br>Sign o the Times (1987)<br>', 'You Really Got Me (1964)<br>Dead End Street (1966)<br>Waterloo Sunset (1967)<br>The Village Green Preservation Society (1968)<br>The Village Green Preservation Society (1968)<br>Lola (1970)<br>', 'Love Me Tender (1956)<br>Heartbreak Hotel (1956)<br>Cant Help Falling in Love (1961)<br>Suspicious Minds (1969)<br>In the Ghetto (1969)<br>Always on My Mind (1972)<br>', 'Martha (1973)<br>Rubys Arms (1980)<br>In the Neighbourhood (1983)<br>Johnsburg, Illinois (1983)<br>The Day After Tomorrow (2004)<br>', 'Sunday Bloody Sunday (1983)<br>With Or Without You (1987)<br>Exit (1987)<br>Desire (1988)<br>One (1992)<br>', 'White Riot (1977)<br>Stay Free (1978)<br>London Calling (1979)<br>Should I Stay Or Should I Go (1982)<br>Straight to Hell (1982)<br>', 'Folsom Prison Blues (1955)<br>I Walk the Line (1956)<br>I Still Miss Someone (1959)<br>Cocaine Blues (1968)<br>Im Free From the Chain Gang Now (2006)<br>', 'The Man With the Child in His Eyes (1978)<br>Army Dreamers (1980)<br>Hounds of Love (1985)<br>The Man I Love (1994)<br>Bertie (2005)<br>', 'Baby Love (1964)<br>Where Did Our Love Go? (1964)<br>You Cant Hurry Love (1966)<br>You Keep Me Hangin On (1966)<br>Stoned Love (1970)<br>', 'Please, Please, Please Let Me Get What I Want (1984)<br>Reel Around the Fountain (1984)<br>How Soon Is Now? (1985)<br>There is a Light That Never Goes Out (1986)<br>I Know Its Over (1986)<br>', 'Lets Stay Together (1971)<br>Tired of Being Alone (1971)<br>Love and Happiness (1972)<br>How Can You Mend a Broken Heart  (1972)<br>Lets Get Married (1974)<br>', 'Babies (1992)<br>Sheffield: Sex City (1992)<br>Do You Remember the FirstTime? (1994)<br>Common People (1995)<br>Sorted for Es and Wizz (1995)<br>', 'Sweet Little Sixteen (1958)<br>Johnny B Goode (1958)<br>Memphis, Tennessee (1959)<br>No Particular Place to Go (1964)<br>My Ding-a-Ling (1972)<br>', 'High Fidelity  (1980)<br>Jack of All Parades (1986)<br>I Hope Youre Happy Now (1986)<br>I Want You (1986)<br>I Want You (1986)<br>', 'Only Love Can Break YourHeart (1970)<br>Southern Man (1970)<br>A Man Needs a Maid (1972)<br>Like a Hurricane (1977)<br>Rockin in the Free World (1989)<br>', 'Living for the City (1973)<br>Dont You Worry Bout a Thing (1973)<br>You Havent Done Nothin (1974)<br>Master Blaster (Jammin) (1980)<br>', 'I Got a Woman (1954)<br>Lonely Avenue (1956)<br>Georgia on My Mind (1960)<br>Shake Your Tailfeather (1980)<br>', 'Streams of Whiskey (1984)<br>Dirty Old Town (1985)<br>Rainy Night in Soho (1985)<br>Streets of Sorrow/Birmingham Six (1988)<br>', 'La Vie En Rose (1977)<br>Pull Up to the Bumper (1981)<br>Nightclubbing (1981)<br>Williams Blood (Aeroplane remix) (2008)<br>', 'Aint No Sunshine (1971)<br>Grandmas Hands (1971)<br>Lean on Me (1972)<br>Use Me (1972)<br>', 'My Generation (1965)<br>My Generation (1965)<br>Substitute (1966)<br>Pictures of Lily (1967)<br>', 'Me and Julio Down By the Schoolyard (1972)<br>50 Ways to Leave Your Lover (1975)<br>The Late Great Johnny Ace (1983)<br>Graceland (1986)<br>', 'Domino (1956)<br>Crying (1961)<br>Blue Bayou (1963)<br>Oh, Pretty Woman (1964)<br>', 'I Bet You Look Good On theDancefloor (2005)<br>A Certain Romance (2006)<br>When The Sun Goes Down (2006)<br>Fluorescent Adolescent (2007)<br>', 'Born to Run (1975)<br>Born in the USA (1984)<br>No Surrender (1984)<br>Im On Fire (1985)<br>', 'Cant Stand Losing You (1978)<br>Roxanne (1978)<br>Message in a Bottle (1979)<br>Every Breath You Take (1983)<br>', 'Mandolin Wind (1971)<br>Maggie May (1971)<br>The Killing of Georgie (Part I and II) (1976)<br>Da Ya Think Im Sexy (1978)<br>', 'Goodbye (1996)<br>The Mountain (1999)<br>Lonelier Than This (2000)<br>John Walkers Blues (2002)<br>'],
        marker=Marker(
            color='#2ca02c'
        )
    )
])
layout = Layout(
    title="Number of songs listed in the Guardian's<br><em>Top 1,000 Songs to Hear Before You Die</em> per artist with 4 or more songs",
    font=Font(
        family='Georgia, serif',
        color='#635F5D'
    ),
    showlegend=False,
    autosize=False,
    width=700,
    height=500,
    xaxis={'tickangle': 45, 'ticklen': 8, 'tickwidth': 1.5, 'ticks': 'outside', 'title': ''},
    yaxis={'gridcolor': '#FFFFFF', 'ticklen': 8, 'tickwidth': 1.5, 'ticks': 'outside', 'title': 'Number of songs per artist'},
    annotations=Annotations([
        Annotation(
            x=0.95,
            y=0.95,
            xref='paper',
            yref='paper',
            text='<em>Open Data by Socrata</em><br>Hover over the bars to see list of songs',
            font=Font(
                size=14
            ),
            showarrow=False,
            borderpad=4,
            bgcolor='#FFFFFF'
        )
    ]),
    margin=Margin(
        b=140
    ),
    plot_bgcolor='#EFECEA'
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='bar-with-hover-text', auto_open=False)