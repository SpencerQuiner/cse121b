
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
<<<<<<< HEAD
    const response = await fetch('http://127.0.0.1:5500/Final_project/resources/members.json', {mode: "no-cors"});
=======
    const response = await fetch('/Final_project/resources/members.json', {mode: "no-cors"});
>>>>>>> aa2df66bc27a4e3c6b06bdb6050acae3ea4266ee
    const response = await fetch('/Final_project/resources/members.json', {mode: "no-cors"});
    memberList = await response.json();
    console.log(memberList);
}

getMembers();
<<<<<<< HEAD

/*eventlistener*/
document.querySelector('#loginBtn').addEventListener('click',CheckCredentials);
=======
/*eventlistener*/
