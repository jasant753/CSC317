let name = "JavaScript";

const createMessage = name => {
    if (typeof document !== "undefined") {
        console.log("createMessage called");
    }
    return `Hello, ${name}!`;
};

function getName() {
    const textInput = document.getElementById("nameInput");
    name = textInput.value.trim();
    console.log("Name set to:", name);
}

console.log(createMessage(name));