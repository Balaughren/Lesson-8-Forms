    // JavaScript code for form validation
	// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
      // Retrieve the input field value
  let inp_val= document.getElementById("inputField").value;
      // Regular expression pattern for alphanumeric input
  let pattern = /^[a-zA-Z0-9]*$/;
      // Check if the input value matches the pattern
  if (inp_val.match(pattern)) {
        // Valid input: display confirmation and submit the form
    alert("Form submitted successfully");
    document.getElementById("form").submit();
  };
        // Invalid input: display error message
  if (!inp_val.match(pattern)) {
    alert("Invalid input. Please enter alphanumeric characters only.");
  };
});