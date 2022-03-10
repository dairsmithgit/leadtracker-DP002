let myLeads = [];

const inputEl = document.getElementById('inputElement');
const inputBtn = document.getElementById('inputButton');
const tabBtn = document.getElementById('tabButton');
const deleteBtn = document.getElementById('deleteButton');
const ulEl = document.getElementById('leadList');

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocal) {
    myLeads = leadsFromLocal;
    render(myLeads);
}

function render(leads) {
    let listItems = '';
    for (lead of leads) {
        listItems += `
        <li>
            <a target='_blank' href='${lead}'>
                ${lead}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
});

tabBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
});

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

// code challenges
// note: you can declare the handler function inside the event listener method or call a function that has already been made

// create element by assigning it to a variable
// set text content of element/variable
// append element to element

// static website
// social media app
// data intensive app
// dev centered app (developer target audience) ie bug tracker etc