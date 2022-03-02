import "../../styles.css";

const Info6 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>Om een stukje code herbruikbaar te maken of gewoon om de leesbaarheid van je code te vergroten kunnen functies worden ingezet.</div>
      <br />
      <div>Een functie kan als een variabele worden gedefinieerd:</div>
      <div>const myFunction = (parameters) {'=> { code voor wat de functie moet doen }'}</div>
      <div>De functie kan dan worden aangeroepen vanaf alle plekken binnen de zelfde context en nadat de functie is gedefinieerd.</div>
      <div>Deze functie kun je aanroepen door myFunction(parameters)</div>
      <br />
      <div>Een voorbeeld:</div>
      <br />
      <div>const calculateSum = (a, b) {'=> { return a + b }'} </div>
      <div>const a = 6</div>
      <div>const b = 8</div>
      <div>const sumAB = calculateSum(a, b)</div>
    </div>
  );
};

export default Info6;
