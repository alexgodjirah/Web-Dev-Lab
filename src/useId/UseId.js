import React from "react";

export default function UseId() {
    const id = React.useId(); // useId hook generates a random id for each specific component. This will help us make more specific id, e.g. input and label id and for.

    return (
        <div>
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" id={`${id}-name`} />

            <br />

            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}-email`} />
        </div>
    );
}
