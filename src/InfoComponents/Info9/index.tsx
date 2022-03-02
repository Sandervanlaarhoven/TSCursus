import "../../styles.css";

const Info9 = () => {
  const redTextClass: React.CSSProperties = {
    color: 'red'
  }

  return (
    <div className="App" style={{}}>
      <h1>Algemene informatie</h1>
      <div>Natuurlijk is het werken met HTML beperkt zonder dat er styling wordt toegepast.</div>
      <div>Dit kan op verschillende manieren.</div>
      <div>Er zijn libraries die het werken met styles vergemakkelijken, maar ook zonder kan een (React)component prima worden gestyled.</div>
      <div>Styling gaat veel verder dat een stukje <span style={{ color: 'red' }}>rode tekst</span> of een <span style={{ color: 'blue' }}>blauwe</span> knop.</div>
      <div>De hele opmaak, weergave en indeling van je component kan met styling worden gevormd.</div>
      <br />
      <div>Waar vroeger veel werd gewerkt met tabellen voor opmaak is dat tegenwoordig voor alles behalve dataweergave not done.</div>
      <div>Een veel gebruikte manier om de verschillende elementen in je applicatie een plekje te geven is flex-box.</div>
      <div>Een handige cheat sheet daarvoor is: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a></div>
      <br />
      <div>In onze JSX kunnen we styling toevoegen door binnen de elementen de property "style" te gebruiken.</div>
      <div>Een voorbeeld van inline styles toevoegen is:</div>
      <br />
      <div style={{ color: 'red' }}>Dit is een rode tekst</div>
      <div>{`<div style={{ color: 'red' }}>Dit is een rode tekst</div>`}</div>
      <br />
      <div>Hetzelfde effect kan worden bereikt door een classe te definieren in de component (of in een andere file via import/export):</div>
      <br />
      <div>{`const redTextClass: React.CSSProperties = {
              color: 'red'
            }`}
      </div>
      <br />
      <div style={redTextClass}>Dit is een rode tekst</div>
      <div>{`<div style={redTextClass}>Dit is een rode tekst</div>`}</div>
      <br />
      <div>Een derde manier is via een CSS-bestand.</div>
      <div>De CSS classes worden is een .css bestand opgeslagen en geïmporteerd: import "../../styles.css"; </div>
      <div>Vervolgens kunnen de classes worden toegekend aan elementen via de property "className".</div>
      <div>Een voorbeeld van toevoegen van styling door het toewijzen van een class is:</div>
      <br />
      <div className="redTextClass">Dit is een rode tekst</div>
      <div>{`<div className="redTextClass">Dit is een rode tekst</div>`}</div>
      <br />
      <div>In de CSS file staat de class gedefineerd:</div>
      <br />
      <div>{`.redTextClass { color: red; }`}</div>
      <br />
      <div>De keuze voor de beste methode is afhankelijk van de mate van hergebruik.</div>
    </div>
  );
};

export default Info9;
