import UseContext from "./useContext/UseContext";
import UseEffect from "./useEffect/UseEffect";
import UseRef from "./useRef/UseRef";
import UseState from "./useState/UseState";

function App() {
    return (
        <div className="App">
            <h1>useState</h1>
            <UseState />

            <br></br>

            <h1>useEffect</h1>
            <UseEffect />

            <br></br>

            <h1>useContext</h1>
            <UseContext />

            <h1>useRef</h1>
            <UseRef />
        </div>
    );
}

export default App;
