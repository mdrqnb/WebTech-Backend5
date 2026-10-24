/*Task 1*/
const userProfile = {
    name:"Madiyar",
    birthYear: 2008,
    isDeveloper:true,
    hobbies:["sport","chess","football"]
};

console.log(userProfile);

/*Task 2*/
let age = userProfile.birthYear;

const currentAge = new Date().getFullYear() - age;
console.log(currentAge);

console.log(userProfile.hobbies.length);

/*Task 4*/

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit" , function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value; 
    const birthYear = document.getElementById("birthYear").value;

    userProfile.name = username;
    userProfile.birthYear = Number(birthYear);

    console.log(userProfile);
} );

/*Task 5*/

const hobbiesList = document.getElementById("hobbiesList");
const newHobby = document.getElementById("newHobby");
const addItem = document.getElementById("addItem");
const resetItem = document.getElementById("resetItem");

addItem.addEventListener("click", function() {
    const hobbyName = newHobby.value.trim();

    if(hobbyName !== "") {
        const li = document.createElement("li");
        li.textContent = hobbyName;

        hobbiesList.appendChild(li);
        newHobby.value = "";
    }
});

resetItem.addEventListener("click" , function() {
    if(hobbiesList.lastElementChild) {
        hobbiesList.lastElementChild.remove();
    }
});