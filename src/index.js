import * as listFunctions from './modules/createList.js';
import * as changeText from './modules/mainText.js';
import _ from 'lodash';
import './style.css';

function createDiv(name) {
    const div = document.createElement('div');
    div.classList.add(`${name}`);
    div.id = name;
    return div;
}

function appendDiv(element, div) {
    element.appendChild(div);
}

//create headers
const container = createDiv("container");
const headerContainer = createDiv("headerContainer");
const headerContainerText = createDiv('headerContainerText');
const headerLogo = createDiv("headerLogo");
const headerBrand = createDiv('headerBrand');
const headerTitle = createDiv('headerTitle');
const mainContentContainer = createDiv('mainContentContainer');

//create sidebar
const sidebar = createDiv('sidebar');
const sidebarTitle = createDiv('sidebarTitle');
const sidebarDesc = createDiv('sidebarDesc');
const sidebarDescText = createDiv('sidebarDescText');

//create buttons
const createListDiv = createDiv('createList');

//append headers
appendDiv(document.body, container);
appendDiv(container, headerContainer);
appendDiv(headerContainer, headerLogo);
appendDiv(headerContainer, headerContainerText)
appendDiv(headerContainerText, headerBrand);
appendDiv(headerContainerText, headerTitle);

//append sidebar
appendDiv(container, sidebar);
appendDiv(container, mainContentContainer);

appendDiv(sidebar, sidebarTitle);
appendDiv(sidebar, sidebarDescText);
appendDiv(sidebar, sidebarDesc);
appendDiv(sidebarDesc, createListDiv);



function createFormDiv(name) {
    const form = document.createElement('form');
    form.classList.add(`${name}`);
    form.id = name;
    return form;
}

function createFormElements() {
    const formElements = [];

    const formElementLabels = ['Task', 'Description', 'Due'];

    formElementLabels.forEach((labelText) => {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.htmlFor = `${labelText}`;
        label.id = `input-${labelText}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `${labelText}`;
        input.id = `${labelText}`;
        input.placeholder = labelText;
        input.required = true;

        if (labelText === 'Due') {
            input.type = 'date';
          } else {
            input.type = 'text';
          }

        formElements.push({ label, input });
    });

    return formElements;
}

function createAndAppendForm(parentFormDiv, createdFormName, formElements) {
    const form = createFormDiv(createdFormName);

    formElements.forEach((element) => {
        const { label, input } = element;
        form.appendChild(label);
        form.appendChild(input);
    });

    // Add the submit button to the form
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add a New Task';
    submitButton.id = 'submitButton';
    form.appendChild(submitButton);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        listFunctions.addToMyList();
    });

    appendDiv(parentFormDiv, form);
}



const formElements = createFormElements(); // Create form elements once

createAndAppendForm(createListDiv, 'createListCard', formElements);

//   //call func to change text
changeText.changeHeader();
changeText.changeSidebarDescText();
changeText.changeSidebarTitle();
changeText.changeFormText()
