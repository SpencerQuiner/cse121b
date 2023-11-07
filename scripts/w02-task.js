/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Spencer Quiner';
const currentYear = '2023';
const profilePicture = 'images/ajwedding.JPG';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let foods = ['Spagetti','Steak','Vanilla Ice Cream','Rueben Sandwiches','Apples','pizza'];
foodElement.innerHTML = `${foods}`;
let newFood = 'Potato Chips';
foods.push(newFood);
foodElement.innerHTML += `<br>${foods}`;
foods.splice(0, 1);
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;





