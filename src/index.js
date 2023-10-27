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

//create buttons
const createListDiv = createDiv('createList');
const addToListDiv = createDiv('addToList');

//create form container
const toDoListFormContainer = createDiv('formContainer');
const createListFormContainer = createDiv('createFormContainer');

//append headers
appendDiv(document.body, container);
appendDiv(container, headerContainer);
appendDiv(headerContainer, headerLogo);
appendDiv(headerContainer, headerTitle);
appendDiv(container, mainContentContainer);

//append sidebar
appendDiv(container, sidebar);
appendDiv(sidebar, sidebarTitle);
appendDiv(sidebar, sidebarDesc);

//append buttons
appendDiv(sidebarDesc, createListDiv);
appendDiv(sidebarDesc, addToListDiv);

//append form container
appendDiv(sidebarDesc, toDoListFormContainer);
appendDiv(sidebarDesc, createListFormContainer);

function createFormDiv(name) {
    const form = document.createElement('form');
    form.classList.add(`${name}`);
    form.id = name;
    return form;
}

function createFormElements() {
    const formElements = ['name', 'description', 'dueDate'];
    const formElementLabels = ['Name:', 'Description:', 'Due Date:'];

    const elements = {};

    formElements.forEach((element, index) => {
        // Create a container div to group the label and input
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('form-element');

        // Create a label and associate it with the input
        const label = document.createElement('label');
        label.textContent = formElementLabels[index];
        label.htmlFor = element;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = element;
        input.id = element;
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

function createAndAppendForm(container, button, formName, formElements) {
    const form = createFormDiv(formName);

    for (const element in formElements) {
        appendDiv(form, formElements[element]);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        listFunctions.addToMyList();
    });

    appendDiv(button, form);
    appendDiv(container, button);
}

  
  // Create and append forms to buttons
createAndAppendForm(createListFormContainer, createListDiv, 'createListCard', createFormElements());

  //call func to change text

// changeText();
