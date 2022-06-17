import React from 'react';
import QuoteCard from './QuoteCard';

function App() {
  const [quoteList, setQuoteList] = React.useState([
    {
      quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: 'Lisa Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote:
        'I live in a single room above a bowling alley...and below another bowling alley.',
      character: 'Frank Grimes',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
      characterDirection: 'Left',
      simpsonFamily: Boolean,
    },
    {
      quote: 'Ahh! Sweet liquor eases the pain.',
      character: 'Troy McClure',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote:
        'Shoplifting is a victimless crime, like punching someone in the dark.',
      character: 'Nelson Muntz',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
      characterDirection: 'Left',
      simpsonFamily: Boolean,
    },
    {
      quote:
        "You're turning me into a criminal when all I want to be is a petty thug.",
      character: 'Bart Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote: "But my mom says I'm cool.",
      character: 'Milhouse Van Houten',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote:
        'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
      character: 'Homer Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote: "Nothing you say can upset us. We're the MTV generation.",
      character: 'Bart Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote: 'Oh, so they have Internet on computers now!',
      character: 'Homer Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    },
    {
      quote: 'Ahh! Sweet liquor eases the pain.',
      character: 'Troy McClure',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
      characterDirection: 'Right',
      simpsonFamily: Boolean,
    }
  ]);
function simpson(e) {
if (e.character.includes('Simpson')) {
  e.simpsonFamily = true;
} else { 
  e.simpsonFamily = false;
}
}
function onSimpson(e) {
  if (e.simpsonFamily === true) {
    console.log('hi'),
    <QuoteCard {...e} />;
  } else {
    null
  }
}
quoteList.map((quote) => (
  simpson(quote)
))

  return (
    <div>
      <button onClick={() => quoteList.map((quote) =>(
        onSimpson(quote)
      ))}>afficher que les simpsons</button>
      {quoteList.map((quote, index) => (
        <QuoteCard key={index} {...quote} />
      ))}
    </div>
  );
}

export default App;
