
let memberList = [];
/* function executed on click*/
function CheckCredentials(members)
{
    let userName = document.querySelector('#usrName').value;
    console.log(userName);
    let passWord = document.querySelector('#passWrd').value;
    console.log(passWord);
}


/*async function load data from JSON file*/
const getMembers = async () => {
    
    const response = await fetch('https://spencerquiner.github.io/cse121b/Final_project/resources/members.json');
    console.log(response);
    memberList = await response.json();
    console.log(memberList);
}

getMembers();


/*eventlistener*/
document.querySelector('#loginBtn').addEventListener('click',CheckCredentials);

