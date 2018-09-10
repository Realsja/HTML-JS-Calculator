function insert(num) {
    document.calculator.textview.value = document.calculator.textview.value + num;
}

function clean() {
    document.calculator.textview.value = "";
}

function equals() {
    var exp = document.calculator.textview.value;
    if(exp) {
        document.calculator.textview.value = eval(exp);
    }
}

