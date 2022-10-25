const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// Modify to add an additional feature like delete.

//-- This example works on existing lis but for lis that are created with the form submission
// This canNOT see into the future, it can't predict the lis you're going to create via js

const lis = document.querySelectorAll('li')
for (let li of lis) {
    li.addEventListener('click', () => {
        li.remove();
    })
}


// The solution is to add the event listen to a parent of the future element
// WHERE you click is a property called "target" in the event object - in order to.
//- So in the below case the ul is clicked and the target is the li that was clicked
tweetsContainer.addEventListener('click', (e) => {
    e.target.remove();
})

//If you want to check to make sure the right target was clicked you can use....
tweetsContainer.addEventListener('click', (e) => {
    e.target.nodeName === 'li' && e.target.remove(); // this is the same as "if (e.target.nodeName === 'li) {e.target.remove()}

})


tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

