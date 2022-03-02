import { useState } from "react";
import "../../styles.css";

const Example2Ass10 = () => {
	interface Student {
		name?: string;
		grade?: number;
	}

	const [student, setStudent] = useState<Student>({})

	const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		// We moeten hier het hele student object meegeven als nieuwe waarde van de student-State
		const newStudent: Student = {
			...student, // dit heet een "spread" en kopieert alle eigenschappen van het object in het nieuwe object
			name: value
		}
		setStudent(newStudent)
	}

	const onChangeGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		// De waarde van event.target.value is altijd van het type string.
		// We weten dat dit een nummer kan zijn dus moeten we deze omzetten naar een nummer
		const numericValue = parseInt(value, 10)
		if (numericValue !== NaN && numericValue >= 0 && numericValue <= 10) {
			const newStudent: Student = {
				...student,
				grade: numericValue
			}
			setStudent(newStudent)
		}
	}

	// Gedefinieerd als functie die een naam als input verwacht
	const getDisplayComponent = (name: string | undefined, grade?: number | undefined) => <div>
		<br />
		<div>De naam uit de state is <b>{name || 'leeg'}</b> {(grade || grade === 0) && `en zijn rapportcijfer is ${grade}`}</div>
	</div>

	// Gedefinieerd als constante die gebruik maakt van de state uit de component
	const displayComponent = <div>
		<br />
		<div>De naam uit de state is <b>{student.name || 'leeg'}</b> {(student.grade || student.grade === 0) && `en zijn rapportcijfer is ${student.grade}`}</div>
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
				<input name="Naam" type="text" value={student.name || ''} onChange={onChangeName} />
			</div>
			<br />
			<div>
				<label htmlFor="Rapportcijfer">Rapportcijfer</label>&nbsp;
				<input name="Rapportcijfer" type="number" value={student.grade || ''} onChange={onChangeGrade} />
			</div>
			<br />
			<div>Hieronder twee voorbeelden die allebei zullen werken:</div>
			{getDisplayComponent(student.name, student.grade)}
			{displayComponent}
		</div>
	);
};

export default Example2Ass10;
