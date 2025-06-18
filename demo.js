// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 

// Step 1: Get all heart elements
const articleHearts = document.querySelectorAll('.like-glyph');


// Step 2: Simulate server call
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Randomly fail 20% of the time
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


// Step 3: Add event listeners to hearts
articleHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        heart.classList.toggle('activated-heart');
        heart.textContent = heart.textContent === '♡' ? '♥' : '♡';
      })
      .catch(error => {
        alert("Something went wrong: " + error);
      });
  });
});

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
