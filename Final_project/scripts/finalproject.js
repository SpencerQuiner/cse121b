
// initialize empty array.
let memberList = [];

/* function checks to see if user already exists*/
function CheckCredentials(members){
    let userName = document.querySelector('#usrName').value;
    console.log(userName);
    let passWord = document.querySelector('#passWrd').value;
    console.log(passWord);
    if (members.find(member => member.userName === userName)) {
        let user = members.find(member => member.userName === userName);
        console.log(user);
/*check user password*/
        if(passWord !== user.password){
            let failureMsg = document.createElement('span').textContent= `The password you have entered is incorrect please try again.`;
            document.querySelector('#loginForm').append(failureMsg);
        }
        else{
            hidelogin();
            displayUserData(user);
        }
//if the user doesn't exist program hides the loging and displays the registration form.
    } else {
        hidelogin();
        showRegistrationForm();
    }
    
}

/*Hides loging form from user*/
function hidelogin(){
    document.querySelector('#login').style.display = 'none';
}

/*adds HTML to the page to display user data*/
function displayUserData(user){
    let photoUrl = user.imageUrl;
    let fName = user.firstName;
    let lName = user.lastName;
    let email = user.email;
    let address = user.address;  
    let favFood = user.favoritFood;
    let section = document.createElement('section');
    let photo = document.createElement('img');
    photo.setAttribute('src', photoUrl);
    let fullName = document.createElement('div');
    fullName.innerHTML= `Name: ${fName} ${lName}`;
    let emailaddress = document.createElement('div');
    emailaddress.innerHTML= `Email Address: ${email}`;
    let residence = document.createElement('div');
    residence.innerHTML= `Mailing Address: ${address}`;
    let food = document.createElement('div');
    food.innerHTML= `Favorite Food: ${favFood}`;
    section.append(photo);
    section.append(fullName);
    section.append(emailaddress);
    section.append(residence);
    section.append(food);
    document.querySelector('#userData').append(section);
}

/*displays registration form for user to register*/
function showRegistrationForm(){
    document.querySelector('#registrationForm').style.display = 'flex';
}
//pulls values entered into registration form by user, and adds user to the user list
function RegisterNewUser(array){
    firstName = document.getElementById('newUsrFName').value;
    lastName = document.getElementById('newUsrLName').value;
    userName = document.getElementById('new_UsrName').value;
    passWord = document.getElementById('newPassword').value;
    email = document.getElementById('newEmail').value;
    address = document.getElementById('newAddress').value;
    food = document.getElementById('newFood').value;
    //create new object out of user data
    let NewUser = {
        'firstName': firstName,
        'lastName': lastName,
        'userName': userName,
        'password': passWord,
        'email': email,
        'address': address,
        'favoritFood': food
    }
    //add new user to array and display the new user
    array.push(NewUser);
    document.querySelector('#registrationForm').style.display = 'none';
    displayUserData(NewUser);
    //I wanted to add the new user that was created tot he JSON file so it could be recalled later but was not able to figure out how to do it. 

}


/*async function load data from JSON file*/
const getMembers = async () => { 
    
    const response = await fetch('https://spencerquiner.github.io/cse121b/Final_project/resources/members.json');
    memberList = await response.json();
    console.log(memberList);
}

getMembers();


/*eventlisteners*/
document.querySelector('#loginBtn').addEventListener('click',() => {CheckCredentials(memberList)});
document.querySelector('#registrationBtn').addEventListener('click',() => {RegisterNewUser(memberList)});
