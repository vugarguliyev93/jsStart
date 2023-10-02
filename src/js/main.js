function PromptFunction() {
    let text = document.getElementById("proText").innerHTML;

    let age = prompt("Write age")
    age < 18 ? alert("Get boyu") : document.getElementById("proText").innerHTML = "Boyudun";
}
