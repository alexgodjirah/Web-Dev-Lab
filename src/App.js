import UseCallback from "./useCallback/UseCallback";
import UseContext from "./useContext/UseContext";
import UseEffect from "./useEffect/UseEffect";
import UseMemo from "./useMemo/UseMemo";
import Todos from "./useReducer/Todos";
import UserReducer from "./useReducer/UserReducer";
import UseRef from "./useRef/UseRef";
import UseState from "./useState/UseState";

function App() {
    return (
        <div className="App">
            {/* <h1>useState</h1>
            <UseState />

            <br></br>

            <h1>useEffect</h1>
            <UseEffect />

            <br></br>

            <h1>useContext</h1>
            <UseContext />

            <br></br>

            <h1>useRef</h1>
            <UseRef />

            <br></br>

            <h1>useMemo</h1>
            <UseMemo />

            <br></br>

            <h1>useCallback</h1>
            <UseCallback /> */}

            <br></br>

            <h1>useReducer</h1>
            <UserReducer />
            <Todos />
        </div>
    );
}

export default App;
