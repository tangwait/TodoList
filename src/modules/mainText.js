
// export function changeHeaderLogo() {
//     const headerLogo = document.querySelector('.headerLogo');
//     headerLogo.textContent = 'This is the header logo'
//     console.log('this works');
// }

// export function changeHeaderTitle() {
//     const headerTitle = document.querySelector('.headerTitle');
//     headerTitle.textContent = "This is the header title";
//     console.log('this works333');
    
// }

export function changeSidebarTitle() {
    const sidebarTitle = document.getElementById('sidebarTitle');
    if (sidebarTitle) {
        const textDiv = document.createElement('div');
        textDiv.textContent = "this is the sidebar Title";
        console.log('this works5555');
        sidebarTitle.appendChild(textDiv);
        
    }
}

export function changeSidebarDescText() {
    const sidebarDescText = document.getElementById('sidebarDescText');
    if (headerTitle) {
        const textDiv = document.createElement('div');
        textDiv.textContent = "this is the sidebar Description";
        console.log('this works777');
        sidebarDescText.appendChild(textDiv);
    }
}

export function changeHeaderLogo() {
    const headerLogo = document.getElementById('headerLogo');
    if (headerLogo) {
        const textDiv = document.createElement('div');
        textDiv.textContent = 'This is the updated header logo';
        headerLogo.appendChild(textDiv);
    }
}

export function changeHeaderTitle() {
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        const textDiv = document.createElement('div');
        textDiv.textContent = 'This is the updated header title';
        headerTitle.appendChild(textDiv);
    }
}