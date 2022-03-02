import "../../styles.css";

const Info3 = () => {
  return (
    <div className="App">
      <h1>Algemene informatie</h1>
      <div>
        <h1>Objecten</h1>
      </div>
      <div>Tot nu toe hebben we het vooral gehad over primives (string, number, boolean etc.).</div>
      <div>Met alleen primitives kom je er niet in javascript.</div>
      <div>Vaak wordt een variabele gevuld met een verzameling eigenschappen in de vorm van een object.</div>
      <div>Objecten worden vaak opgebouwd uit primitives of zelfs weer andere objecten</div>
      <div>Laten we onze persoon als voorbeeld nemen:</div>
      <br />
      <div>const name: string = "Pietje"</div>
      <div>const age: number = 34</div>
      <div>const height: number = 188</div>
      <div>const weight: number = 84</div>
      <br />
      <div>Deze eigenschappen zeggen allemaal iets over de persoon Pietje</div>
      <div>We kunnen daarom deze eigenschappen opnemen in een object:</div>
      <br />
      <div>const pietje = {'{'}</div>
      <div>&nbsp;&nbsp;name: "Pietje",</div>
      <div>&nbsp;&nbsp;age: 34,</div>
      <div>&nbsp;&nbsp;weight: 84,</div>
      <div>&nbsp;&nbsp;height: 188</div>
      <div>{'}'}</div>
      <br />
      <div>Bovenstaand werkt prima in javascript maar in Typescript wordt verwacht dat je pietje een type toekent.</div>
      <div>Omdat een persoon een type is dat we nog niet hebben moeten we deze eerst maken.</div>
      <br />
      <div>Een type kunnen we op 2 manieren definiëren. Er kan een "interface" worden gemaakt of een "type".</div>
      <div>Het verschil tussen type en interface is niet zo groot en komt alleen aan het licht bij echte "advanced" functionaliteit.</div>
      <div>Voor de mensen die dit toch nu al willen weten staat een goede uitleg op <a href="https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c">Interface vs Type alias in TypeScript 2.7</a></div>
      <br />
      <div>Voor nu leren we dus even op beide manieren een type te definiëren:</div>
      <br />
      <div>interface Person {'{'}</div>
      <div>&nbsp;&nbsp;name: string;</div>
      <div>&nbsp;&nbsp;age: number;</div>
      <div>&nbsp;&nbsp;weight: number;</div>
      <div>&nbsp;&nbsp;height: number;</div>
      <div>{'}'}</div>
      <br />
      <div>type Person = {'{'}</div>
      <div>&nbsp;&nbsp;name: string,</div>
      <div>&nbsp;&nbsp;age: number,</div>
      <div>&nbsp;&nbsp;weight: number,</div>
      <div>&nbsp;&nbsp;height: number</div>
      <div>{'}'}</div>
      <br />
      <div>In onze declararatie van pietje moeten we dus aangeven dat pietje een "Person" is:</div>
      <br />
      <div>const pietje: Person = {'{'}</div>
      <div>&nbsp;&nbsp;name: "Pietje",</div>
      <div>&nbsp;&nbsp;age: 34,</div>
      <div>&nbsp;&nbsp;weight: 84,</div>
      <div>&nbsp;&nbsp;height: 188</div>
      <div>{'}'}</div>
      <br />
      <div>Een manier om niet rekening te hoeven houden met type is om "any" te gebruiken als type.</div>
      <div>Typescript zal dan elke vulling goedkeuren en daarmee zullen alle veiligheden en voordelen van Typescript worden tenietgedaan.</div>
      <div>Gebruik "any" dus alleen als het echt niet anders kan.</div>
      <br />
      <div>const pietje: any = {'{'}</div>
      <div>&nbsp;&nbsp;name: "Pietje",</div>
      <div>&nbsp;&nbsp;age: 34,</div>
      <div>&nbsp;&nbsp;weight: 84,</div>
      <div>&nbsp;&nbsp;height: 188</div>
      <div>{'}'}</div>
      <br />
      <div>Bij het declareren van een type of een interface kan een ? achter een property worden gezet. Dit maakt het een optionele property.</div>
      <div>Hiermee mag de property dus bij het defineren worden weggelaten.</div>
      <div>Dit kan handig zijn als de property pas later bekend wordt bijvoorbeeld of dat deze niet altijd van toepassing is.</div>
      <br />
      <div>interface Person {'{'}</div>
      <div>&nbsp;&nbsp;name: string;</div>
      <div>&nbsp;&nbsp;age: number;</div>
      <div>&nbsp;&nbsp;weight: number;</div>
      <div>&nbsp;&nbsp;height: number;</div>
      <div>&nbsp;&nbsp;favoriteSong?: string;</div>
      <div>{'}'}</div>
    </div>
  );
};

export default Info3;
