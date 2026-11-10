// Find the resource search box
const resourceSearch = document.querySelector("#resourceSearch");

// Find all three searchable resource sections
const resourceItems = document.querySelectorAll(".resource-item");

// Find the paragraph used for visible result count
const filterStatus = document.querySelector("#filterStatus");

// Count how many times the filter function runs
let filterRunCount = 0;

// Show the starting number of resource sections
filterStatus.textContent = `${resourceItems.length} resource section(s) shown`;

// Show every resource section
function showAllResources() {
    resourceItems.forEach(function (item) {
        item.hidden = false;
    });
}

// Filter the Payroll Administration Resources
function filterResources() {
    filterRunCount++;
    console.log(`Filter runs: ${filterRunCount}`);

    // Get the original value entered by the user
    const originalSearchText = resourceSearch.value;

    // Remove beginning and ending spaces
    const searchText = originalSearchText.trim();

    // Test 1 protection: handle empty or whitespace-only search
    if (searchText === "") {
        showAllResources();
        filterStatus.textContent = "Please enter a search term. All resource sections are shown.";
        console.log("Empty or whitespace-only search prevented");
        return;
    }

    // Convert the search value to lowercase for comparison
    const normalizedSearchText = searchText.toLowerCase();

    // Begin with zero visible matching sections
    let visibleCount = 0;

    // Examine each Resource section
    resourceItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();
        const isMatch = itemText.includes(normalizedSearchText);
        item.hidden = !isMatch;
        if (isMatch) {
            visibleCount++;
        }
    });
    
    // Give clear feedback when no matches are found
    if (visibleCount === 0) {
        filterStatus.textContent = 
            `No resources found for "${searchText}". Please try another search.`;
        console.log("No matching resource sections found.");
        return;
    }

    // Safely display the successful search result
    filterStatus.textContent = 
        `${visibleCount} resource section(s) found for "$(searchText)".`;
}

// Remember the current filter timer
let filterTimer;

// Wait until the user stops typing
resourceSearch.addEventListener("input", function () {
    //Cancel the timer from the previous input event
    clearTimeout(filterTimer);

    // Start a new timer
    filterTimer = setTimeout(function () {
        filterResources();
    }, 300);
});

// Payroll Processing Checklist Section

// Find the checklist elements on the page
const checklistTitle = document.querySelector("#checklistTitle");
const checklistItems = document.querySelectorAll("#checklistItems");
const checklistStatus = document.querySelector("#checklistStatus");
const progressFill = document.querySelector("#progressFill");
const progressPercent = document.querySelector("#progressPercent");
const resetChecklist = document.querySelector("#resetChecklist");
const checklistMessage = document.querySelector("#checklistMessage");

// Store the payroll checklist tasks
let payrollTasks = [];

// Load the payroll checklist from the JSON File
async function loadPayrollChecklist() {
    try {
        const response = await fetch("payroll_checklist.json");
        if (!response.ok) {
            throw new Error("The payroll checklist could not be loaded");
        }
        const data = await response.json();
        payrollTasks = data.tasks;
        checklistTitle.textContent = data.title;
        displayChecklist();
    } catch (error) {
        checklistItems.textContent = "The payroll checklist is unavailable. Please try again later.";
        console.error("Checklist error:", error);
    }
}

// Display the payroll checklist
function displayChecklist() {
    checklistItems.textContent = "";
    payrollTasks.forEach(function (task) {
        const checklistItem = document.createElement("div");
        checklistItem.classList.add("checklist-item");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
        const label = document.createElement("label");
        label.htmlFor = task.id;
        label.textContent = task.text;
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                checklistItem.classList.add("completed");
            } else {
                checklistItem.classList.remove("completed");
            }
            updatedChecklistProgress();
            });
        checklistItem.appendChild(checkbox);
        checklistItem.appendChild(label);
        checklistItems.appendChild(checklistItem);
        });
    updateChecklistProgress();
}

// Update the checklist progress
function updateChecklistProgress () {
    const checkboxes = checklistItems.querySelectorAll(`input[type="checkbox"]`);
    const checkedBoxes = checklistItems.querySelectorALL(`input[type="checkbox"]:checked`);
    const completedCount = checkedBoxes.length;
    const totalCount = checkboxes.length;
    let percentComplete = 0;
    if (totalCount > 0) {
        percentComplete = Math.round(
            (completedCount / totalCount) * 100);
    }
    checklistStatus.textContent = `${completedCount} of ${totalCount} tasks completed`;
    progressPercent.textContent = `${percentComplete}% Complete`;
    progressFill.style.width = `${percentComplete}%`;
}

// Reset the payroll checklist
resetChecklist.addEventListener("click", function () {
    const checkboxes = checklistItems.querySelectorAll(`input[type="checkbox"]`);
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
        checkbox
            .closest(".checklist-item")
            .classList.remove("completed");
    });
    updateChecklistProgress();
    checklistMessage.textContent = "Payroll checklist has been reset.";
});

// Load the checklist when the page opens
loadPayrollChecklist();
