import React from "react";

const Tittle = ({ course }) => <h1>{course}</h1>;
const Excercise = ({ part, excercise }) => (
	<p>
		{part} {excercise}{" "}
	</p>
);
const Resume = ({ excercises }) => {
	var sum = 0;
	excercises.forEach((element) => {
		sum += element;
	});
	return <p>Number of excersises {sum}</p>;
};
const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Tittle course={course}></Tittle>
			<Excercise part={part1} excercise={exercises1}></Excercise>
			<Excercise part={part2} excercise={exercises2}></Excercise>
			<Excercise part={part3} excercise={exercises3}></Excercise>

			<Resume excercises={[exercises1, exercises2, exercises3]}></Resume>
		</div>
	);
};

export default App;
