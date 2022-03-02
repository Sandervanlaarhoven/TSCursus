import { useState } from "react";
import "../../styles.css";

const Opdracht10 = () => {
  interface Person {
    name?: string;
    age?: number;
  }

  const [person, setPerson] = useState<Person>({});

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // We moeten hier het hele person object meegeven als nieuwe waarde van de person-State
    const newPerson: Person = {
      ...person, // dit heet een "spread" en kopieert alle eigenschappen van het object in het nieuwe object
      name: value
    };
    setPerson(newPerson);
  };

  const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // De waarde van event.target.value is altijd van het type string.
    // We weten dat dit een nummer kan zijn dus moeten we deze omzetten naar een nummer
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue >= 0) {
      const newPerson: Person = {
        ...person,
        age: numericValue
      };
      setPerson(newPerson);
    }
  };

  // Gedefinieerd als constante die gebruik maakt van de state uit de component
  const displayComponent = (
    <div>
      <br />
      <div>
        De naam <b>{person.name || "leeg"}</b>{" "}
        {(person.age || person.age === 0) &&
          `en zijn leeftijd is ${person.age}`}
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>Opdracht 10</h1>
      <div>
        Gebruik voor deze opdracht al je eerdere kennis en het voorbeeld
        (Example.tsx)
      </div>
      <br />
      <div>
        In deze component moeten de Naam en de Leeftijd van een persoon kunnen
        worden aangepast.
      </div>
      <div>Gebruik de useState hook om de persoon op te slaan in de state.</div>
      <div>
        Maak functies waarmee de naam en de leeftijd van de persoon kunnen
        worden gewijzigd met de bijbehorende invoervelden.
      </div>
      <br />
      <div>
        <label htmlFor="Naam">Naam van de leerling</label>&nbsp;
        <input
          name="Naam"
          type="text"
          value={person.name || ""}
          onChange={onChangeName}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Leeftijd">Rapportcijfer</label>&nbsp;
        <input
          name="Leeftijd"
          type="number"
          value={person.age || person.age === 0 ? person.age : ""}
          onChange={onChangeAge}
        />
      </div>
      <br />
      <br />
      <div>Geef de gegevens van de persoon hieronder weer:</div>
      <div>{displayComponent}</div>
    </div>
  );
};

export default Opdracht10;
