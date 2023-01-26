import React from "react";
import ArrayComponent from "./useArray/ArrayComponent";
import DebounceComponent from "./useDebounce/DebounceComponent";
import LocalStorageComponent from "./useLocalStorage/LocalStorageComponent";
import PreviousComponent from "./usePrevious/PreviousComponent";
import TimeoutComponent from "./useTimeout/TimeoutComponent";
import ToggleComponent from "./useToggle/ToggleComponent";
import UpdateEffectComponent from "./useUpdateEffect/UpdateEffectComponent";

export default function CustomHooksComponent() {
    return (
        <div>
            <div>
                <LocalStorageComponent />
            </div>

            <div>
                <TimeoutComponent />
            </div>

            <div>
                <ToggleComponent />
            </div>

            <div>
                <DebounceComponent />
            </div>

            <div>
                <UpdateEffectComponent />
            </div>

            <div>
                <ArrayComponent />
            </div>

            <div>
                <PreviousComponent />
            </div>
        </div>
    );
}
