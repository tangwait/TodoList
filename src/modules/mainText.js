import Icon from '../candle-logo.jpg';

export function changeSidebarTitle() {
        const textDiv = document.createElement('div');
        textDiv.textContent = "Light Up Your Day, One Task at a Time";
        textDiv.classList.add('sidebarText');
        sidebarTitle.appendChild(textDiv);
}

export function changeSidebarDescText() {
        const textDiv = document.createElement('div');
        textDiv.textContent = "What do you need to do?";
        sidebarDescText.appendChild(textDiv);
}

export function changeHeader() {
    const myIconContainer = document.createElement('div');
    myIconContainer.classList.add('myIconContainer');
    
    const myIcon = new Image();
    myIcon.src = Icon;
    headerLogo.appendChild(myIconContainer)
    myIconContainer.appendChild(myIcon);
    
    const brandDiv = document.createElement('div');
    brandDiv.textContent = 'Lavender List';
    headerBrand.appendChild(brandDiv);
    
    const titleDiv = document.createElement('div');
    titleDiv.textContent = 'Relax & Achieve';
    headerTitle.appendChild(titleDiv);
}

export function changeFormText() {
    const taskInput = document.querySelector('#Task');
    taskInput.placeholder = 'Enter Task Title';

    const descInput = document.querySelector('#Description');
    descInput.placeholder = 'Add a Description';

    const dueInput = document.querySelector('#Due');
    dueInput.placeholder = 'Tonight, 6/8, 10 minutes';
}