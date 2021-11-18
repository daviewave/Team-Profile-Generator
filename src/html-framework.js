//Create function that generates an html page with cards of each employee added
//1. create variable function that will eventually generate an exportable html framework
let generatePage = (employeeList) => {
  let employeeCard = "";
  //2. Loop through each employee and determine their role so the role specific info can be adde
  employeeList.forEach((curEmployee) => {
    let curEmployeeRole =
      curEmployee.github || curEmployee.school || curEmployee.office;
    let key = Object.keys(curEmployee);
    let finalKey = key[4];
    let resolvedEmployee = finalKey + ":" + curEmployeeRole;

    //assign appropriate card descriptions based on keys
    if (finalKey === undefined) {
      resolvedEmployee = "";
    } else if (finalKey === "github") {
      resolvedEmployee = `Github: <a href = 'https://www.github.com/${curEmployee.github}'> ${curEmployee.gitHub}</a>`;
      console.log(resolvedEmployee);
    } else {
      console.log(resolvedEmployee);
    }

    //3. Create a card for each employee added in the array
    let { name, role, email, id } = curEmployee;
    employeeCard += `
    <div class="card col" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item"> ${resolvedEmployee}</li> 
            <li class="list-group-item">Employee ID: ${id}</li>
        </ul>
    </div>`;
  });
  //4. return the html framework
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">Company Employees</span>
            </div>
        </nav>
        
        <main class="container">
            <div class="row">
                ${employeeCard}
            </div>
        </main>
    </body>
</html> 
    `;
};
//5. export the module
module.exports = generatePage;
