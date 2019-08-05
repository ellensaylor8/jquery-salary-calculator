
let employees = [
    {
        firstName: 'Michael',
        lastName: 'Scott',
        ID: 1,
        title: 'daBoss',
        annualSalary: 100000
    },
    {
        firstName: 'Jim',
        lastName: 'Halpert',
        ID: 2,
        title: 'Sales Associate',
        annualSalary: 50000
    },
    {
        firstName: 'Pam',
        lastName: 'Beesly',
        ID: 3,
        title: 'Administrative Assistant',
        annualSalary: 40000
    },
    {
        firstName: 'Dwight',
        lastName: 'Schrute',
        ID: 4,
        title: 'Sales Associate',
        annualSalary: 50000
    },
    {
        firstName: 'Toby',
        lastName: 'Flenderson',
        ID: 5,
        title: 'Pain in Michaels Butt',
        annualSalary: 50000
    },
]


$(document).ready(onReady);

function onReady() {
    render();
    sumSalaries();
    $('.js-btn-submit').on('click', onClickAddEmployee);
    $('.deleteButton').on('click', deleteEmployee)
}

let totalMonthlySalary = 0;

function sumSalaries() {
    for (let i = 0; i < employees.length; i++) {
        employeeSalary = employees[i].annualSalary;
        totalMonthlySalary += employeeSalary;
    }
    console.log(totalMonthlySalary)
    $('#totalMonthlyCost').text('Total Monthly Cost: ' + '$' + addCommas(totalMonthlySalary));
    if (totalMonthlySalary > 20000) {
        $('#totalMonthlyCost').parent().css("background-color", "red");
        $('#totalMonthlyCost').css("color", "white");
    }
}

function onClickAddEmployee() {
    console.log($('.js-input-firstName').val())
    const newEmployee = {
        firstName: $('.js-input-firstName').val(),
        lastName: $('.js-input-lastName').val(),
        ID: $('.js-input-ID').val(),
        title: $('.js-input-title').val(),
        annualSalary: parseInt($('.js-input-annualSalary').val()),
    }

    employees.push(newEmployee);

    totalMonthlySalary += newEmployee.annualSalary

    $('#totalMonthlyCost').text('Total Monthly Cost: ' + '$' + addCommas(totalMonthlySalary));
    if (totalMonthlySalary > 20000) {
        $('#totalMonthlyCost').parent().css("background-color", "red");
        $('#totalMonthlyCost').css("color", "white");
    }
    render();
    clearInputs();
    $('.deleteButton').on('click', deleteEmployee)
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function render() {

    const tableElement = $('.tBody');
    let deleteButton = '<button' + ' class = "deleteButton"' + '>Delete</button>'

    tableElement.empty();
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        tableElement.append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td>${'$' + addCommas(employee.annualSalary)}</td>
            <td>${deleteButton}</td>
        </tr>`);
    }
}

function clearInputs(){
    $('.js-input-firstName').val('');
    $('.js-input-lastName').val('');
    $('.js-input-ID').val('');
    $('.js-input-title').val('');
    $('.js-input-annualSalary').val('');
}

function deleteEmployee() {
    $(this).parent().parent().remove()
    const salaryChild = $(this).parent().parent().children().eq(4).text();
    const salaryChildNumber = Number(salaryChild.replace(/[^0-9.-]+/g,""));
    console.log(salaryChildNumber);
    totalMonthlySalary-= salaryChildNumber
    $('#totalMonthlyCost').text('Total Monthly Cost: ' + '$' + addCommas(totalMonthlySalary));
}