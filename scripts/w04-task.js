/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Spencer Quiner',
    photo: 'images/ajwedding.jpg',
    favoriteFoods: [
        'Spagetti',
        'Steak',
        'Vanilla Ice Cream',
        'Rueben Sandwich',
        'Apples',
        'Pizza',
        'Baked Potatoes'
    ],
    hobbies: [
        'video games',
        'reading',
        'taking walks',
        'board games',
    ],
    placesLived: [],
    
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Homer, AK',
        length: '6 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Camp Lejune, NC',
        length: '4 years'
    }
)
myProfile.placesLived.push(
    {
        place: 'Djibouti Africa',
        length: '1 year'
    }
)
myProfile.placesLived.push(
    {
        place: 'Portland, OR',
        length: '7 years'
    }
)
myProfile.placesLived.push(
    {
        place: 'Arrecife, Spain',
        length: '12 years'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
const foodsElement = document.querySelector('#favorite-foods');

function createFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myProfile.favoriteFoods.forEach(createFoodItem);

/* Hobbies List */
const hobbieList = document.querySelector('#hobbies');

function createHobby(hobby) {
  let newhobby = document.createElement('li');
  newhobby.textContent = hobby;
  hobbieList.appendChild(newhobby);
}
myProfile.hobbies.forEach(createHobby);


/* Places Lived DataList */
const placeList = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place =>{newplace = document.createElement('dt');
    newplace.textContent = place.place;
    newduration = document.createElement('dd');
    newduration.textContent = place.length;
    placeList.append(newplace, newduration);
});


