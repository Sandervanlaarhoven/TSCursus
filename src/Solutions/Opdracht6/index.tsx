import "../../styles.css";

const Opdracht6 = () => {
  console.log("Hallo allemaal");
  const x = "Coole cursus";
  console.log(x);
  console.log({ x });
  console.log({
    name: 'Sander',
    age: 40
  });
  console.error("foutje");

  return (
    <div className="App">
      <h1>Opdracht 6</h1>
      <div>Om uit te zoeken waar een fout zit of gewoon als hulpmiddel bij het ontwikkelen kunnen we de console gebruiken.</div>
      <div>Dit kunnen we doen door de developer tools te openen in bv Chrome en te kijken in de console:</div>
      <div>{'Opties --> More Tools --> Developer tools'}</div>
      <br />
      <div>Vanuit de code kunnen we het commando console.log() gebruiken om daarin te schrijven.</div>
      <br />
      <div>Schrijf eerst "Hallo mensen" in de console door in deze component console.log("Hallo mensen") te zetten.</div>
      <br />
      <div>Speel daarna ook eens met het schrijven van variabelen naar de console door ze rechtstreeks er in te zetten: console.log(x).</div>
      <br />
      <div>Dan kun je proberen objecten weg te schrijven: console.log({'{ x : x }'})</div>
    </div>
  );
};

export default Opdracht6;
