
const myList = [];

export class List {
    constructor(name, desc, due) {
        this.name = name,
        this.desc = desc,
        this.due = due;
    }
}

export function addToMyList() {
    const listNameInput = document.querySelector('#name').value;
    const listDescInput = document.querySelector('#description').value;
    const listDueInput = document.querySelector('#due').value;

    if (listNameInput && listDescInput && listDueInput) {
        const newList = new List(listNameInput, listDescInput, listDueInput);
        myList.push(newList);

        document.querySelector('#name').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#due').value = '';

        console.log('listNameInput:', listNameInput);
        console.log('listDescInput:', listDescInput);
        console.log('listDueInput:', listDueInput);
        
        const newIndex = myList.length - 1; 
        makeAndAppendCard(newIndex);
        makeDeleteButton(newIndex);
        console.log(myList);
    }
}


export function makeAndAppendCard(index) {
    const mainContentContainer = document.querySelector('.mainContentContainer');

    const listCard = document.createElement('div');
    listCard.classList.add(`card${index}`);
    listCard.id = "listCard";

    const listDetails = ['Name', 'Desc', 'Due'];

    listDetails.forEach(detail => {
        const nameElement = document.createElement('div');
        nameElement.classList.add('listCardItem');
        nameElement.textContent = `${detail}: ${myList[index][detail.toLowerCase()]}`;

        listCard.appendChild(nameElement);
    });

    mainContentContainer.appendChild(listCard);
    console.log("make and append card works");
}


function makeDeleteButton(index) {
    const deleteButton = document.createElement ('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        deleteList(index)
        removeCardDOM(index)
    });
    
    const listCard = document.querySelector(`.card${index}`)
    listCard.appendChild(deleteButton);
    console.log("this works")
}

function removeCardDOM(index) {
    const listCard = document.querySelector(`.card${index}`);
    listCard.remove();
}
function deleteList(index) {
    myList.splice(index, 1);

}



