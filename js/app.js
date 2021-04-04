document.addEventListener("DOMContentLoaded",()=>{
    const log = document.querySelector('#form');
    log.addEventListener('submit',createFromClick);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', deleteAll);
})

const createFromClick = function(event){
    event.preventDefault();
    const newItem = addNewItem(event.target);
    const list = document.querySelector('#list');
    list.appendChild(newItem);
    event.target.reset();
}

const addNewItem = function(form){
    const newItem = document.createElement('p');
    newItem.classList.add('list-item');

    const name = document.createElement('h3');
    name.classList.add('nameList');
    name.textContent = `Name: ${form.name.value}`;
    newItem.appendChild(name);

    const nationality = document.createElement('h3');
    nationality.classList.add('detailList');
    nationality.textContent = `Nationality: ${form.nationality.value}`;
    newItem.appendChild(nationality);

    const sport = document.createElement('h3');
    sport.classList.add('detailList');
    sport.textContent = `Sport: ${form.sport.value}`;
    newItem.appendChild(sport);

    const status = document.createElement('h3');
    status.classList.add('detailList');
    status.textContent = `Status: ${form.status.value}`;
    newItem.appendChild(status);

    return newItem;
}

const deleteAll = function () {
    const list = document.querySelector('#list');
    list.innerHTML = '';
  }