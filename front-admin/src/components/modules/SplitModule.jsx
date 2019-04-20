import React from 'react';

import Module from './Module';
import ErrorModule from './ErrorModule';

import './SplitModule.scss';

export default ({ direction, modules }) => {
    if (modules) {
        return (
            <div className={`module-split module-split-${direction}`}>
                <div>
                    <Module module={modules[0]} />
                </div>
                <div>
                    <Module module={modules[1]} />
                </div>
            </div>
        );
    }
    return <ErrorModule />;
};
