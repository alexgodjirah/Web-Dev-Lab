import React from "react";
import ConfirmationModal from "./ConfirmationModal";
import CustomInput from "./CustomInput";

export default function UseImperativeHandle() {
    // const [value, setValue] = React.useState("red");
    // const inputRef = React.useRef();

    // return (
    //     <div>
    //         <CustomInput
    //             ref={inputRef}
    //             type="text"
    //             value={value}
    //             onChange={(e) => setValue(e.target.value)}
    //         />
    //         <br></br>

    //         <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    //     </div>
    // );

    const [open, setOpen] = React.useState(false);
    const modalRef = React.useRef();

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <button onClick={() => modalRef.current.focusClose()}>
                Focus Close
            </button>
            <button onClick={() => modalRef.current.focusConfirm()}>
                Focus Confirm
            </button>
            <button onClick={() => modalRef.current.focusDeny()}>
                Focus Deny
            </button>
            <ConfirmationModal
                ref={modalRef}
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
