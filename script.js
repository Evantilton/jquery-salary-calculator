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
    storingSalary(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue);
    $('tbody').append(`
    <tr>
        <td class='name'>${nameValue}</td>
        <td>${lastNameValue}</td>
        <td>${idValue}</td>
        <td>${jobTitle}</td>
        <td>${annualSalaryValue}</td>
        <td>
        <button class="deleteButton"> delete </button>
        </td>
    </tr>`);

    $('#totalMonthly').text(calculateTotal);
}

function deleteInfo() {
    //test
    let val = $(this).closest('tr').find(".name").text();
    console.log("val", val);
    // let index = storedSalary.find { return storedSalary.name == val});
    // console.log("index", index);
    deleteFromArray(val, storedSalary);
    console.log("stored salary", storedSalary);


    //test
    console.log("in deleteInfo");
    $(this).parent().parent().remove();
    $('#totalMonthly').text(calculateTotal);
}

function storingSalary(nameValue, lastNameValue, idValue, jobTitle, annualSalaryValue) {
    storedSalary.push({ name: nameValue, lastName: lastNameValue, id: idValue, title: jobTitle, salary: annualSalaryValue });
    console.log(storedSalary);
}

function calculateTotal() {
    let totalEverything = 0
    console.log("in calculate total")
    for (let i = 0; i < storedSalary.length; i++) {
        console.log(Number(storedSalary[i].salary));
        totalEverything = Number(totalEverything) + (Number(storedSalary[i].salary));
    }
    return totalEverything;
}

function deleteFromArray(val, otherVal) {
    let oldData = [];
    console.log("deleting from Array");
    for (let i = 0; i < storedSalary.length; i++) {
        if (val == otherVal[i].name) {
            console.log("deletingStoredSalary", otherVal[i].salary);
            otherVal.splice(otherVal[i]);
            console.log(otherVal);
            console.log(storedSalary);

        }
    }
}