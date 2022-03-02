import "../../styles.css";

const Info8 = () => {

  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <h2>Tuple</h2>
      <div>Een soort Type waar we het nog niet over hebben gehad is een Tuple.</div>
      <br />
      <div>Een Tuple werkt als een array waarin de elementen een vaste plek en type hebben.</div>
      <br />
      <div>Je kunt bijvoorbeeld een string en een nummer als Tuple opslaan:</div>
      <br />
      <div>let vakKennis = [string, number] </div>
      <div>let vakKennis = ["Aardrijkskunde", 6] </div>
      <br />
      <br />
      <h2>React Hooks</h2>
      <div>Een toepassing voor een Tuple dient zich meteen aan in het volgende onderwerp: hooks.</div>
      <div>In react zijn een aantal hooks gedefinieerd. Dit zijn functies die in het framework beschikbaar zijn gemaakt en die men kan gebruiken in de code.</div>
      <div>Een hook die we vaak gebruiken is de useState hook.</div>
      <br />
      <div>{'const [counter, setCounter] = useState<number>(0)'}</div>
      <br />
      <div>Hiermee kunnen we binnen de draaiende component een stukje "state" opslaan (hier counter) die we met de set-functie (hier setCounter) kunnen aanpassen.</div>
      <div>Het Type van de state is hier number en de startwaarde is "0"</div>
      <br />
      <div>Als de state veranderd zal de component opnieuw renderen.</div>
      <div>Je kunt de state dus gebruiken voor berekeningen bijvoorbeeld waarvan de resultaten worden getoond in de component. Of de state kan worden gevuld met het resultaat van een asynchrone functie (bijvoorbeeld ophalen van data uit de database).</div>
    </div>
  );
};

export default Info8;
