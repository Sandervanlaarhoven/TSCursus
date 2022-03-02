import "../../styles.css";

const Opdracht7 = () => {
  return (
    <div className="App">
      <h1>Opdracht 7</h1>
      <div>Maak een lijst met personen (Person[]) die je team noemt.</div>
      <br />
      <div>Schrijf van elke persoon hieronder de naam en de leeftijd.</div>
      <br />
      <div>Om een lijst te maken als:</div>
      <div>
        <ul>
          <li>Element A</li>
          <li>Element B</li>
          <li>Element C</li>
        </ul>
      </div>
      <div>gebruik je in HTML(JSX):</div>
      <br />
      <div>{`<ul>`}</div>
      <div>&nbsp;&nbsp;{`<li>Element A</li>`}</div>
      <div>&nbsp;&nbsp;{`<li>Element B</li>`}</div>
      <div>&nbsp;&nbsp;{`<li>Element C</li>`}</div>
      <div>{`</ul>`}</div>
    </div>
  );
};

export default Opdracht7;
