// EMPLOYEE OFFBOARDING CHECKLIST //

// Find the checklist elements
const offboardingTasks = document.querySelectorAll('.offboarding-page input[type="checkbox"]');
const offboardingStatus = document.querySelector("#onboardingStatus");
const offboardingProgressFill = document.querySelector("#onboardingProgressFill");
const offboardingPercent = document.querySelector("#onboardingPercent");

// Find buttonsand message area
const saveOffboarding = document.querySelector("#saveOffboarding");
const clearOffboarding = document.querySelector("#clearOffboarding");
const offboardingMessage = document.querySelector("#offboardingMessage");

// Find emloyee and separation information
const employeeName = document.querySelector("#employeeName");
const employeeID = document.querySelector("#employeeID");
const jobTitle = document.querySelector("#jobTitle");
const department = document.querySelector("#department");
const lastDayWorked = document.querySelector("#lastDayWorked");
const benefitsLastDay = document.querySelector("#benefitsLastDay");
const terminationDate = document.querySelector("#terminationDate");
const terminationReason = document.querySelector("#terminationReason");
const annualSalary = document.querySelector("#annualSalary");

// Final all additional offboarding information
const offboardingFields = document.querySelectorAll(
    `.onboarding-section select, .onboarding-section input[type="date"], .onboarding-section input[type="number"]`
);

// Update checklist progress
function updateOffboardingProgress() {
    const totalTasks = offboardingTasks.length;
    let completedTasks = 0;
    offboardingTasks.forEach(function (checkbox) {
        if (checkbox.checked) {
            completedTasks++;
        }
    });
    let percentComplete = 0;
    if (totalTasks > 0) {
        percentComplete = Math.round((completedTasks / totalTasks) * 100);
    }

    offboardingStatus.textContent = `${completedTasks} of ${totalTasks} tasks completed`;
    offboardingPercent.textContent = `${percentComplete}% Complete`;
    offboardingProgressFill.style.width = `${percentComplete}%`;
}

// Listen for checklist changes
offboardingTasks.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        const taskRow = checkbox.closest(".offboarding-task");
        if (checkbox.checked) {
            taskRow.classList.add("completed");
        } else {
            taskRow.classList.remove("completed");
        }
        updateOffboardingProgress();
    });
});

// Save offboarding checklist
saveOffboarding.addEventListener("click", function () {
    const checklistData = {
        employeeInformation: {
            employeeName: employeeName.value,
            employeeID: employeeID.value,
            jobTitle: jobTitle.value,
            department: department.value,
            lastDayWorked: lastDayWorked.value,
            benefitsLastDay: benefitsLastDay.value,
            terminationDate: terminationDate.value,
            terminationReason: terminationReason.value,
            annualSalary: annualSalary.value
        },
        tasks: {},
        fields: {}
    };

    // Save Checkbox States
    offboardingTasks.forEach(function (checkbox) {
        checklistData.tasks[checkbox.id] = checkbox.checked;
    });

    // Save Additional selections, dates, and numbers
    offboardingFields.forEach(function (field) {
        checklistData.fields[field.id] = field.value;
    });

    // Save everything to localStorage
    localStorage.setItem("offboardingChecklist", JSON.stringify(checklistData));
    offboardingMessage.textContent = "Offboarding checklist saved successfully.";
});

// Set starting progress
updateOffboardingProgress();