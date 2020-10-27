import { Grid } from "@material-ui/core";
import "./App.css";
import FilterBar from "./components/FilterBar/FilterBar";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={3}>
						<FilterBar />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
