console.log("in script.js")
let storedSalary = [];
$(document).ready(readyNow);


function readyNow() {
    console.log("in readyNow");
    $('#submitButton').on('click', inputInfo);
    $('tbody').on('click', '.deleteButton', deleteInfo);
    $('#annualSalaryInput').keyup(function () { 
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });//I wanted a way to keep out bad inputs
}// end readynow

function inputInfo() {
    $('.numbersOnly').keyup(function () { 
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
    console.log("in inputField");
    const nameValue = $('#firstNameInput').val();
    const lastNameValue = $('#lastNameInput').val();
    const idValue = $('#employeeNumberInput').val();
    const jobTitle = $('#jobTitleInput').val();
    const annualSalaryValue = $('#annualSalaryInput').val();
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    if ((nameValue==='')||(lastNameValue==='')||(idValue==='')||(jobTitle==='')||(annualSalaryValue==='')){
        return alert("Please fill in all fields");
    } if  ((annualSalaryValue))
    console.log(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue);
    storingSalary(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue);
    $('tbody').append(`
    <tr>
        <td>${nameValue}</td>
        <td>${lastNameValue}</td>
        <td class='inputClass' >${idValue}</td>
                //because employees could have the same name, I will check my array based on the employee number
        <td>${jobTitle}</td>
        <td>${makeCurrency(annualSalaryValue)}</td>
        <td>
        <button class="deleteButton"> delete </button>
        </td>
    </tr>`);

    $('#totalMonthly').text(calculateTotal);
}// end inputInfo

function deleteInfo() {
    let val = $(this).closest('tr').find(".inputClass").text();
    console.log("val", val);
    deleteFromArray(val, storedSalary);
    console.log("stored salary", storedSalary);
    console.log("in deleteInfo");
    $(this).parent().parent().remove();
    $('#totalMonthly').text(calculateTotal);
} // end deleteInfo

function storingSalary(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue) {
    storedSalary.push({ name: nameValue, lastName: lastNameValue, id: idValue, title: jobTitle, salary: annualSalaryValue });
    console.log(storedSalary);
}// end storingSalary

function calculateTotal() {
    let totalEverything = 0
    $('h3').css('background-color','white');
    console.log("in calculate total")
    for (let i = 0; i < storedSalary.length; i++) {
        console.log(Number(storedSalary[i].salary));
        totalEverything = Number(totalEverything) + (Number(storedSalary[i].salary));
    }
    if (totalEverything > 20000) {
        alert("you are overbudget");
        $('h3').css('background-color','red');
    }
    return ("$" + totalEverything.toFixed(2));
} // end calculateTotal

function deleteFromArray(val, storedSalary) {
    console.log("deleting from Array");
    for (let i = 0; i < storedSalary.length; i++) {
        if (val == storedSalary[i].id) {
            console.log("deletingStoredSalary", storedSalary[i].salary);
            storedSalary[i].salary= 0;
            console.log("newStoredSalary", storedSalary[i]);
            console.log("full", storedSalary);

        }
    }
}// end deleteFromArray

function makeCurrency(numberToMakeCurrency){
    let currency = ('$') + parseFloat(numberToMakeCurrency).toFixed(2);
    return currency
} //end makeCurrency

