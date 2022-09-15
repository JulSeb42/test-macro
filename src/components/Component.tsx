/*=============================================== Component ===============================================*/

import React, { useState } from "react"
import styled, { css } from "styled-components/macro"

const StyledComponent = styled.div<{ isActive?: boolean }>`
    background-color: red;

    ${({ isActive }) =>
        isActive &&
        css`
            background-color: blue;
        `}
`

const Component = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <StyledComponent isActive={isActive}>
            <button onClick={() => setIsActive(!isActive)}>Set active</button>
        </StyledComponent>
    )
}

export default Component
