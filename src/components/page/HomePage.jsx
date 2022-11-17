import React, { useState } from "react";
import { StateService } from "../../services/StateService";

/**
 * Page Component: HomePage
 *
 * @returns JSX.Element
 */
function HomePage() {
    const service = new StateService();
    // Reads the user name from the detached state layer
    const [timestamp, setTimestamp] = useState(new Date().getTime());
    // Line below offers functionalities for input to be manipulated and re-populated
    const [name, setName] = useState("");

    // Handles the click of the button and manipulates the detached state layer
    const handleClick = (event) => {
        event.preventDefault();

        // If my name is an undesirable value, do not set values in the state layer
        if (!name || name === "") return;

        // Will call the name Setter within the User sub-service
        service.User.setName(name);
        setTimestamp(new Date().getTime());
    };

    return (
        <div>
            <h3>Home Page. Hello, {service.User.getName()}.</h3>
            <section>
                <input
                    placeholder="Type a name..."
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button onClick={handleClick}>Set Name in State</button>
                <br />
                <div>Render Time: {timestamp}</div>
            </section>
        </div>
    );
}

export { HomePage };
