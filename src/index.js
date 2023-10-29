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
const headerLogo = createDiv("headerLogo");
const headerTitle = createDiv('headerTitle');
const mainContentContainer = createDiv('mainContentContainer');

//create sidebar
const sidebar = createDiv('sidebar');
const sidebarTitle = createDiv('sidebarTitle');
const sidebarDesc = createDiv('sidebarDesc');
const sidebarDescText = createDiv('sidebarDescText');

//create buttons
const createListDiv = createDiv('createList');

//create form container
const createListFormContainer = createDiv('createFormContainer');

//append headers
appendDiv(document.body, container);
appendDiv(container, headerContainer);
appendDiv(headerContainer, headerLogo);
appendDiv(headerContainer, headerTitle);

//append sidebar
appendDiv(container, sidebar);
appendDiv(container, mainContentContainer);

appendDiv(sidebar, sidebarTitle);
appendDiv(sidebar, sidebarDescText);
appendDiv(sidebarDescText, sidebarDesc);
appendDiv(sidebarDesc, createListFormContainer);

function createFormDiv(name) {
    const form = document.createElement('form');
    form.classList.add(`${name}`);
    form.id = name;
    return form;
}

function createFormElements() {
    const formElements = ['name', 'description', 'due'];
    const formElementLabels = ['Name: ', 'Description: ', 'Date Due: '];

    const elements = {};

    formElements.forEach((element, index) => {
        // Create a container div to group the label and input
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('form-element');
        containerDiv.id = `form-element${element}`;
        // Create a label and associate it with the input
        const label = document.createElement('label');
        label.textContent = formElementLabels[index];
        label.htmlFor = `input-${element}`;
        label.id = element;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `input-${element}`;
        input.id = `input-${element}`;
        input.placeholder = formElementLabels[index];
        input.required = true;

        // Append label and input to the container div
        containerDiv.appendChild(label);
        containerDiv.appendChild(input);

        elements[element] = containerDiv;
    });

    elements.submitButton = document.createElement('input');
    elements.submitButton.type = 'submit';
    elements.submitButton.value = 'Submit';

    return elements;
}

function createAndAppendForm(formContainer, formDiv, formName, formElements) {
    const form = createFormDiv(formName);
//creates form div
    for (const element in formElements) {
        appendDiv(form, formElements[element]);
    }
//gets form input/elements/submit button
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        listFunctions.addToMyList();
    });

    appendDiv(formDiv, form);
    appendDiv(formContainer, formDiv);
}


createAndAppendForm(createListFormContainer, createListDiv, 'createListCard', createFormElements());

//   //call func to change text
changeText.changeHeaderLogo();
changeText.changeHeaderTitle();
changeText.changeSidebarDescText();
changeText.changeSidebarTitle();

// function createAndAppendForm(formName) {
//     const form = createFormDiv(formName)
//     console.log(form)

//}

// createAndAppendForm('createListCard')