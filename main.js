// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like-glyph');
console.log(likeButtons);

likeButtons.forEach(function (likeButton) {
  likeButton.addEventListener('click', handleLikeButton);
});

function handleLikeButton(event) {
  mimicServerCall()
  .then(() => {
    const heart = event.target;
    if(heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART;
      heart.className = 'like-glyph activated-heart';
    } 
    else {
      heart.innerHTML = EMPTY_HEART;
      heart.className = 'like-glyph';
    }
  }).catch((error) => {
    const div = document.getElementById('modal');
    div.className = "";
    document.getElementById('modal-message').innerHTML = error;
    setTimeout(() => div.className = "hidden", 3000);
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
