import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import SuggestList from 'components/SuggestList';

import iconSearch from 'assets/icons/search.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    border-radius: 2rem;
    background-color: ${props => props.theme.colors.bgPrimary};
    position: relative;

    ${props => props.searching && `
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `}

    @media screen and (min-width: ${props => props.theme.responsive.tabletS}rem) {
        width: 36rem;
    }
`

const SearchInput = styled.input`
    background-color: ${props => props.theme.colors.bgPrimary};
    height: 3rem;
    border: none;
    width: 60%;
    font-size: ${props => props.theme.font.fontSizeS};
    outline: none;
    color: ${props => props.theme.colors.textPrimary};

    @media screen and (min-width: ${props => props.theme.responsive.mobileS}rem) {
        width: 13rem;
        font-size: ${props => props.theme.font.fontSizeM};
    }

    @media screen and (min-width: ${props => props.theme.responsive.tabletS}rem) {
        width: 31.25rem;
    }
`

const SuggestListWrapper = styled.div`
    position: absolute;
    z-index: 1000;
    background-color: ${props => props.theme.colors.bgPrimary};
    width: 100%;
    top: 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin: 0;

`

const SearchBar = props => {
    const { onSearching, onKeyDown, isSearching, suggestList, searchValue, activeIndex, onItemClicked } = props;

    return (
        <Wrapper searching={isSearching && suggestList.length > 0}>
            <Icon iconUrl={iconSearch} iconSize={1.5} />
            <SearchInput
                type="text"
                placeholder="Search country name"
                onChange={onSearching}
                onKeyDown={onKeyDown}
                value={searchValue}
            />
            {(isSearching && suggestList.length > 0) && <SuggestListWrapper>
                <SuggestList data={suggestList} activeIndex={activeIndex} onItemClicked={onItemClicked} />
            </SuggestListWrapper>}
        </Wrapper>
    )
}

SearchBar.propTypes = {
    onSearching: PropTypes.func,
    onKeyDown: PropTypes.func,
    onItemClicked: PropTypes.func,
    isSearching: PropTypes.bool,
    suggestList: PropTypes.array,
    searchValue: PropTypes.string,
    activeIndex: PropTypes.number
}

SearchBar.defaultProps = {
    onSearching: () => { },
    onKeyDown: () => { },
    onItemClicked: () => { },
    isSearching: false,
    suggestList: [],
    searchValue: '',
    activeIndex: 0
}

export default SearchBar;