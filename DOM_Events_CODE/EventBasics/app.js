// Select the button via the doc querySelector
const btn = document.querySelector('#v2');

// the onclick value must be wrapped in a function, even if you are calling another function inside of it.
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

// You do not add the () because YOU are not calling the function. the user is calling the function on the mouseenter
btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// THIS IS THE PREFERRED METHOD FOR ADDING A VALUE ON THE CLICK OR OTHER EVENT
/* Why use event listener?
    additional "options" { objects } can be set.
    check addEventListener() - on MDN docs
 */

// you can add the function inline as the listener...
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

//OR add the listener as a function... just don't forget you do not need the () add the end of the function.
function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// you can only have one onclick, but you can set multiple eventlisteners
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
