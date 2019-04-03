var test = 'Test';



var checkScope = function () {
    console.log(test);
};

checkScope();

// -----------------

var obj = {

    name: 'Peter',
    age: '42'
}

// obj.aga;
// obj['age'];
// obj.test;
// obj[test]-- -- >
//     var test = 'test';
// OK

var obj = {
    name: 'Peter',
    age: 42,
    getAge: function () {
        console.log(this.age);
    }
}

obj.getAge();

var obj2 = {
    name: 'Peter',
    age: 42,
    getAge: function () {
        console.log(this.age);
    },
    child: {
        childName: 'test',
        age: 5,
    }
}

// все обекты передаются по ссылке

console.log(human.child.getChildFullName());

// собственный метод

var arr = [];
arr.test = function () {
    console.log(this);
}

arr.push = function (element) {
    console.log('parameter element: ', element);
    console.log('length: ', this.length);

}


var obj3 = {
    name: 'Peter',
    age: 42,
    getAge: function () {
        console.log(this.age);
    },
    changeFullName: function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


// Sergey Arzamasov, [12.03.19 11:45]

var test = 'Hell Yeah!!!'

var human = {
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    initializeHuman: function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    },
    changeHumanData: function (firstName, lastName, age, sex) {
        console.log(test);

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }
}

human.initializeHuman('Ivan', 'Ivanov', 42);
human.changeHumanData('John', 'Snow', 30, 'M');