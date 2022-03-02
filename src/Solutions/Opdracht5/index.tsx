import "../../styles.css";
import { HairColor, Person } from "../../types";

const Opdracht5 = () => {
  const pim: Person = {
    name: "Pim",
    weight: 78,
    height: 182,
    hairColor: HairColor.Grey
  };
  return (
    <div className="App">
      <h1>Opdracht 5</h1>
      <div>Bereid de interface Person uit met haircolor.</div>
      <div>Gebruik hiervoor een enumeratie voor de haarkleuren.</div>
      <div>Laat hier onder in de pagina de gegevens van je nieuwe persoon zien.</div>
      <br />
      <div>
        {pim.name} heeft {pim.hairColor} haar.
      </div>
    </div>
  );
};

export default Opdracht5;
