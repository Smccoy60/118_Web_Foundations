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

// Filter the Payroll Administration Resources
function filterResources() {
    filterRunCount++;
    console.log(`Filter runs: ${filterRunCount}`);

    // Get and normalize what the user typed
    const searchText = resourceSearch.value
        .toLowerCase()
        .trim();
    
    // Begin with zero visible matching sections
    let visibleCount = 0;
    // Examine each resource section
    resourceItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();
        const isMatch = itemText.includes(searchText);
        item.hidden = !isMatch;
        if (isMatch) {
            visibleCount++;
        }
    });
    
    // Display the number of visible sections
    filterStatus.textContent = `${visibleCount} resource section(s) shown`;
}

// Remember the current filter timer
let filterTimer;

// AFTER: Wait until the user stops typing
resourceSearch.addEventListener("input", function () {
    //Cancel the timer from the previous input
    clearTimeout(filterTimer);
    // Start a new timer
    filterTimer = setTimeout(function () {
        filterResources();
    }, 300);
})