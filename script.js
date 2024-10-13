const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".enter");
const field = document.querySelector(".input-container");

// Regular expression to check for at least one uppercase letter, one lowercase letter, one special character, and a minimum length of 8 characters
const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$\^]).{8,}$/;

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission or page reload

  const inputValue = input.value;
  const isValid = valid.test(inputValue); // Test for valid characters

  // Clear previous result messages
  const previousResult = document.querySelector(".res");
  if (previousResult) {
    previousResult.remove();
  }

  // Call the function to display the result
  displayResult(isValid);
});

// Function to display the result
function displayResult(isValid) {
  const show = document.createElement("div");
  show.classList.add("res"); // Add a class for styling
  field.appendChild(show);

  if (isValid) {
    console.log("valid password");
    show.textContent = "Valid password."; // Set text for the valid message
    show.style.backgroundColor = "green"; // Set background color to green
    show.style.color = "white"; // Change text color to white for better contrast
  } else {
    console.log("invalid password");
    show.textContent = "Invalid password."; // Set text for the invalid message
    show.style.backgroundColor = "red"; // Set background color to red
    show.style.color = "white"; // Change text color to white for better contrast
  }
}
