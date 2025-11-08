let username = "JavaScript";

const createMessage = name => {
    console.log("createMessage called");
    return `Hello, ${name}!`;
};

function getName() {
    const textInput = document.getElementById("nameInput");
    name = textInput.value.trim();
    console.log("Name set to:", name);
}
