// Toggle Password
function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Signup Validation
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = name.value.trim();
  let email = email.value.trim();
  let phone = phone.value.trim();
  let city = city.value.trim();
  let password = password.value;
  let confirmPassword = confirmPassword.value;

  let phonePattern = /^[0-9]{10}$/;
  let cityPattern = /^[A-Za-z ]+$/;
  let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!name || !email || !phone || !city || !password || !confirmPassword) {
    alert("All fields are required");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone must be 10 digits");
    return;
  }

  if (!cityPattern.test(city)) {
    alert("City must contain only letters");
    return;
  }

  if (!passPattern.test(password)) {
    alert("Password must be 8+ characters with letters and numbers");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful!");
  window.location.href = "signin.html";
});

// Signin Validation
document.getElementById("signinForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = loginEmail.value;
  let password = loginPassword.value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Login Successful!");
    window.location.href = "travelapp.html";
  } else {
    alert("Invalid credentials");
  }
});

function buyTour(tourName) {
  alert("🎉 Successfully purchased the " + tourName + " package! Have a wonderful journey!");
}
