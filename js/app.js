document.addEventListener("DOMContentLoaded",()=>{
    const log = document.querySelector('#form');
    log.addEventListener('submit',createFromClick);
})

const createFromClick = function(event){
    event.preventDefault();
    const newItem = addNewItem(event.target);
    const place = document.querySelector('#place');
    place.appendChild(newItem);
    event.target.reset();
}

const addNewItem = function(form){
    const newItem = document.createElement('p');

    const name = document.createElement('h3');
    name.textContent = `Name: ${form.name.value}`;
    newItem.appendChild(name);

    const nationality = document.createElement('h3');
    nationality.textContent = `Nationality: ${form.nationality.value}`;
    newItem.appendChild(nationality);

    const sport = document.createElement('h3');
    sport.textContent = `Sport: ${form.sport.value}`;
    newItem.appendChild(sport);

    const line = document.createElement('hr');
    newItem.appendChild(line);

    return newItem;
}