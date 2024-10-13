const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".enter");
const field = document.querySelector(".input-container");
const message = document.createElement("div");

// Regular expression to check for at least one uppercase letter, one lowercase letter, one special character, and a minimum length of 8 characters
const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$\^]).{8,}$/;

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission or page reload

  const inputValue = input.value;
  const isValid = valid.test(inputValue); // Test for valid characters

  // Remove any previous messages before showing new ones
  removeMessage();

  // Call the function to display the result with appropriate message and color
  if (isValid) {
    displayResult("Valid password.", "green");
  } else {
    displayResult("Invalid password.", "red");
  }
});

// Function to display the result with message and color
function displayResult(text, color) {
  message.classList.add("res"); // Add a class for styling
  message.textContent = text; // Set the message text
  message.style.backgroundColor = color; // Set the background color
  message.style.color = "white"; // Change text color to white for better contrast
  field.appendChild(message); // Append the message to the container
}

// Function to remove the message when user starts typing
input.addEventListener("input", removeMessage);

function removeMessage() {
  if (field.contains(message)) {
    field.removeChild(message);
  }
}
