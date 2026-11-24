// Payroll Question Form //

// Find the payroll question form
const payrollQuestionForm = document.querySelector("#payrollQuestionForm");

// Find the form fields

const questionName = document.querySelector("#questionName");
const questionType = document.querySelector("#questionType");
const payrollQuestion = document.querySelector("#payrollQuestion");

// Find the message area
const questionMessage = document.querySelector("#questionMessage");

// Listen for the form to be submitted 

payrollQuestionForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault()
    
    // Read the values entered by the user
    const nameValue = questionName.value.trim();
    const typeValue = questionType.value.trim();
    const questionValue = payrollQuestion.value.trim();

    // Check the name field
    if (nameValue === "") {
        questionMessage.textContent = "Please enter your name.";
        questionMessage.className = "form-message error-message";
        questionName.focus();
        return;
    }

    // Check the question type
    if (typeValue === "") {
        questionMessage.textContent = "Please select a question type.";
        questionMessage.className = "form-message error-message";
        questionType.focus();
        return;
    }

    // Check the payroll question
    if (questionValue === "") {
        questionMessage.textContent = "Please enter your payroll question.";
        questionMessage.className = "form-message error-message";
        payrollQuestion.focus();
        return;
    }

    // Show the values in the console for testing
    console.log("Name:", nameValue);
    console.log("Question Type:", typeValue);
    console.log("Payroll Question:", questionValue);

    // Show a success message
    questionMessage.textContent = `Thank you, ${nameValue}. Your ${typeValue} question was submitted successfully.`;
    questionMessage.className = "form-message success-message";

    // Clear the form after a successful submission
    payrollQuestionForm.reset();
});