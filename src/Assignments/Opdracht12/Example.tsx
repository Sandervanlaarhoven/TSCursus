import { useState } from "react";
import "../../styles.css";

const ExampleAss12 = () => {
	const [firstTime, setFirstTime] = useState<boolean>(true)
	const [complimentToMenko, setComplimentToMenko] = useState<string | undefined>()
	const [complimentToChris, setComplimentToChris] = useState<string | undefined>()
	const [complimentToIdder, setComplimentToIdder] = useState<string | undefined>()
	const [complimentToJoost, setComplimentToJoost] = useState<string | undefined>()
	const [totalLengthNamesOfTeamMembers, setTotalLengthNamesOfTeamMembers] = useState<number | null>(null)

	const compliment = (name: string, compliment: string) => {
		const message = `Hoi ${name}, ${compliment}`
		return message
  	}

	const complimentToAlice = compliment('Alice', 'jij bent lekker bezig vandaag!')

	const asyncReturnAfter3Seconds = async () => {
		const setTimeoutPromise = (timeout: number) => {
			return new Promise((resolve) => setTimeout(resolve, timeout));
		};
		await setTimeoutPromise(3000);
		return 'Done';
	};

	const complimentAsync = async (name: string, compliment: string) => {
		await asyncReturnAfter3Seconds()
		const message = `Hoi ${name}, ${compliment}`
		return message
	}

	const returnLengthOfName = async (name: string) => {
		await asyncReturnAfter3Seconds()
		return name.length 
	}

	const calculateTotalLengthNamesOfTeamMembers = async (names: string[]) => {
		const returnLengthOfNamePromises: Promise<number>[] = []

		names.forEach((name) => {
			returnLengthOfNamePromises.push(returnLengthOfName(name))
		})
		const resultArray = await Promise.all(returnLengthOfNamePromises)

		let lengthOfNames = 0
		resultArray.forEach((lengthNumber) => {
			lengthOfNames += lengthNumber
		})
		return lengthOfNames
	}

	if (firstTime) {
		setFirstTime(false)

		complimentAsync('Menko', 'en jij ook hoor!').then((compliment) => {
			setComplimentToMenko(compliment)
		})

		complimentAsync('Chris', 'en jij ook hoor!').then((compliment) => {
			setComplimentToChris(compliment)
		})

		complimentAsync('Idder', 'en jij ook hoor!').then((compliment) => {
			setComplimentToIdder(compliment)

			complimentAsync('Joost', 'en jij ook hoor!').then((compliment) => {
				setComplimentToJoost(compliment)
			})
		})

		calculateTotalLengthNamesOfTeamMembers(['Alice', 'Menko', 'Chris', 'Idder', 'Joost']).then((totalLength) => {
			setTotalLengthNamesOfTeamMembers(totalLength)
		})
	}

	return (
		<div className="App">
			<h1>Voorbeeld</h1>
			<div>{complimentToAlice}</div>
			<div style={{
				marginTop: 30
			}}>{complimentToMenko || '...'}</div>
			<div style={{
				marginTop: 30
			}}>{complimentToChris || '...'}</div>
			<div style={{
				marginTop: 30
			}}>{complimentToIdder || '...'}</div>
			<div style={{
				marginTop: 30
			}}>{complimentToJoost || '...'}</div>
			<div style={{
				marginTop: 30
			}}>De hoeveelheid letters ind e namen van het team is: {totalLengthNamesOfTeamMembers || '...'}</div>
		</div>
	);
};

export default ExampleAss12;
