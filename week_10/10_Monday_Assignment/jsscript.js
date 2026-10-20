const button = document.getElementById("predictBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
    console.log(data);
    result.textContent = `${data.name} is predicted to be ${data.age} years old.`;
    })
        .catch(error => {
    console.error(error);
    result.textContent = "Error retrieving data";
        });
});