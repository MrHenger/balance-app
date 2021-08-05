import Header from "./Components/Header";
import ConsolidatedPosition from "./Components/ConsolidatedPosition";

function App() {
	return (
		<div className="App">
			<Header/>
			<div className="row justify-content-center mt-5">
				<div className="col-8 ">
					<ConsolidatedPosition/>
				</div>
			</div>
		</div>
	);
}

export default App;
