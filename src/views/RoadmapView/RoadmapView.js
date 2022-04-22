/**
 * Roadmap View Component
 * @author  Edwaki Liu
 * @since   04/21/2022
 */

import Header from "../../components/Header";
import Description from "../../components/Description";
import Timeline from "../../components/Timeline";
import "./style.scss";

export default () => {
    return (
        <div className="main-container">
            <Header />
            <Description />
            <Timeline />
        </div>
    );
};
