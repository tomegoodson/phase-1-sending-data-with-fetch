function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const body = document.querySelector('body');
            body.innerHTML = `ID: ${data.id}`;
        })
        .catch(error => {
            console.error('Error:', error);
            const body = document.querySelector('body');
            body.innerHTML = `Error: ${error.message}`;
        });
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitData(e.target.name.value, e.target.email.value);
});