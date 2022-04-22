/**
 * Timeline Component
 * @author  Edwaki Liu
 * @since   04/21/2022
 */

import { useEffect, useLayoutEffect } from "react";
import "./style.scss";

export default () => {
    const svgIds = ["svgpoint1", "svgpoint2", "svgpoint3", "svgpoint4"];

    /**
     * @description place timeline svg icons in the right positions
     */
    const moveSvgDoms = () => {
        let orgDom = document.getElementById("timeline_bar");
        let curve_path = document.getElementById("curve");

        for (let id of svgIds) {
            let dom = document.querySelector(`[svg-id='${id}']`);
            let svgDom = document.getElementById(id);
            svgDom.style.visibility = "visible";

            const radius = 14;
            let y =
                dom.offsetTop -
                orgDom.offsetTop +
                dom.offsetHeight / 2 -
                radius;
            let pos = curve_path.getPointAtLength(y);

            svgDom.style.left = orgDom.offsetLeft + pos.x - 5 + "px";
            svgDom.style.top = orgDom.offsetTop + pos.y - 1 + "px";
        }
    };

    /**
     * @description init function
     */
    useEffect(() => {
        window.addEventListener("resize", moveSvgDoms);
        const timer = setTimeout(moveSvgDoms, 100);
        return () => {
            window.removeEventListener("resize", moveSvgDoms);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="timeline-container">
            <div className="timeline-svg-group">
                <div className="svg-time-point" id={svgIds[0]}>
                    <img
                        className="svg-light"
                        src="/assets/timeline_arrow-light.svg"
                    />
                    <img
                        className="svg-dark"
                        src="/assets/timeline_arrow-dark.svg"
                    />
                </div>
                <div className="svg-time-point" id={svgIds[1]}>
                    <img
                        className="svg-light"
                        src="/assets/timeline_star-light.svg"
                    />
                    <img
                        className="svg-dark"
                        src="/assets/timeline_star-dark.svg"
                    />
                </div>
                <div className="svg-time-point" id={svgIds[2]}>
                    <img
                        className="svg-light"
                        src="/assets/timeline_circle-light.svg"
                    />
                    <img
                        className="svg-dark"
                        src="/assets/timeline_circle-dark.svg"
                    />
                </div>
                <div className="svg-time-point" id={svgIds[3]}>
                    <img
                        className="svg-light"
                        src="/assets/timeline_circle-light.svg"
                    />
                    <img
                        className="svg-dark"
                        src="/assets/timeline_circle-dark.svg"
                    />
                </div>
            </div>
            <div className="timeline-bar" id="timeline_bar">
                <svg
                    width="17"
                    height="935"
                    viewBox="0 0 17 935"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="curve"
                        d="M13.2116 2C13.2116 2 0.198508 104.544 2.21161 170.52C4.26544 237.83 11.8531 268.026 13.2116 335.362C14.6252 405.427 2.75801 449.379 7.71161 519.202C9.04398 537.982 11.7846 618.265 13.2116 637C18.3593 704.583 8.22426 748.652 9.21161 820.21C9.81667 864.061 13.2116 932.438 13.2116 932.438"
                        stroke="#A1D2EE"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="timeline-content">
                <div className="todo-item">
                    <div className="todo-item-title">Work in Progress</div>
                    <div
                        className="time-point todo-item-alert"
                        svg-id={svgIds[0]}
                    >
                        SPOILER ALERT!
                    </div>
                    <div className="todo-item-content">
                        <div className="todo-item-section">
                            Not big on surprises, huh? No worries, here’s what
                            we aim to launch in the next few months:
                        </div>
                        <div className="todo-item-section">
                            <ul>
                                <li>
                                    <a className="link">
                                        Auto-complete (snap-to-sketching)
                                    </a>
                                </li>
                                <li>
                                    <a className="link">
                                        Apple Sign In support
                                    </a>
                                </li>
                                <li>
                                    <a className="link">Scale & Measurement</a>
                                </li>
                                <li>
                                    <a className="link">Text Tool</a>
                                </li>
                                <li>
                                    <a className="link">
                                        More keyboard shortcuts
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="todo-item-section">
                            Follow up reading:
                        </div>
                        <div className="todo-item-section">
                            How we make our product decisions Feature requests &
                            bug reports
                        </div>
                    </div>
                    <div className="todo-item-collapse">
                        <a className="link-light-grey">Read less</a>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="todo-item-title">Brand New</div>
                    <div
                        className="time-point todo-item-date"
                        svg-id={svgIds[1]}
                    >
                        2022.04
                    </div>
                    <div className="todo-item-content">
                        <div className="todo-item-section">
                            Advanced Transforms, Interests...
                        </div>
                    </div>
                    <div className="todo-item-collapse">
                        <a className="link-light-grey">Read More</a>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="todo-item-title">Past Releases</div>
                    <div
                        className="time-point todo-item-date"
                        svg-id={svgIds[2]}
                    >
                        2022.02
                    </div>
                    <div className="todo-item-content">
                        <div className="todo-item-section">
                            Something to do with Grids?
                        </div>
                        <div className="todo-item-section">
                            <ul>
                                <li>
                                    <a className="link">
                                        Distort, skew and warp your selections
                                        with the four corner handles. Pull one
                                        or two handles to adjust the aspect
                                        ratio, or tap one or two handles and
                                        pinch / spread / pull to activate the
                                        more advanced transforms.{" "}
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Tap through the Interests list in your
                                        Account screen to help us better
                                        understand your needs.
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="todo-item-section">
                            For a deeper explanation, including pics + video
                            examples, check out the full <a>release post</a>.
                        </div>
                        <div className="todo-item-section">
                            Submit your <a>feedback and feature requests</a>{" "}
                            here.
                        </div>
                    </div>
                    <div
                        className="time-point todo-item-date"
                        svg-id={svgIds[3]}
                    >
                        2021.12
                    </div>
                    <div className="todo-item-content">
                        <div className="todo-item-section">
                            Headline for the things we made way back here.
                        </div>
                    </div>
                    <div className="todo-item-collapse">
                        <a className="link-light-grey">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
