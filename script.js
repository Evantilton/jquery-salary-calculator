console.log("in script.js")

$(document).ready(readyNow);
    

function readyNow() {
    console.log("in readyNow");
    $('#submitButton').on('click', inputInfo);
    $('tbody').on('click','.deleteButton', deleteInfo);
}

function inputInfo(){
    console.log("in inputField");
    const nameValue = $('#firstNameInput').val();
    const lastNameValue = $('#lastNameInput').val();
    const idValue = $('#employeeNumberInput').val();
    const jobTitle = $('#jobTitleInput').val();
    const annualSalaryValue = $('#annualSalaryInput').val();
    console.log(nameValue,lastNameValue,idValue,jobTitle, annualSalaryValue);
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
}

function deleteInfo(){
    console.log("in deleteInfo");
    $(this).parent().parent().remove();
}
