
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
}

function onClickAddEmployee() {
    console.log($('.js-input-firstName').val())
    const newEmployee = {
        firstName: $('.js-input-firstName').val(),
        lastName: $('.js-input-lastName').val(),
        ID: parseInt($('.js-input-ID').val()),
        title: $('.js-input-title').val(),
        annualSalary: $('.js-input-annualSalary').val(),
    }
    console.log(newEmployee);
    // $('.js-demo').append(`<div>${JSON.stringify(newCreature)}</div>`)
    employees.push(newEmployee);

    
    render();
}

function addCommas(nStr)
{
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
    let deleteButton = '<button>Delete</button>'

    tableElement.empty();
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        tableElement.append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td>${'$'+addCommas(employee.annualSalary)}</td>
            <td>${deleteButton}</td>
        </tr>`);
    }
}

function sumSalaries(){

}