
export function changeHeaderLogo() {
    const headerLogo = document.querySelector('.headerLogo');
    headerLogo.textContent = 'This is the header logo'
}

export function changeHeaderTitle() {
    const headerTitle = document.querySelector('.headerTitle');
    headerTitle.textContent = "This is the header title";
    
    return headerTitle;
}

export function changeSidebarTitle() {
    const sidebarTitle = document.querySelector('.sidebarTitle');
    sidebarTitle.textContent = "this is the sidebar Title";

    return sidebarTitle;
}

export function changeSidebarDesc() {
    const sidebarDesc = document.querySelector('.sidebarDesc');
    sidebarDesc.textContent = "this is the sidebar Description";

    return sidebarDesc;
}

