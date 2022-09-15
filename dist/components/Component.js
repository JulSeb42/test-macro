/*=============================================== Component ===============================================*/
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
var StyledComponent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: red;\n\n    ", "\n"], ["\n    background-color: red;\n\n    ", "\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            background-color: blue;\n        "], ["\n            background-color: blue;\n        "])));
});
var Component = function () {
    var _a = useState(false), isActive = _a[0], setIsActive = _a[1];
    return (React.createElement(StyledComponent, { isActive: isActive },
        React.createElement("button", { onClick: function () { return setIsActive(!isActive); } }, "Set active")));
};
export default Component;
var templateObject_1, templateObject_2;
