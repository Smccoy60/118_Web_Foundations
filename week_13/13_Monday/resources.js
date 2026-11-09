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
    filterTTimer = setTimeout(function () {
        filterResources();
    }, 300);
});