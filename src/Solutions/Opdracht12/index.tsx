import { useState } from "react";
import "../../styles.css";

const Opdracht12 = () => {
  const [message, setMessage] = useState<string>();
  const [firstTime, setFirstTime] = useState<boolean>(true);

  const asyncReturnAfter3Seconds = async () => {
    const setTimeoutPromise = (timeout: number) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    await setTimeoutPromise(3000);
    return "Done";
  };

  const getEmployeeOfTheDay = async () => {
    await asyncReturnAfter3Seconds();
    return "Billy";
  };

  const tellEmployeeOfTheDayHeWon = async (employee: string) => {
    await asyncReturnAfter3Seconds();
    return `${employee}, jij bent de medewerker van de dag!`;
  };

  const getEmployeeOfTheDayMessage = async () => {
    const employee = await getEmployeeOfTheDay();
    return tellEmployeeOfTheDayHeWon(employee);
  };

  if (firstTime) {
    setFirstTime(false);
    getEmployeeOfTheDayMessage().then((messageText) => {
      setMessage(messageText);
    });
  }

  return (
    <div className="App">
      <h1>Opdracht 12</h1>
      <div>
        Maak een state: "message", waarin wordt gemeld wie de medewerker van de
        dag is.
      </div>
      <div>Toon deze message hier onder in de pagina.</div>
      <br />
      <br />
      {message ? (
        <div className="blinking">
          <h1>{message}</h1>
        </div>
      ) : (
        <div>
          <h1>...</h1>
        </div>
      )}
      <br />
      <br />
      <div>
        Je hebt de medewerker van de dag nodig om te kunnen vertellen wie de
        medewerker van de dag is.
      </div>
      <div>Er zit dus een volgordelijkheid in de aanroepen.</div>
      <div>
        Los dit op met een .then() oplossing en daarna ook nog met een extra
        async functie die de benodigde afhandeling doet.
      </div>
    </div>
  );
};

export default Opdracht12;
