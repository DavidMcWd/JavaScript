const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('fucker');
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!"
blue.style.cssText = 'color: blue';
container.appendChild(blue);

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'background: pink; bordercolor: black; border: solid;');
container.appendChild(newDiv);

const newDivHeader = document.createElement('h1');
newDivHeader.textContent = "I'm in a div";
newDiv.appendChild(newDivHeader);

const newDivParagraph = document.createElement('p');
newDivParagraph.textContent = "ME TOO!";
newDiv.appendChild(newDivParagraph);

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    alert("Hello World");
})


//some examples of callback functions
btn.addEventListener('click', function(e)  {
    console.log(e.target);
})  //log when the button is clicked

btn.addEventListener('click', function(e)  {
    e.target.style.background = 'blue';
})  //turn the button blue after button is clicked

// different callback function example from above
const notes = ['do', 'ray', 'me'];

notes.forEach((note) => console.log(note));

notes.forEach(function(note) {
    console.log(note);
})

notes.forEach(console.log);