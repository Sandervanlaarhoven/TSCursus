import "../../styles.css";

const Info1 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>Een variabele in Javascript kan een const of een let zijn.</div>
      <div>Een const kan niet worden aangepast nadat deze is gedefinieerd en bij een let kan dat wel.</div>
      <br />
      <div>const naam = "Sander"</div>
      <div>naam = "Pietje" (is dus niet mogelijk)</div>
      <br />
      <div>let naam = "Sander"</div>
      <div>naam = "Pietje" (mag wel)</div>
      <br />
      <div>Je mag een variabele maar 1 keer in de zelfde context van je code definieren. Vervolgens kun je deze overal binnen je context gebruiken.</div>
      <br />
      <div>Een component in React wordt getoond door een stuk HTML te genereren vanuit JSX.</div>
      <div>JSX is een soort combinatie tussen HTML en Javascript.</div >
      <div>Een javascript variabele kan in JSX worden gebruikt door er {'{ }'} omheen te zetten.</div >
      <div>
        <h2>Hallo, ik heet {'{naam}'}</h2>
      </div>
      <div>In een blok van {'{ }'} in JSX kun je ook javascript schrijven, niet alleen variabelen.</div>
      <div>Je zou bijvoorbeeld een berekening rechtstreeks kunnen uitvoeren in een {'{ }'}:</div>
      <br />
      <div>const a: number = 5</div>
      <div>const b: number = 6</div>
      <br />
      <div>JSX:</div>
      <div>{"<div>De berekening is {a} x {b} = {a * b}</div>"}</div>
      <br />
      <div>Dat zou het volgende resultaat geven in je scherm:</div>
      <div>De berekening is 5 x 6 = 30</div>
    </div>
  );
};

export default Info1;
