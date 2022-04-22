/**
 * Header Component
 * @author  Edwaki Liu
 * @since   04/21/2022
 */

import "./style.scss";

export default () => {
    return (
        <div className="header">
            <div className="logo-wrapper">
                <img className="svg-light" src="/assets/logo-light.svg" />
                <img className="svg-dark" src="/assets/logo-dark.svg" />
            </div>
            <div className="toolbar">
                <div className="lang-wrapper">
                    <select className="lang-select">
                        <option>EN</option>
                        <option>PL</option>
                    </select>
                </div>
                <span className="v-divider"></span>
                <div className="menu-wrapper">
                    <a className="menu-item">Download</a>
                    <a className="menu-item">Learn</a>
                </div>
                <span className="v-divider"></span>
                <div className="search-wrapper">
                    <img className="svg-light" src="/assets/search-light.svg" />
                    <img className="svg-dark" src="/assets/search-dark.svg" />
                </div>
            </div>
        </div>
    );
};
