function appendOperation(operation) {
    document.getElementById("result").innerHTML += operation;
}

function calculate() {
    let container = document.getElementById("result");
    let result = eval(container.innerHTML);
    container.innerHTML = result
}

function clear_result() {
    let container = document.getElementById("result");
    container.innerHTML = "";
}