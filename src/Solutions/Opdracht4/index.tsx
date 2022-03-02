import "../../styles.css";
import { Person } from "../../types";

const Opdracht4 = () => {
  const pietje: Person = {
    name: 'Pietje',
    weight: 81,
    height: 188
  }

  console.log({ pietje })
  console.log(pietje.name);
  return (
    <div className="App">
      <h1>Opdracht 4</h1>
      <div>In opdracht 3 hebben we de interface voor "Person" in de zelfde component geschreven.</div>
      <div>Vaak worden zaken zoals een type in meerdere onderdelen gebruikt en zou je deze dus willen hergebruiken.</div>
      <br />
      <div>Om dat te kunnen doen kunnen we hetgeen we willen hergebruiken in een ander bestand zetten en vanuit daar exporteren.</div>
      <div>We kunnen het dan vanuit dit bestand bijvoorbeeld weer importeren.</div>
      <br />
      <div>Je kunt een bestand importeren door boven aan het Typescript-bestand de volgende syntax te gebruiken:</div>
      <br />
      <div>import ... from "..pad/bestandsnaam"</div>
      <br />
      <div>De interface "Person" is al aangemaakt in het types.tsx bestand.</div>
      <div>Vervang de lokaal gedefiniëerde interface "Person" door de interface uit het types.tsx bestand.</div>
    </div>
  );
};

export default Opdracht4;
