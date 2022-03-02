import { useState } from "react";
import "../../styles.css";

const Opdracht12 = () => {

  const asyncReturnAfter3Seconds = async () => {
    const setTimeoutPromise = (timeout: number) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    await setTimeoutPromise(3000);
    return 'Done';
  };

  const getEmployeeOfTheDay = async () => {
    await asyncReturnAfter3Seconds()
    return 'Billy'
  }

  const tellEmployeeOfTheDayHeWon = async (employee: string) => {
    await asyncReturnAfter3Seconds()
    return `${employee}, jij bent de medewerker van de dag!`
  }

  return (
    <div className="App">
      <h1>Opdracht 12</h1>
      <div>Maak een state: "message", waarin wordt gemeld wie de medewerker van de dag is.</div>
      <div>Toon deze message hier onder in de pagina.</div>
      <div>Melding:</div>
      <div></div>
      <div>Je hebt de medewerker van de dag nodig om te kunnen vertellen wie de medewerker van de dag is.</div>
      <div>Er zit dus een volgordelijkheid in de aanroepen.</div>
      <div>Los dit op met een .then() oplossing en daarna ook nog met een extra async functie die de benodigde afhandeling doet.</div>
    </div>
  );
};

export default Opdracht12;
