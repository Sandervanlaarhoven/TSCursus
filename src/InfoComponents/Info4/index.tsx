import "../../styles.css";

const Info4 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>Soms heb je een lijstje nodig van voorgedefinieerde opties. De waarde van een variabele kan dan 1 van die opties zijn.</div>
      <br />
      <div>Dit kan het gemakkelijkst worden getoond met een voorbeeldje:</div>
      <br />
      <div>De Nederlande vlag heeft 3 kleuren (rood, wit en blauw)</div>
      <div>Als er een vraag is waarin de favoriete kleur uit de Nederlandse vlag wordt gevraagd moet dat dus 1 van deze 3 kleuren zijn.</div>
      <div>Er kan dan een enumeratie worden gebruikt in Typescript:</div>
      <br />
      <div>enum DutchFlagColor {'{'}</div>
      <div>&nbsp;&nbsp;Red = "Rood",</div>
      <div>&nbsp;&nbsp;White = "Wit",</div>
      <div>&nbsp;&nbsp;Blue = "Blauw",</div>
      <div>{'}'}</div>
      <br />
      <div>const favoriteDutchFlagColor: DutchFlagColor = DutchFlagColor.Red</div>
      <br />
      <div>De waarde van de enumereatie kan zoals hier boven te zien is worden geschreven als DutchFlagColor.Red.</div>
      <div>Gebruik altijd de verwijzing naar de enumeratie in de code en niet de waarde "Rood"</div>
      <div>Stel dat ooit de waarde van DutchFlagColor.Red wordt aangepast naar "Rode kleur" bijvoorbeeld dan klopt de code nog steeds.</div>
      <div>Het is dan alleen nodig om de waarde aan te passen in de enumeratie.</div>
    </div>
  );
};

export default Info4;
