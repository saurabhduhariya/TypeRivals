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
