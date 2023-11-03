// storage.js

// Function to save data to local storage
export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Function to retrieve data from local storage
  export function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  