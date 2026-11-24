// EMPLOYEE OFFBOARDING CHECKLIST //

// Find the checklist elements
const offboardingTasks = document.querySelectorAll('.onboarding-page input[type="checkbox"]');
const offboardingStatus = document.querySelector("#onboardingStatus");
const offboardingProgressFill = document.querySelector("#onboardingProgressFill");
const offboardingPercent = document.querySelector("#onboardingPercent");

// Find buttonsand message area
const saveOffboarding = document.querySelector("#saveOffboarding");
const clearOffboarding = document.querySelector("#clearOffboarding");
const offboardingMessage = document.querySelector("#offboardingMessage");

// Find emloyee and separation information
const employeeName = document.querySelector("#employeeName");
const employeeNumber = document.querySelector("#employeeNumber");
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
        const taskRow = checkbox.closest(".onboarding-task");
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
            employeeNumber: employeeNumber.value,
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

// Load saved offboarding checklist
function loadSavedOffboardingChecklist() {
    const savedChecklist = localStorage.getItem("offboardingChecklist");
    if (!savedChecklist) {
        updateOffboardingProgress();
        return;
    }

    const checklistData = JSON.parse(savedChecklist);
    // Load employee and separation information
    if (checklistData.employeeInformation) {
        employeeName.value = checklistData.employeeInformation.employeeName || "";
        employeeNumber.value = checklistData.employeeInformation.employeeNumber || "";
        jobTitle.value = checklistData.employeeInformation.jobTitle || "";
        department.value = checklistData.employeeInformation.department || "";
        lastDayWorked.value = checklistData.employeeInformation.lastDayWorked || "";
        benefitsLastDay.value = checklistData.employeeInformation.benefitsLastDay || "";
        terminationDate.value = checklistData.employeeInformation.terminationDate || "";
        terminationReason.value = checklistData.employeeInformation.terminationReason || "";
        annualSalary.value = checklistData.employeeInformation.annualSalary || "";
    }
    // Load checkbox states
    if (checklistData.tasks) {
        offboardingTasks.forEach(function (checkbox) {
            checkbox.checked =
                checklistData.tasks[checkbox.id] === true;
            const taskRow = checkbox.closest(".onboarding-task");
                if (taskRow) {
                    if (checkbox.checked) {
                        taskRow.classList.add("completed");
                    } else {
                        taskRow.classList.remove("completed");
                    }
                }
            });
    }

    // Load dates, selections, and numbers
    if (checklistData.fields) {
        offboardingFields.forEach(function (field) {
            if (checklistData.fields[field.id] !== undefined) {
                field.value = checklistData.fields[field.id];
            }
        });
    }

// Recalculate progress
    loadSavedOffboardingProgress();
}

