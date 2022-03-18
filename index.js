const userInput = {
    name: "Steve",
    email: "steve@steve.com",
};

const userObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userInput),
};

function submitData() {
    return fetch("http://localhost:3000/users", userObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object.id);
            document.querySelector("body").textContent = object.id
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            console.log(error.message);
            document.querySelector("body").textContent = error.message
        });
}





// 1. Look at your console.log of the response
// 2. Once you do that add that to the Dom
// 3. Google: how to add an element to the dom
