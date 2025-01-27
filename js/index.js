//create footer and add it to the body
const footer = document.createElement('footer')
const body = document.querySelector('body')
body.appendChild(footer)

//Add a copyright to the footer
const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('')
copyright.innerHTML = `<span>&#169 ${year} Bianca<\span>`
footer.appendChild(copyright)

//populate the skills list
const skillsList = ['python', 'javascript', 'excel'];
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

//to put items in a list one by one use for of
for (let skill of skillsList){
    let skillsLI = document.createElement('li');
    skillsLI.innerHTML = skill;
    skillsUL.appendChild(skillsLI);
}

const messageForm = document.querySelector("[name=leave_message']");


messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.userName.value;
    let email = event.targer.UsersEmail.value;
    let message = event.target.usersMessage.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    let messageSection = document.getElementbyId("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="malito: ${email}">${name} </a><span>wrote: ${message} </span>`
    messageForm.reset();
})

const removeButton = document.createElement("BUTTON");
removeButton.innerText = "Remove";



function onRemoveButton(event){
    const entry = event.target.parentNode;
    entry.remove();
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", onRemoveButton);

    
}


newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);