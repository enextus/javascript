var human = {};
var i = 0;

// object model
// human = { firstName: "Ivan", lastName: "Vasilieu", age: 25, sex:"M", height: 1.8, weight: 90, maritalStatus: false, havingChildren: false, amountChildren: 2, childrenNames: ["Egor", "Marta"] };


human.firstName = prompt("What's your firstname? (char)");
human.lastName = prompt("What's your lastname? (char)");
human.age = parseInt(prompt("What's your age? (number)"), 10);
human.sex = prompt("What's your sex? (M/W/N)");
human.height = parseFloat(prompt("What's your height? (number)"));
human.weight = parseInt(prompt("What's your weight? (number)"), 10);
human.maritalStatus = prompt("What's your marital status? (yes/no)");

if ( human.maritalStatus === "yes" ) {
    human.maritalStatus = true;
} else {
    human.maritalStatus = false;
}

human.havingChildren = prompt("Do you have children? (yes/no)");

if ( human.havingChildren === "yes" ) {
    human.havingChildren = true;
    human.amountChildren = parseInt(prompt("How children are you have? (number)"), 10);
} else {
    human.havingChildren = false;
}

if ( human.amountChildren >= 1 ) {
    human.childrenNames = [];

    while ( i < human.amountChildren ) {
        human.childrenNames[i] = prompt("Please enter the name.");
    i++;
    }
}

console.log( "human = " + human );