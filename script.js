console.log("in script.js")
let storedSalary = []
$(document).ready(readyNow);


function readyNow() {
    console.log("in readyNow");
    $('#submitButton').on('click', inputInfo);
    $('tbody').on('click', '.deleteButton', deleteInfo);
}

function inputInfo() {
    console.log("in inputField");
    const nameValue = $('#firstNameInput').val();
    const lastNameValue = $('#lastNameInput').val();
    const idValue = $('#employeeNumberInput').val();
    const jobTitle = $('#jobTitleInput').val();
    const annualSalaryValue = $('#annualSalaryInput').val();

    console.log(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue);
    $('tbody').append(`
    <tr>
        <td>${nameValue}</td>
        <td>${lastNameValue}</td>
        <td>${idValue}</td>
        <td>${jobTitle}</td>
        <td>${annualSalaryValue}</td>
        <td>
        <button class="deleteButton"> delete </button>
        </td>
    </tr>`);
    storingSalary(Number(annualSalaryValue));
    $('#totalMonthly').text(calculateTotal);
}

function deleteInfo() {
    console.log("in deleteInfo");
    $(this).parent().parent().remove();
}

function storingSalary(annualSalaryValue) {
    storedSalary.push(annualSalaryValue);
    console.log(storedSalary);
}

function calculateTotal() {
    let totalEverything = 0
    console.log("in calculate total")
    for (let i = 0; i < storedSalary.length; i++) {
        console.log(storedSalary[i]);
        totalEverything = Number(totalEverything)+(storedSalary[i]);
    }
    return totalEverything;
}