import "../../styles.css";

const Info2 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>
        <h1>Type safety</h1>
      </div>
      <div>Variabelen in javascript hebben een type en in Typescript moet je de types expliciet definieren en hanteren.</div>
      <div>Typescript is type-safe terwijl javascript dat van nature niet is:</div>
      <br/>
      <div>In javascript kun je het volgende gewoon zonder problemen uitvoeren:</div>
      <br />
      <div>let x = 4</div>
      <div>x = "hallo ik ben een programmeur"</div>
      <br />
      <div>In Typescript krijg je een error als je een variabele definieert van een bepaald type en vervolgens daar een waarde van een ander type aan toekent:</div>
      <br />
      <div>let x: number = 4 (of let x = 4 wat maakt dat typescript zelf :number afleidt aan de waarde)</div>
      <div>x = "hallo ik ben een programmeur" geeft een foutmelding</div>
      <br />
      <div>
        <h1>Types in javascript</h1>
      </div>
      <div>Er bestaan een aantal basistypes in javascript. Hiernaast kun je zelf ook nieuwe types definieren.</div>
      <br />
      <div>string : "Hallo"</div>
      <div>number : 5 , BigInt voor hele grote nummers maar die mag je voorlopig even vergeten</div>
      <div>boolean : true / false</div>
      <div>null : waarde is expliciet niet gevuld. Bestaat wel maar heeft geen type of waarde</div>
      <div>undefined : geeft aan dat een variabele niet is toegewezen aan een waarde</div>
      <div>symbol : een unieke waarde te creeren door de functie Symbol te gebruiken. Mag je voor nu vergeten.</div>
    </div>
  );
};

export default Info2;
