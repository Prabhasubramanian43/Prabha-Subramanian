function showMessage() {
    alert("Welcome to My Website!");
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("result").textContent =
            "Please fill all fields.";
        return;
    }

    document.getElementById("result").textContent =
        `Thank you ${name}! Your message has been submitted.`;

    document.querySelector("form").reset();
}