/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const url = ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = (templeList) => {
    templesElement.innerHTML = '';
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset(templeList);
    let filter = document.querySelector('#sortBy').value;
    switch(filter) {
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;
        case 'older':
            const ancientTemples = temples.filter(temple => temple.dedicated.split(', ')[0] < '1950');
            displayTemples(ancientTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
    }    
};

getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templeList);
})