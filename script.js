document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Example: Log the data (you can send to a server here)
  console.log("User Info:", { name, email, password });

  alert("Signup successful! 🎉");

  // Clear the form
  this.reset();
});
