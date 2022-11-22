import React, { useMemo, useContext, useState } from "react";
import { MiniContext, MiniContextConsumer } from "storage/context/index";
import { StateService } from "services/StateService";

/**
 * Page Component: HomePage
 *
 * @returns JSX.Element
 */
function HomePage() {
    // const service = new StateService();
    // Reads the user name from the detached state layer
    const timestamp = new Date().getTime();
    // Line below offers functionalities for input to be manipulated and re-populated
    // Uncomment for local state:
    // const [name, setName] = useState("");
    const data = useContext(MiniContext);
    const name = useMemo(() => data?.profile?.name ?? "", [data]);

    async function setProfileName(event) {
        data.setProfileName(event.target.value);
        // setTimestamp(new Date().getTime());
    }

    // Handles the click of the button and manipulates the detached state layer
    const handleClick = async (event) => {
        event.preventDefault();

        // If my name is an undesirable value, do not set values in the state layer
        if (!name || name === "") return;

        // Will call the name Setter within the User sub-service
        // service.User.setName(name);
        data.setProfileName(name);
        // setTimestamp(new Date().getTime());
    };

    return (
        <div>
            {!!data ? (
                <>
                    <h3>Home Page. Hello, {name ?? "Anon"}.</h3>
                    <section>
                        <input
                            placeholder="Type a name..."
                            value={name}
                            onChange={setProfileName}
                        />
                        <br />
                        <div>Render Time: {timestamp}</div>
                    </section>
                </>
            ) : (
                "Loading"
            )}
        </div>
    );
}

export { HomePage };
