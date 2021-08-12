import "./App.css";
import Mensaje from "./Mensaje";
const Description = () => {
	return <strong>Esta es la app del curso fullstack bootcamp</strong>;
};
const App = () => {
	const a = 2;
	const b = 3;

	return (
		<div className="App">
			<Mensaje color="red" message="Estamos trabajando en un curso de React" />
			<Mensaje color="green" message="Hola desde un componente" />
			<Description />
			<div>
				<p>El resultado es:</p>
				{a + b}
			</div>
		</div>
	);
};

export default App;
