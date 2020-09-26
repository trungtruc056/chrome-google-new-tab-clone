import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    font-size: 5.625rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    line-height: 9.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${props => props.theme.responsive.tabletS}rem) {
        margin-top: 4.375rem;
        line-height: 12.5rem;
    }
`;

const Logo = () => {
    return (
        <Wrapper>Ryul</Wrapper>
    )
}

export default Logo;