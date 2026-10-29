const button = document.getElementById("dogBtn");
const result = document.getElementById("message");
const dogContainer = document.getElementById("dogContainer");
const dogCountDisplay = document.getElementById("dogCount");

let dogCount = 0;

const DOG_COUNT_KEY = "dogCount";

function updateDogCount() {
    dogCount++;
    saveDogCount();
    renderDogCount();
    }

function renderDogCount() {
    dogCountDisplay.textContent = `Dogs Generated: ${dogCount}`;
}

function saveDogCount() {
    localStorage.setItem(DOG_COUNT_KEY, dogCount);
}

function restoreDogCount() {
    const savedCount = localStorage.getItem(DOG_COUNT_KEY);
    if (savedCount !== null) {
        dogCount = Number(savedCount);
    }
    renderDogCount();
}

button.addEventListener("click", () => {
    result.textContent = "Loading dog image...";
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            dogContainer.innerHTML = "";
            const dogImage = document.createElement("img");
            dogImage.src = data.message
            dogImage.alt = "Random Dog";
            dogImage.width = 400;
            dogContainer.appendChild(dogImage);
            updateDogCount();
            result.textContent = "Success! Dog image loaded.";
        })
        .catch(error => {
            console.error(error);
            result.textContent = "Unable to load dog image";
        });
});

restoreDogCount();