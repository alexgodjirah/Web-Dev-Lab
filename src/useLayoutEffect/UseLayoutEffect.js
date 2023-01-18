import React from "react";

export default function UseLayoutEffect() {
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const popup = React.useRef();
    const button = React.useRef();

    React.useEffect(() => {
        console.log(button.current);
        console.log(popup.current);
    }, [button, popup]);

    // React.useEffect(() => {

    // })

    React.useEffect(() => {
        if (popup.current == null || button.current == null) return;
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 200}px`;
    }, [show]);

    // const [show, setShow] = useState(false);
    // const popup = useRef();
    // const button = useRef();

    // useEffect(() => {
    //     if (popup.current == null || button.current == null) return;

    //     const { bottom } = button.current.getBoundingClientRect();
    //     popup.current.style.top = `${bottom + 20}px`;
    // }, [show]);

    return (
        <>
            <button
                ref={button}
                onClick={() => setShow((prevShow) => !prevShow)}
            >
                Click Here
            </button>

            {show && (
                <div style={{ position: "absolute" }} ref={popup}>
                    This is a popup
                </div>
            )}
        </>
    );
}
