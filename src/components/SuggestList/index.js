import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
    margin: 0;
    list-style-type: none;
    padding-left: 0;
    padding-bottom: 1rem;
`

const Item = styled.li`
    padding-right: 1.625rem;
    padding-left: 3.125rem;
    font-size: 1.125rem;
    line-height: 2rem;
    cursor: pointer;
    color: ${props => props.theme.colors.textPrimary};

    ${props => props.active && `
        background-color: ${props.theme.colors.greybg};
    `}
`

const SuggestList = props => {
    const { data, activeIndex, onItemClicked } = props;

    return (
        <Wrapper>
            {data.length > 0 && data.map((item, index) => 
                <Item
                    key={item}
                    onClick={onItemClicked}
                    active={activeIndex === index}
                >
                    {item}
                </Item>
            )}
        </Wrapper>
    )
}

SuggestList.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    onItemClicked: PropTypes.func
}

SuggestList.defaultProps = {
    data: [],
    activeIndex: 1,
    onItemClicked: () => {}
}

export default SuggestList;