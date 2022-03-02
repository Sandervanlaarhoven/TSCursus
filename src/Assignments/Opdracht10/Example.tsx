import { useState } from "react";
import "../../styles.css";

const ExampleAss10 = () => {
	const [nameValue, setNameValue] = useState<string>('')
	const [gradeValue, setGradeValue] = useState<number | undefined>()

	const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setNameValue(value)
	}

	const onChangeGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		// De waarde van event.target.value is altijd van het type string.
		// We weten dat dit een nummer kan zijn dus moeten we deze omzetten naar een nummer
		const numericValue = parseInt(value, 10)
		if (numericValue !== NaN && numericValue >= 0 && numericValue <= 10) {
			setGradeValue(numericValue)
		}
	}

	// Gedefinieerd als functie die een naam als input verwacht
	const getDisplayComponent = (name: string, grade?: number) => <div>
		<br />
		<div>De naam uit de state is <b>{name || 'leeg'}</b> {(grade || grade === 0) && `en zijn rapportcijfer is ${grade}`}</div>
	</div>

	// Gedefinieerd als constante die gebruik maakt van de state uit de component
	const displayComponent = <div>
		<br />
		<div>De naam uit de state is <b>{nameValue || 'leeg'}</b> {(gradeValue || gradeValue === 0) && `en zijn rapportcijfer is ${gradeValue}`}</div>
	</div>

	return (
		<div className="App">
			<h1>Voorbeeld</h1>
			<div>We gaan hier een leerling opvoeren met zijn behaalde rapportcijfer.</div>
			<div>In dit voorbeeld zijn er twee invoervelden voorgedefinieerd (naam en lengte).</div>
			<br />
			<div>We gebruiken de useState hook van react om de waarde van beide velden op te slaan in de state als losse states.</div>
			<br />
			<div>
				<label htmlFor="Naam">Naam van de leerling</label>&nbsp;
				<input name="Naam" type="text" value={nameValue} onChange={onChangeName} />
			</div>
			<br />
			<div>
				<label htmlFor="Rapportcijfer">Rapportcijfer</label>&nbsp;
				<input name="Rapportcijfer" type="number" value={gradeValue || ''} onChange={onChangeGrade} />
			</div>
			<br />
			<div>Hieronder twee voorbeelden die allebei zullen werken:</div>
			{getDisplayComponent(nameValue, gradeValue)}
			{displayComponent}
		</div>
	);
};

export default ExampleAss10;
