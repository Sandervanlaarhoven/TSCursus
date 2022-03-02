import "../../styles.css";
import { Person } from "../../types";

const Opdracht8 = () => {
  const personList: Person[] = [
    {
      name: "Sander",
      age: 40,
      weight: 70,
      height: 1.88
    },
    {
      name: "Chris",
      age: 35,
      weight: 70,
      height: 1.88
    },
    {
      name: "Menko",
      age: 50,
      weight: 70,
      height: 1.88
    }
  ];
  const calculateBMI = (person: Person) => {
    if (person.weight && person.height) {
      return (
        Math.round((person.weight / (person.height * person.height)) * 100) /
        100
      );
    }
  };
  return (
    <div className="App">
      <h1>Opdracht 8</h1>
      <div>Maak een functie voor het berekenen van de BMI van een persoon.</div>
      <br />
      <div>Maak een lijst met personen (Person[]) die je team noemt.</div>
      <br />
      <div>Schrijf van elke persoon hieronder de naam en de (met de functie) berekende BMI.</div>
      {personList.map((person) => (
        <div>
          {person.name} ({calculateBMI(person)})
        </div>
      ))}
    </div>
  );
};

export default Opdracht8;
