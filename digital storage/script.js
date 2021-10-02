const output = document.getElementById('output');
const sectionFrom = document.getElementById('sectionFrom');
const sectionTo = document.getElementById('sectionTo');
const value = document.getElementById('value');

value.addEventListener('keyup', calculate);
function calculate() {
    var sectionFromValue = sectionFrom.value;
    var sectionToValue= sectionTo.value;

    var val = value.value;
    if(sectionFromValue == "bit" && sectionToValue == "byte") {
        output.style.display = 'block';
        output.value = val / 8;
        
    }else if(sectionFromValue == "byte" && sectionToValue == "megabyte") {
        output.style.display = 'block';
        output.value = val / 1000000;

    }else if(sectionFromValue == "megabyte" && sectionToValue == "gigabyte") {
        output.style.display = 'block';
        output.value = val / 1000;

    }else if(sectionFromValue == "gigabyte" && sectionToValue == "terabyte") {
        output.style.display = 'block';
        output.value = val / 1000;

    }else if(sectionFromValue == "byte" && sectionToValue == "bit") {
        output.style.display = 'block';
        output.value = val / 8;

    }else if(sectionFromValue == "megabyte" && sectionToValue == "megabyte") {
        output.style.display = 'block';
        output.value = "Invalid Input";
        output.style.color = 'red';

    }else if(sectionFromValue == "byte" && sectionToValue == "byte") {
        output.style.display = 'block';
        output.value = "Invalid Input";
        output.style.color = 'red';

    }else if(sectionFromValue == "gigabyte" && sectionToValue == "gigabyte") {
        output.style.display = 'block';
        output.value = "Invalid Input";
        output.style.color = 'red';

    }else if(sectionFromValue == "terabyte" && sectionToValue == "terabyte") {
        output.style.display = 'block';
        output.value = "Invalid Input";
        output.style.color = 'red';

    }else if(sectionFromValue == "bit" && sectionToValue == "bit") {
        output.style.display = 'block';
        output.value = "Invalid Input";
        output.style.color = 'red';
    }
        

}
