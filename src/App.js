/**
 * App Component
 * @author  Edwaki Liu
 * @since   04/21/2022
 */

import "./App.scss";
import RoadmapView from "./views/RoadmapView";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
    // CONSTANTS
    const DARK_THEME = "theme-dark";
    const LIGHT_THEME = "theme-light";

    // theme state (light / dark)
    const [theme, setTheme] = useState(LIGHT_THEME);

    /**
     * @description toggle the theme
     */
    const toggleTheme = () => {
        document.getElementById("root").parentElement.style.backgroundColor =
            theme == LIGHT_THEME ? "black" : "white";
        if (theme == LIGHT_THEME) setTheme(DARK_THEME);
        else setTheme(LIGHT_THEME);
    };
    return (
        <div>
            <div className="theme-bar">
                <Button
                    className="theme-button"
                    variant="contained"
                    onClick={toggleTheme}
                >
                    Change theme
                </Button>
            </div>
            <div className={"App " + theme}>
                <RoadmapView />
            </div>
        </div>
    );
}

export default App;
