import React, { useState, useEffect } from 'react';

import Module from './Module';
import ErrorModule from './ErrorModule';

import './SlideModule.scss';

export default ({ numbers, autoplay = false, delay = 10000, modules }) => {
    const [index, setIndex] = useState(0);

    const incrementIndex = () => {
        if (index >= numbers - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const decrementIndex = () => {
        if (index <= 0) {
            setIndex(numbers - 1);
        } else {
            setIndex(index - 1);
        }
    }

    const onButtonClick = (direction) => {
        if (direction === 'right') {
            incrementIndex();
        } else {
            decrementIndex();
        }
    }

    useEffect(() => {
        if (autoplay) {
            const t = setTimeout(() => {
                incrementIndex();
            }, delay);
            return () => {
                clearTimeout(t);
            };
        }
    }, [index]);

    if (modules) {
        return (
            <div className="module-slide">
                <div className="module-slide-button left" onClick={onButtonClick.bind(this, 'left')}>
                    <i />
                </div>
                <Module module={modules[index]} />
                <div className="module-slide-button right" onClick={onButtonClick.bind(this, 'right')}>
                    <i />
                </div>
            </div>
        );
    }
    return <ErrorModule />;
};
