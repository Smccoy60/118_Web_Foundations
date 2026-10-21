const button = document.getElementById("dogBtn");
const result = document.getElementById("message");
const dogContainer = document.getElementById("dogContainer");

let dogCount = 0;

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
            dogCount++;
            result.textContent = `Success! Dog image loaded. Dogs viewed: ${dogCount}`;
        })
        .catch(error => {
            console.error(error);
            result.textContent = "Unable to load dog image";
        });
});