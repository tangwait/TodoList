
const myList = [];

export class List {
    constructor(name, desc, dueDate) {
        this.name = name,
        this.desc = desc,
        this.dueDate = dueDate;
    }
}

export function addToMyList() {
    const listNameInput = document.getElementById('name').value;
    const listDescInput = document.getElementById('description').value;
    const listDueDateInput = document.getElementById('dueDate').value;

    if (listNameInput && listDescInput && listDueDateInput) {
        const newList = new List(listNameInput, listDescInput, listDueDateInput);
        myList.push(newList);

    document.getElementById('name').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';

    makeAndAppendCard();
    }
}

export function makeAndAppendCard() {
    const mainContentContainer = document.querySelector('.mainContentContainer');

    for (let i = 0; i < myList.length; i++) {
        const listCard = document.createElement('div');
        listCard.classList.add('listCard');

        const listDetails = ['Name', 'desc', 'dueDate'];

        listDetails.forEach(detail => {
            const nameElement = document.createElement('div');
            nameElement.classList.add('cardName');
            nameElement.textContent = `${detail}: `;

            const descElement = document.createElement('div');
            descElement.classList.add('cardDesc');
            descElement.textContent = `${detail}: `;

            const dueDateElement = document.createElement('div');
            dueDateElement.classList.add('cardDueDate');
            dueDateElement.textContent = myList[i][`list${detail}`];

            nameElement.appendChild(descElement);
            nameElement.appendChild(dueDateElement);
            listCard.appendChild(nameElement);
        });
        mainContentContainer.appendChild(listCard);
        console.log("make and append card works")
    }
}

function makeDeleteButton() {
    // const deleteButton = document.createElement ('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.classList.add('deleteButton');
    // deleteButton.addEventListener('click', () => deleteList(index));
    // listCard.appendChild(deleteButton);
    console.log("this works")
}

export function deleteList(index) {
    myList.splice(index, 1);
    displayList();
}



