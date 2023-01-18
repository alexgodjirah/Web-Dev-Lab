import React from "react";

function CustomInput({ style, ...props }, ref) {
    React.useImperativeHandle(
        ref,
        () => {
            return { alertHi: () => alert(props.value) };
        },
        []
    );

    return (
        <div>
            <input
                // ref={ref}
                {...props}
                style={{
                    border: "none",
                    backgroundColor: "lightpink",
                    padding: ".25em",
                    borderBottom: ".1em solid black",
                    borderTopRightRadius: ".25em",
                    borderTopLeftRadius: ".25em",
                    ...style,
                }}
            />
        </div>
    );
}

// export default CustomInput;
export default React.forwardRef(CustomInput);
