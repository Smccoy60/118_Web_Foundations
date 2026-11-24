# README.md

# Web Development - Week 15

## Weeky 15 - Forms & Input Systems

### Monday Assignment

For the Week 15 Monday assignment, I added a Payroll Question form to the Payroll Help page of my Payroll Hub.  The purpose of the form is to allow a user to enter information about a payroll-related question and receive feedback after submitting the form.

The form includes three input fields:
* Name
* Question Type
* Payroll Question

The Question Type field allows the user to select from Paycheck, Direct Deposit, Tax Withholding, Payroll Deduction or Other.

## Form Submission

I used JavaScript to add a submit event listener to teh form.  I used event.preventDefault() to prevent the page from refreshing when the form is submitted.

payrollQuestionForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

This allows JavaScript to process the submitted information and update the page without reloading it. 

## Reading User Input

When the form is submitted, JavaScript reads the values entered in the three fields.

const nameValue = questionName.value.trim();
const typeValue = questionType.value;
const questionValue = payrollQuestion.value.trim();

I used .trim() on the text fields to remove extra spaces from the beginnign and end of the user's input.

## Input Validation

I added validation to make sure all three fields are completed before the form is successfully submitted.

if (nameValue === "" || typeValue === "" || questionValue === "") {
    questionMessage.textContent = "Please complete all fields befoer submitting your question.";
    return;
}

If any field is empty, the user receives a message asking them to complete all fields. The return statement stops the rest of the submission code from running.

## Sucessful Submission

When all three fields contain information, the page displays a success message that includes the user's name and selected question type. 

questionMessage.textContent - `Thank you, ${nameValue}. Your ${typeValue} question was successfully submitted.`;

After a successful submission, the form is cleared using: 

payrollQuestionForm.reset();

The form is only reset afteer a successful submission.  If the submission is incomplete, information the user already entered remains in the form. 

## Testing

# Empty-Form Testing
I submitted the form without entered any information.  The form displayed: 
- Please complete all fields before submitting your question.
The page did not refresh and the form was not reset.

# Partial-Input Testing
I entered a name and selected a question type but left the Payroll Question field blank.  The same validation message was displayed, and the information already entered remained in the form.

# Valid-Input Testing
I completed all three fields and submitted the form. The form displayed a successful submission message containing the name and question type. 
For example:
- Thank you, Sarah. Your Direct Deposit question was submitted successfully.
After the successful submission, all three form fields were cleared.

# Whitespace Testing
I also tested text input with extra spaces before and after the entered value. Using .trim() removed the extra spaces before the value was processed.

### Monday Work Notes

This assignment added a complete form submission process to the Payroll Hub. The form collects multiple values, prevents the browser's default submission behavior, reads and cleans the submitted values, validates incomplete input, and updates the page with feedback.

I also tested both unsuccessful and successful submissions to make sure incomplete information is preserved while a successfully submitted form is cleared. The new form fits into the existing Payroll Help page because it gives users a way to practice submmitting a payroll-related question without entering confidential or sensitive payroll information. 

#### Wednesday Assignment - Form Refinement and User Feedback

For the Week 15 Wednesday assignment, I refined the Payroll Question form that i created for the Monday assignment. The goal was to improve validation, feedback, instructions, and the overall user experience without changing the main purpose of the form. 

## Error and Success Feedback

I improved teh form so unsuccessful and successful submissions have different visual feedback. When a submission has an error, JavaScript assigns an error class to the message:

questionMessage.className = "form-message error-message";

When the submission is successful, JavaScript assigns a success class:

questionMessage.className = "form-message success-message";

I added CSS to display error messages with a light red background and success messages with a light green background. The messages also contain text explaining the result, so the form does not rely only on color to communicate with the user.

## More Specific Validation

The Monday version displayed one general message when any field was missing. I improved the validation so the user is told exactly which field needs attention.

For example: 
if (nameValue === "") {
    quesitonMessage.textContent = "Please enter your name.";
    questionMessage.className = "form-message error-message";
    questionName.focus();
    return;
}

I added separate validation for the Name, Question Type, and Payroll Question fields.

The possible validation messages are:
* Please enter your name.
* Please select a question type.
* Please enter your payroll question.

## Input Focus

I also used .focus() when validation fails.

For Example:
questionName.focus();

This automatically moves the cursor or focus to the field that needs to be completed. The user does not have to search for the field that caused the validation message. 

## Improved Form Instructions

I updated the instructions above the form to explain that all three fields should be completed. I also added helpful placeholder text to the Name and Payroll QUestion fields.

The original labels remain in place so the placeholders provide additional instructions instead of replacing the field labels. 

## Testing

# Missing Name Test

I submitted the form with all fields blank.  The form displayed: 

Please enter your name.

Focus moved to the Name field.

## Missing Question Type Test

I entered a name but did not select a Question Type.  The form displayed:

Please select a question type.

Focus moved to the Question Type field.

## Missing Payroll Question Test

I entered a name and selected a Question Type but left the Payroll Question blank. The form displayed:

Please enter your payroll question

Focus moved to the Payroll Question field.

## Sucessful Submission Test

I completed all three fields and submitted the form.  The form displayed the green success message containign the user's name and selected question type.  The form reset after the successful submission.

### Wednesday Work Notes

The Wednesday changes improved teh form without changing its original purpose. The form now gives clearer instructions before submission, identifies the specific field that is missing, moves focus to the field that needs attention, and visually distinguishes errors from successful submissions.

I also retested the successful submission process after making the changes to make sure the original Monday functionality still worked correctly. 


