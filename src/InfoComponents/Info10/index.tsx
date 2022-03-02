import "../../styles.css";

const Info10 = () => {

  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>Javascript is van zichzelf sequentieel, wat betekent dat alles op de volgorde wordt uitgevoerd waarin het is geprogrammeerd.</div>
      <div>Meestal is dit handig omdat je daarmee een voorspelbare volgorde hebt in afhandeling en dus uit kan gaan dat iets reeds bestaat als het eerder in de code staat.</div>
      <div>In sommige gevallen is het prettig als iets op de achtergrond wordt uitgevoerd terwijl de rest van de code verdergaat.</div>
      <div>Het ophalen van data vanuit de server of een service is daar een voorbeeld van.</div>
      <div>Een voorbeeld hiervan is gemaakt in Example.tsx van opdracht 12.</div>
      <div>In een async functie kunnen we async await gebruiken:</div>
      <div>Een async functie returned een Promise en geen waarde. We kunnen wachten op de waarde door een wait te gebruiken.</div>
      <div>Meerdere aanroepen van async functies kunnen door gebruik van .then() statements en vervolgens een nieuwe aanroep nog steeds erg lang duren.</div>
      <div>Een kracht van async functies is dan ook juist om parallel calls uit te voeren.</div>
      <div>Dit is een lastig concept om te snappen maar erg krachtig omdat het de performance van je applicatie vele malen kan vergroten.</div>
      <div>Een voorbeeld hiervan is ook gemaakt in Example.tsx van opdracht 12.</div>
    </div>
  );
};

export default Info10;
