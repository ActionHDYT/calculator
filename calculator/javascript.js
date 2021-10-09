function appendOperation(operation) {
    document.getElementById("result").innerHTML += operation;
}

function calculate() {
    let container = document.getElementById("result");
    let result = eval(container.innerHTML);
    container.innerHTML = result
}

function clear() {
    container.innerHTML = ''
    
}