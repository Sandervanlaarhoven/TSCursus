import "../../styles.css";
import { Person } from "../../types";

const Opdracht9 = () => {
  const sander: Person = {
    name: "Sander",
    height: 1.88,
    weight: 79
  };

  let weightText = "";
  switch (sander.weight) {
    case undefined: {
      weightText = "onbekend"
      break
    }
    case 74: {
      weightText = "lichter";
      break;
    }
    case 73: {
      weightText = "nog lichter";
      break;
    }
    case 72: {
      weightText = "mini";
      break;
    }
    default: {
      if (sander.weight && sander.weight > 75) {
        weightText = "zwaar";
      } else if (sander.weight && sander.weight < 72) {
        weightText = "Ultra mini";
      }
      weightText = "normaal";
      break;
    }
  }
  
  const createText = (person: Person) => {
    return `${person.name} ging wandelen in het bos, omdat hij ${person.weight} kg woog viel hij door een hoop takken in een kuil.`;
  };
  return (
    <div className="App">
      <h1>Opdracht 9</h1>
      <div>Maak een nieuwe persoon.</div>
      <br />
      <div>Maak een functie waarin je een tekst opstelt afhankelijk van de gegevens van de persoon.</div>
      <br />
      <div>Toon vervolgens deze tekst onder aan de pagina.</div>
      <br />
      <div>Stukje over onze persoon:</div>
      <br />
      <div>{createText(sander)}</div>
      <br />
      <div>tekst: {weightText}</div>
    </div>
  );
};

export default Opdracht9;
