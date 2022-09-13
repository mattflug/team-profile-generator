function generateHtml(employees) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="text-center p-5 bg-danger text-white">
      <h1>My Team</h1>
    </header>
    <div class="d-flex justify-content-center">
    ${employees.map(function (employee) {
      return generateCard(employee);
    })}
    </div>
  </body>
</html>`;
}

function generateCard(employee) {
  var lastProp = "";
  if (employee.getRole() == "Manager") {
    lastProp = `<li class="list-group-item">Office #: ${employee.getofficeNumber()}</li>`;
  }
  if (employee.getRole() == "Engineer") {
    lastProp = `<li class="list-group-item">Github: ${employee.getGithub()}</li>`;
  }
  if (employee.getRole() == "Intern") {
    lastProp = `<li class="list-group-item">School: ${employee.getschoolName()}</li>`;
  }
  return `<div class="card m-3" style="width: 18rem">
        <div class="card-header bg-primary text-white">
          <h3>${employee.getName()}</h3>
          <h5>${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: ${employee.getEmail()}</li>
${lastProp}
        </ul>
      </div>`;
}

module.exports = generateHtml;
