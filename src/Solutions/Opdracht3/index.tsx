import "../../styles.css";

const Opdracht3 = () => {
  interface Person {
    name: string;
    weight: number; // in kg
    height: number; // in cm
  }

  const pietje: Person = {
    name: "Pietje",
    weight: 81,
    height: 1.88
  };

  const bmi: number = Math.round((pietje.weight / (pietje.height * pietje.height)) * 100) / 100;
  return (
    <div className="App">
      <h1>Opdracht 3</h1>
      <div>Nu de zelfde opdracht als in opdracht 2 maar de persoon die je gebruikt is al gedefinieerd als Person.</div>
      <div>Gebruik een object van het type Person in je berekening.</div>
      <div>Probeer dit eerst met een interface en daarna met een type.</div>
      <br />
      <div>Opdracht 2 was:</div>
      <div>Bereken de BMI van de volgende persoon door alles in variabelen te zetten en vervolgens een variabele te maken waarin de berekening staat.</div>
      <div>De uitkomst moet in de pagina worden getoond.</div>
      <br />
      <div>Hoe kun je zelf je BMI berekenen: Je kunt je BMI zelf uitrekenen door je gewicht in kilo\'s te delen door het kwadraat van je lichaamslengte in meters. Als je bijvoorbeeld 65 kilo weegt en je bent 1,70 meter lang, dan bereken je je BMI als volgt: 65 kilo / (1,70 x 1,70 meter) = 22,5.</div>
      <br />
      <div>Pietje is 81 kg zwaar en heeft een lengte van 1,88 m</div>
      <br />
      <div>De BMI van Pietje is: {bmi}</div>
    </div>
  );
};

export default Opdracht3;
