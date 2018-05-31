import React from 'react';
var Component = function (_a) {
    var children = _a.children, data = _a.data;
    return (React.createElement("div", { className: 'f6 pv2 ph2' },
        React.createElement("h3", { className: 'serif f4' },
            data.id,
            ": ",
            data.value),
        children));
};
Component.defaultProps = {
    data: {
        id: null,
        value: null
    }
};
Component.displayName = 'Component';
export default Component;
