/**
 * Description Component
 * @author  Edwaki Liu
 * @since   04/21/2022
 */

import "./style.scss";

export default () => {
    return (
        <div className="description">
            <div className="title-wrapper">Roadmap</div>
            <div className="caption-wrapper">
                What we’re working on, and what we’ve accomplished in one tidy
                list. See the <a>Features</a> list for a full platform
                comparison.
            </div>
            <div className="platform-wrapper">
                <img className="svg-light" src="./assets/android-light.svg" />
                <img className="svg-dark" src="./assets/android-dark.svg" />
                <select className="platform-select">
                    <option>Android</option>
                    <option>MacOS</option>
                </select>
            </div>
        </div>
    );
};
