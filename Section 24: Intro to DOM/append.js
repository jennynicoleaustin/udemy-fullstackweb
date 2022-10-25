// :::: Append and Append Child

// Creating this new element only creates an empty img element
const newImg = document.createElement('img')

newImg.src = 'paste img source here'

// appendChild
// adds this to the last position in the body
document.body.appendChild(newImg)

// Append
// more flexible, can insert more than one item at a time, can pass in text as a string.
//appending as the last child of an element

// prepend
//adds as first child of an element.

// insertAdjacentElement
// targetElement.insertAdjacentElement(position, element)

//Append Exercise
//Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:
//
// Create exactly 100 new button elements
//
// Each button must have some text inside of it (it doesn't matter what)
//
// Each button must be appended inside the container div.
//Hint: Loop 100 times. Inside the loop, create a new empty button element.  Add some innerText to the button.  Use appendChild to add the button
let i = 1
while (i < 100) {
    i++
    const newButton = document.createElement('button')

    newButton.innerText = '!!BUTTON!!'

    const container = document.querySelector('div')

    container.appendChild(newButton)
}

