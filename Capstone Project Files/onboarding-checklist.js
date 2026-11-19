// NEW HIRE ONBOARDING CHECKLIST //

// Find the checklist elements
const onboardingTasks = document.querySelectorAll('.onboarding-page input[type="checkbox"]');
const onboardingStatus = document.querySelector("#onboardingStatus");
const onboardingProgressFill = document.querySelector("#onboardingProgressFill");
const onboardingPercent = document.querySelector("#onboardingPercent");

const saveOnboarding = document.querySelector("#saveOnboarding");
const clearOnboarding = document.querySelector("#clearOnboarding");
const onboardingMessage = document.querySelector("#onboardingMessage");

// Find employee information fields

const employeeName = document.querySelector("#employeeName");
const employeeNumber = document.querySelector("#employeeNumber");
const jobTitle = document.querySelector("#jobTitle");
const department = document.querySelector("#department");
const supervisor = document.querySelector("#supervisor");
const startDate = document.querySelector("#startDate");
const benefitsDate = document.querySelector("#benefitsDate");
const payRate = document.querySelector("#payRate");
const annualHours = document.querySelector("#annualHours");

// Find benefit enrollment fields
const benefitFields = document.querySelectorAll(".benefit-details select, .benefit-details input[type='date']");

// Update checklist progress
function updateOnboardingProgress() {
    const totalTasks = onboardingTasks.length;
    let completedTasks = 0;
    onboardingTasks.forEach(function (checkbox) {
        if (checkbox.checked) {
            completedTasks++;
        }
    });
    let percentComplete = 0;
    if (totalTasks > 0) {
        percentComplete = Math.round((completedTasks / totalTasks) * 100);
    }

    onboardingStatus.textContent = `${completedTasks} of ${totalTasks} tasks completed`;
    onboardingPercent.textContent = `${percentComplete}% Complete`;
    onboardingProgressFill.style.width = `${percentComplete}%`;
}

// Checklist Item Changes
onboardingTasks.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        const taskRow = checkbox.closest(".onboarding-task");
        if (checkbox.checked) {
            taskRow.classList.add("completed");
        } else {
            taskRow.classList.remove("completed");
        }
        updateOnboardingProgress();
    });
});

// Save onboarding checklist
saveOnboarding.addEventListener("click", function () {
    const checklistData = {
        employeeInformation: {
            employeeName: employeeName.value,
            employeeNumber: employeeNumber.value,
            startDate: startDate.value,
            jobTitle: jobTitle.value,
            department: department.value,
            supervisor: supervisor.value,
            benefitsDate: benefitsDate.value,
            payRate: payRate.value,
            annualHours: annualHours.value
        },
        tasks: {},
        benefits: {}
    };

    // Save checkbox states
    
    onboardingTasks.forEach(function (checkbox) {
        checklistData.tasks[checkbox.id] = checkbox.checked;
    });

    //Save benefit selections and dates
    benefitFields.forEach(function (field) {
        checklistData.benefits[field.id] = field.value;
    });

    // Save everything to localStorage
    localStorage.setItem("onboardingChecklist", JSON.stringify(checklistData));
    onboardingMessage.textContent = "Onboarding checklist saved!";
});

// Load Saved Checklist
function loadSavedChecklist() {
    const savedChecklist = localStorage.getItem("onboardingChecklist");
    if (!savedChecklist) {
        updateOnboardingProgress();
        return;
    }
    const checklistData = JSON.parse(savedChecklist);
    onboardingTasks.forEach(function (checkbox) {
        if (checklistData[checkbox.id] === true) {
            checkbox.checked = true;
            checkbox
                .closest(".onboarding-task")
                .classList.add("completed");
            }
    });
    updateOnboardingProgress();
}

// Start new employee
clearOnboarding.addEventListener("click", function () {
    onboardingTasks.forEach(function (checkbox) {
        checkbox.checked = false;
        checkbox
            .closest(".onboarding-task")
            .classList.remove("completed");    
    });
    localStorage.removeItem("onboardingChecklist");

    updateOnboardingProgress();
    onboardingMessage.textContent = "Checklist cleared and ready for a new employee";
});

// Load the saved checklist on page load
loadSavedChecklist();