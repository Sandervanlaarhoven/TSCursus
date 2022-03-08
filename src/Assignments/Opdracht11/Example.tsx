import "./styles.css";

const ExampleAss11 = () => {

	return (
		<div className="appContainer">
			<h1>Voorbeeld Flexbox</h1>
			<h2>Een rij items met gelijke breedtes</h2>
			<div className="rowContainer">
				<div className="item1"><h2>Hoi ik ben het element dat als eerste in de container staan binnen de HTML.</h2></div>
				<div className="item2"><h2>En ik het tweede element.</h2></div>
				<div className="item3"><h2>Nummer 3 is ook belangrijk om te tonen.</h2></div>
			</div>
			<h2>Een kolom met items</h2>
			<div className="columnContainer">
				<div className="item1"><h2>Hoi ik ben een element dat als eerste in de container staan binnen de HTML.</h2></div>
				<div className="item2"><h2>En ik het tweede element.</h2></div>
				<div className="item3"><h2>Nummer 3 is ook belangrijk om te tonen.</h2></div>
			</div>
			<h2>Een rij items met ongelijke breedtes</h2>
			<div className="rowContainerUnEven">
				<div className="item1"><h2>Hoi ik ben een element dat als eerste in de container staan binnen de HTML.</h2></div>
				<div className="item2"><h2>En ik het tweede element.</h2></div>
				<div className="item3"><h2>Nummer 3 is ook belangrijk om te tonen.</h2></div>
			</div>
		</div>
	);
};

export default ExampleAss11;
