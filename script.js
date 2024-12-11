const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function () {
  const employees = [];
  let addMore = true;

    while (addMore) {
      const firstName = prompt("Enter employee's first name:");
      const lastName = prompt("Enter employee's last name:");
      const salary = parseFloat(prompt("Enter employee's salary:"));

        if (!firstName || !lastName || isNaN(salary)) {
          alert('Invalid input. Please try again.');
          } else {
            employees.push({ firstName, lastName, salary });
          }

    addMore = confirm('Do you want to add another employee?');
  }

return employees;
};

const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to calculate the average salary.');
    return;
  }

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  let formattedSalary;
  if (averageSalary % 1 === 0) {
    formattedSalary = averageSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  } else {
    formattedSalary = averageSalary.toFixed(2).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${formattedSalary}`);
};

const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to select.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  alert(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

addEmployeesBtn.addEventListener('click', trackEmployeeData);