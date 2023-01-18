import React from "react";
import "./styles.css";

function ConfirmationModal({ isOpen, onClose }, ref) {
    // As you may see, ref isn't inside the destructuring props. This happen because we use forwardRef(), which take props as the first parameter and ref as the second.
    const closeRef = React.useRef();
    const confirmRef = React.useRef();
    const denyRef = React.useRef();

    // Use useImperativeHandle hook when we want to access custom component that we can't access with props.
    React.useImperativeHandle(
        // In essence, useImperativeHandle hook allows us to create a completely custom value for the ref we return from a custom component. This means we can do more than just assign a single element to our ref example.
        ref, // ref parameter here is the ref that we're going to override with our custom ref.
        () => {
            // The second parameter is a function that will return new value for our ref. Allowing us to use the returned value in parent component.
            return {
                focusClose: () => closeRef.current.focus(),
                focusConfirm: () => confirmRef.current.focus(),
                focusDeny: () => denyRef.current.focus(),
            };
        },
        []
    );

    if (!isOpen) return null;
    return (
        <div className="modal" ref={ref}>
            <button className="modal-close" onClick={onClose} ref={closeRef}>
                &times;
            </button>

            <div className="modal-header">
                <h1>Title</h1>
            </div>

            <div className="modal-body">Do you confirm</div>

            <div className="modal-footer">
                <button
                    className="confirm-btn"
                    onClick={onClose}
                    ref={confirmRef}
                >
                    Yes
                </button>
                <button className="deny-btn" onClick={onClose} ref={denyRef}>
                    No
                </button>
            </div>
        </div>
    );
}

// forwardRef() is used to tell React that this component can tkae in a ref and the second parameter to our Componenet will be the ref that is passed in.
export default React.forwardRef(ConfirmationModal);
