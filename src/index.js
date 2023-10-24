import * as listFunctions from './modules/createList.js';
import _ from 'lodash';
import './style.css';

const buttonFunctions = {
    createList: listFunctions.createList,
    addToList: listFunctions.addToList
};

function createDiv(name) {
    const div = document.createElement('div');
    div.classList.add(`${name}`);
    div.id = name;
    return div;
}

function createButton(name) {
    const button = document. createElement('button');
    button.classList.add(`${name}`);
    button.id = name;
    button.textContent = name
    button.addEventListener('click', () => {
        if (name in buttonFunctions) {
            buttonFunctions[name]();
        }
    })
    return button;
}

function appendDiv(element, div) {
    element.appendChild(div);
}

const container = createDiv("container");
const headerContainer = createDiv("headerContainer");
const headerLogo = createDiv("headerLogo");
const headerTitle = createDiv('headerTitle');
const mainContentContainer = createDiv('mainContentContainer');

const createList = createButton('createList');
const addToList = createButton('addToList');

appendDiv(document.body, container);
appendDiv(container, headerContainer);
appendDiv(headerContainer, headerLogo);
appendDiv(headerContainer, headerTitle);

appendDiv(container, mainContentContainer);

appendDiv(mainContentContainer, createList);
appendDiv(mainContentContainer, addToList);