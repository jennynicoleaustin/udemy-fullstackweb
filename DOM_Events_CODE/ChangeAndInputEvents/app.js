

const input = document.querySelector('input');
const h1 = document.querySelector('h1');


// only works when you click outside the element, the ":change is when you you leave
// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

// updating an input based on any input that is placed in the form space
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})
// this event will update the inner text in live as you type