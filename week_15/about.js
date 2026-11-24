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

    // Check for empty fields
    if (nameValue === "" || typeValue === "" || questionValue === "") {
        questionMessage.textContent = "Please complete all fields before submitting your question.";
        return;
    }

    // Show the values in the console for testing
    console.log("Name:", nameValue);
    console.log("QuestionT Type:", typeValue);
    console.log("Payroll Quesiton:", questionValue);

    // Show a success message
    questionMessage.textContent = `Thank you, ${nameValue}. Your ${typeValue} question was submitted successfully.`;

    // Clear the form after a successful submission
    payrollQuestionForm.reset();
});