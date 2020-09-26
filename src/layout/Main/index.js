import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useDebounce from 'hooks/useDebounce';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import countryList from 'utils/contryList';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [suggestList, setSuggestList] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const debouncedSearchValue = useDebounce(searchValue, 300);

    useEffect(
        () => {
            if (debouncedSearchValue && searchValue && !isSubmit) {
                setIsSearching(true);
                const getSuggestList = countryList.filter(country =>
                    country.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
                );
                setSuggestList(getSuggestList.slice(0, 8));
            } else {
                setIsSearching(false);
                setSuggestList([]);
            }

        }, [debouncedSearchValue, searchValue, isSubmit]
    );

    const handleSearching = (e) => {
        setSearchValue(e.target.value);
        setIsSubmit(false);
    }

    const handleOnKeyDown = (e) => {
        if (searchValue) {
            if (e.keyCode === 13) {
                // Enter
                setSearchValue(suggestList[activeIndex]);
                setActiveIndex(0);
                setIsSearching(false);
                setSuggestList([]);
                setIsSubmit(true);
            } else if (e.keyCode === 38) {
                // key Up
                if (activeIndex === 0) {
                    return;
                }
                setActiveIndex(activeIndex - 1);
            } else if (e.keyCode === 40) {
                // key Down
                if (activeIndex === suggestList.length - 1) {
                    return;
                }
                setActiveIndex(activeIndex + 1);
            }
        }
    };

    const handleItemClicked = (e) => {
        setSearchValue(e.currentTarget.innerText);
        setActiveIndex(0);
        setIsSearching(false);
        setSuggestList([]);
        setIsSubmit(true);
    }

    return (
        <Wrapper >
            <Logo />
            <SearchBar
                onSearching={handleSearching}
                onKeyDown={handleOnKeyDown}
                onItemClicked={handleItemClicked}
                isSearching={isSearching}
                suggestList={suggestList}
                activeIndex={activeIndex}
                searchValue={searchValue}
            />
        </Wrapper>
    )
}

export default Main;