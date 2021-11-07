import WeatherCard from "./Components/WeatherCard";
import ShowLocations from "./Components/ShowLocations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <h1>Welcome to Alan´s weather app</h1>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <ShowLocations />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
