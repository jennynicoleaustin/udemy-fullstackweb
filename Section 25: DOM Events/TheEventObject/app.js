
// returns an Event object
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// --- look at the object to determine which keys are being pressed....
// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key) // the input that resulted from pressing a key
//     console.log(e.code) // the code associated with the particular key pressed on the keyboard, specific to its location.
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })


// Check to see if they have pressed any of these keys
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!")
    }
})