import React from 'react';
import PropTypes from 'prop-types';
import {findByDisplayValue} from "@testing-library/react";
import setTimeFormat from "../../utils/setTimeFormat";

export const Controls = ({
                             time,
                             start,
                             stop,
                             reset,
                             wait
                         }) => (
    <>
        <header>
            <h1>StopWatch</h1>
            <h1>{setTimeFormat(time)}</h1>
        </header>

        <section>
            <div>
                <button onClick={start}>
                    Start
                </button>

                <button onClick={stop}>
                    Stop
                </button>

                <button onClick={reset}>
                    Reset
                </button>

                <button onClick={wait}>
                    Wait
                </button>
            </div>

        </section>
    </>
);

Controls.propTypes = {
    time: PropTypes.number.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    wait: PropTypes.func.isRequired
};