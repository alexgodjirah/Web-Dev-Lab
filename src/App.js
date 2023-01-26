import CustomHooksComponent from "./CustomHooks/CustomHooksComponent";
import UseCallback from "./useCallback/UseCallback";
import UseContext from "./useContext/UseContext";
import UseDeferredValue from "./useDeferredValue/UseDeferredValue";
import UseEffect from "./useEffect/UseEffect";
import UseId from "./useId/UseId";
import UseImperativeHandle from "./useImperativeHandle/UseImperativeHandle";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
import UseMemo from "./useMemo/UseMemo";
import Todos from "./useReducer/Todos";
import UserReducer from "./useReducer/UserReducer";
import UseRef from "./useRef/UseRef";
import UseState from "./useState/UseState";
import UseTransition from "./useTransition/UseTransition";

function App() {
    return (
        <div className="App">
            {/* React Hooks */}
            <div>
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
                <UseCallback />

                <br></br>

                <h1>useReducer</h1>
                <UserReducer />
                <Todos />

                <br></br>

                <h1>iseTransition</h1>
                <UseTransition />

                <br></br>

                <h1>useDeferredValue</h1>
                <UseDeferredValue />

                <br></br>

                <h1>useLayoutEffect</h1>
                <UseLayoutEffect />

                <br></br>

                <h1>useImperativeHandle</h1>
                <UseImperativeHandle />

                <br></br>

                <h1>useId</h1>
                <UseId />
                <UseId /> */}
            </div>

            {/* Custom Hooks */}
            <div>
                <CustomHooksComponent />
            </div>
        </div>
    );
}

export default App;
