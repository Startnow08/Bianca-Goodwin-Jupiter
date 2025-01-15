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