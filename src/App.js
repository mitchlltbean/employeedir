import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={home} />
      </Router>
    </div>
  );
}

export default App;
