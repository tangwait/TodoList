import { saveData, getData } from './storage.js';

const myList = [];

export class List {
    constructor(task, desc, due) {
        this.task = task,
        this.desc = desc,
        this.due = due;
    }
}

export function addToMyList() {
    const listTaskInput = document.querySelector('#Task').value;
    const listDescInput = document.querySelector('#Description').value;
    const listDueInput = document.querySelector('#Due').value;

    if (listTaskInput && listDescInput && listDueInput) {
        const newList = new List(listTaskInput, listDescInput, listDueInput);
        myList.push(newList);

        document.querySelector('#Task').value = '';
        document.querySelector('#Description').value = '';
        document.querySelector('#Due').value = '';

        console.log('listTaskInput:', listTaskInput);
        console.log('listDescInput:', listDescInput);
        console.log('listDueInput:', listDueInput);
        
        const newIndex = myList.length - 1; 
        makeAndAppendCard(newIndex);
     
        
        changeTaskText(listTaskInput, newIndex);
        changeDescText(listDescInput, newIndex);
        changeDueText(listDueInput, newIndex);
    }

    saveData('myTaskList', myList);
}


export function makeAndAppendCard(index) {
    const mainContentContainer = document.querySelector('.mainContentContainer');

    const listCard = document.createElement('div');
    listCard.classList.add(`card${index}`);
    listCard.classList.add('incomplete');
    listCard.id = "listCard";

    const listDetails = ['Task', 'Desc', 'Due'];

    listDetails.forEach(detail => {
        const nameElement = document.createElement('div');
        nameElement.classList.add('listCardItems');
        nameElement.id = (`listCard-${detail}`);
        nameElement.textContent = `${detail}: ${myList[index][detail.toLowerCase()]}`;

        listCard.appendChild(nameElement);
    });
    const parentElement = listCard;
    const buttonDiv = createAppendButtonDiv(parentElement);
    makeToggleButton(index, buttonDiv);
    makeDeleteButton(index, buttonDiv);

    mainContentContainer.appendChild(listCard);
}

function makeDeleteButton(index, buttonDiv) {
    const deleteButton = document.createElement ('button');
    deleteButton.textContent = 'Extinguish';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        deleteList(index)
        removeCardDOM(index)
    });
    buttonDiv.appendChild(deleteButton);
}

function removeCardDOM(index) {
    const listCard = document.querySelector(`.card${index}`);
    listCard.remove();
}
function deleteList(index) {
    myList.splice(index, 1);

}

function makeToggleButton(index, buttonDiv) {
    const toggleTaskButton = document.createElement('button');
    toggleTaskButton.textContent = 'Completed';
    toggleTaskButton.classList.add('taskButton');
    toggleTaskButton.addEventListener('click', () => toggleTask(index));

    buttonDiv.appendChild(toggleTaskButton);

}

function toggleTask(index) {
    const listCards = document.querySelectorAll(`.card${index}`);

    listCards.forEach(listCard => {
        // Toggle background color
        listCard.style.backgroundColor = listCard.classList.contains("completed") ? "#FFDAB9" : "#D8BFD8";

        // Toggle the 'completed' and 'incomplete' classes
        if (listCard.classList.contains("completed")) {
            listCard.classList.remove("completed");
            listCard.classList.add("incomplete");
        } else if (listCard.classList.contains("incomplete")) {
            listCard.classList.remove("incomplete");
            listCard.classList.add("completed");
        } 
    });
}




function createAppendButtonDiv(parentElement) {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    
    parentElement.appendChild(buttonDiv);
    return buttonDiv;
}

function changeTaskText(listTaskInput, index) {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = listTaskInput;
    taskDiv.classList.add('taskContentDiv');

    const listCardTask = document.querySelector(`.card${index} #listCard-Task`); 
    listCardTask.textContent = '';
    listCardTask.appendChild(taskDiv);
}

function changeDescText(listDescInput, index) {
    const descDiv = document.createElement('div');
    descDiv.textContent = listDescInput;
    descDiv.classList.add('descContentDiv');

    const listCardDesc = document.querySelector(`.card${index} #listCard-Desc`); 
    listCardDesc.textContent = '';
    listCardDesc.appendChild(descDiv);
}

function changeDueText(listDueInput, index) {
    const dueDiv = document.createElement('div');
    dueDiv.textContent = listDueInput;
    dueDiv.classList.add('dueContentDiv');

    const listCardDue = document.querySelector(`.card${index} #listCard-Due`); 
    listCardDue.textContent = '';
    listCardDue.appendChild(dueDiv);
}

window.addEventListener('load', () => {
    const storedTasks = getData('myTaskList');
    if (storedTasks) {
        myList.length = 0;
        myList.push(...storedTasks); 
      }
});