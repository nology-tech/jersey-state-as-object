import logo from "./logo.svg";
import "./App.scss";
import Progress from "./containers/Progress/Progress";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">State as an object</h1>
      <Progress />
    </div>
  );
};

export default App;
