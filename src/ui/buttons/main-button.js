import styled from 'styled-components';

const MainButton = styled.button`
    margin: 0 auto,
    display: block;
    padding: 10px;
    border: none;
    // border: 1px solid var(--edit-color-main);
    border-radius: 5px;
    font-size: 18px;
    color: var(--main-text-color);
    background-color: var(--main-white);
    cursor: pointer;
    transition: .3s ease-in;

    :hover {
        opacity: 0.8;
        background-color: var(--edit-color-main);
        color: var(--main-white);
    }

    :active {
        background-color: var(--edit-color-main);
    }
`

export default MainButton;
