var people = [{
    sex: 'M',
    name: 'Andrew'
  },
  {
    sex: 'M',
    name: 'John'
  },
  {
    sex: 'W',
    name: 'Anna'
  },
  {
    sex: 'M',
    name: 'Andrew'
  },
  {
    sex: 'M',
    name: 'Ivan'
  },
  {
    sex: 'N',
    name: 'Eduardo'
  },
  {
    sex: 'W',
    name: 'Kate'
  },
];

var men = [];
var women = [];
var none = [];

for (var i = 0; i < people.length; i++) {
  if (people[i].sex === 'M') {
    men.push(people[i]);
  } else if (people[i].sex === 'W') {
    women.push(people[i]);
  } else {
    none.push(people[i]);
  }
}

// function declaration
function getPersonAge(person) {
  if (person && person.age) {
    return person.age;
  }
  return 18;
}

// function expression
var getPersonAge = function (person) {
  if (person && person.age) {
    return person.age;
  }
  return 18;
};