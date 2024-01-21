import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./states/reducers";

function App() {
  const currentState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="logo-container">
          <img
            src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png"
            alt="Logo"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </div>
        <p>Count: {currentState}</p>
        <button
          className="increment-btn"
          onClick={() => dispatch(increment(10))}
        >
          Increment
        </button>
        <button
          className="decrement-btn"
          onClick={() => dispatch(decrement(5))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
