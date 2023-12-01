/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(temple => {url = temple.imageUrl;
        tName = temple.templeName;
        locat = temple.location;
        article=document.createElement('article');
        article.setAttribute('class', 'temple');
        h3 = document.createElement('h3').textContent= `${tName}`;
        img = document.createElement('img');
        img.setAttribute('src', `${url}`);
        img.setAttribute('alt', `${locat}`);
        article.append(h3);
        article.append(img);
        templesElement.append(article);
        
    });
    }

    

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset(){
    document.querySelector('#temples').innerHTML = ' ';
}

/* sortBy Function */
function sortBy(temples){
    reset();
    let filter = document.querySelector('#sortBy').value;
    //console.log(filter);
    let sortedList = [];
    switch (filter) {
        case 'utah':
            sortedList = temples.filter((temple) => {
                return temple.location.includes('Utah');
            });
            console.log(sortedList);
            displayTemples(sortedList);
            break;
        case 'notutah':
            sortedList = temples.filter((temple) => { 
                return !temple.location.includes('Utah');
            });
            console.log(sortedList);
            displayTemples(sortedList);
            break;
        case 'older':
            sortedList = temples.filter ((temple)=>{
                let constrDate = temple.dedicated.substring(0,4);
                return Number(constrDate) < 1950;
            });
            console.log(sortedList);
            displayTemples(sortedList);
            break;
        case 'all':
            console.log(templeList);
            displayTemples(templeList);
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change',() => {sortBy(templeList)});