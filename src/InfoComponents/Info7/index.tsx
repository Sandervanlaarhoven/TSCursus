import "../../styles.css";

const Info7 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>In onze code hebben we regelmatig punten waar we zaken moeten vergelijken om tot een conclusie te komen.</div>
      <div>Er zijn vaak bijvoorbeeld stukken functionaliteit die alleen moeten worden uitgevoerd in een specifieke situatie.</div>
      <br />
      <div>Een voorbeeld kan bijvoorbeeld zijn:</div>
      <br />
      <div>Een persoon moet 18 zijn om bepaalde informatie te kunnen inzien.</div>
      <div>Onze persoon is dit keer:</div>
      <br />
      <div>const rutger: Person = {'{'}</div>
      <div>&nbsp;&nbsp;name: "Rutger",</div>
      <div>&nbsp;&nbsp;age: 17,</div>
      <div>&nbsp;&nbsp;weight: 70,</div>
      <div>&nbsp;&nbsp;height: 175</div>
      <div>{'}'}</div>
      <br />
      <div>let message</div>
      <div>if(rutger.age {">"} 17) {'{'}</div>
      <div>&nbsp;&nbsp;message = "Je bent oud genoeg, veel plezier!"</div>
      <div>{'} else {'}</div>
      <div>&nbsp;&nbsp;message = "Je bent nog veel te jong om alles te zien Rutger"</div>
      <div>{'}'}</div>
      <br />
      <div>Een alternatief hiervoor zou kunnen zijn:</div>
      <div>const message = rutger.age {">"} 17 ? "Je bent oud genoeg, veel plezier!" : "Je bent nog veel te jong om alles te zien Rutger"</div>
      <br />
      <div>{'<div>Hallo Rutger!</div>'}</div>
      <div>&nbsp;&nbsp;{'<div>'}</div>
      <div>&nbsp;&nbsp;{'<div>Dit mag je altijd zien.</div>'}</div>
      <div>&nbsp;&nbsp;{'{rutger.age > 17 && <div>En dit mag je alleen zien als je 18 jaar of ouder bent!</div>}'}</div>
      <div>&nbsp;&nbsp;{'{message && <div>{message}</div>}'}</div>
      <div>{'</div>'}</div>
      <br />
      <div>Als we de melding generiek zouden willen maken kunnen we `` gebruiken.</div>
      <div>Hiermee genereren we een string maar kunnen we tekst en variabelen of javascript door elkaar gebruiken door er bij script ${'{}'} omheen te zetten</div>
      <div>const message = `We hebben het over jou ${'{rutger.name}'}!`</div>
      <br />
      <div>Er zijn verschillende operations mogelijk in vergelijkingen:</div>
      <br />
      <div>=== is gelijk aan</div>
      <div>!== is niet gelijk aan (! geeft over het algemeen het tegenovergestelde aan.)</div>
      <div>{">"} is groter dan</div>
      <div>{">="} is groter dan of gelijk aan</div>
      <div>{"<"} is kleiner dan</div>
      <div>{"<="} is kleiner dan of gelijk aan</div>
      <br />
      <div>Al deze operators geven een boolean terug (true/false)</div>
      <div>In javascript kun je het bestaan ook uitvragen door de variabele te gebruiken in een if statement:</div>
      <div>if(rutger.age) {'{}'} of if(!rutger.age) {'{}'}</div>
      <div>Maar let op!</div>
      <div>Als je dit gebruikt moet je weten dat "" (lege string), 0, null en undefined allemaal false teruggeven. Omdat dit niet een echte boolean false is noemen ze dat falsy</div>
      <div>Voor een if statement werkt dat goed maar als je een echte boolean wilt vullen met het resultaat moet je er eerst een echte boolean van maken.</div>
      <div>Dit kun je doen door de negatieve operator ! en de dubbel negatieve operator !!</div>
      <div>const rutgersAgeIsNotEmpty = !!ruther.age</div>
    </div>
  );
};

export default Info7;
