import { auth } from "./firebase.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";

// Helper function to handle login
const handleLogin = () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Welcome back, ${user.email}!`);
          // Redirect to dashboard or typing contest page
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          alert("Error logging in: " + error.message);
        });
    });
  }
};

// Helper function to handle signup
const handleSignup = () => {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Account created successfully for ${user.email}`);
          // Redirect to login page
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    });
  }
};

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  handleLogin();
  handleSignup();
});


const words = 'The quick brown fox jumps over the lazy dog The shimmering glow of the distant aurora danced across the endless horizon painting the night sky with hues of emerald and violet A gentle breeze whispered through the towering pines carrying with it the scent of fresh rain and earth Beneath the canopy of stars an old wooden cabin stood in serene solitude its weathered walls telling stories of seasons long past Inside the crackling fireplace cast flickering shadows illuminating shelves filled with books that seemed to hum with secrets waiting to be uncovered Amid the calm a subtle vibration disturbed the stillness a signal from a world beyond this tranquil haven pulling the dreamer back into a reality as enigmatic as the night itself'.split(' ');
const wordsCount = words.length;

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWord(word) {
 return `<div class="word">${word}</div>`;
}

function newGame() {
  document.getElementById('words').innerHTML = '';
  for(let i = 0; i < 200; i++) {
    document.getElementById('words').innerHTML += formatWord(randomWord());
  }
}

newGame();


let a = document.querySelector(".top3");
a.addEventListener("mousemove",function(){
    console.log("Button clicked");
    a.style.backgroundColor = "red";
    a.style.color = "white";
});