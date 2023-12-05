
let memberList = [];


/*async function load data from JSON file*/
const getMembers = async () => {
    const response = await fetch('/Final_project/resources/members.json', {mode: "no-cors"});
    memberList = await response.json();
    console.log(memberList);
}

getMembers();
/*eventlistener*/
