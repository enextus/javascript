let quantityChildren,
inputContainer = document.querySelector('.inputs__container'),
personHavingChildren = document.querySelector('#input__person_having_children'),
buttonNext,
buttonShowResults = document.querySelector('.button__show_results');

function showQuantityChildrenInput() {

  if (personHavingChildren.checked) {
    let personQuantityChildrenContainer = document.createElement('div');
    personQuantityChildrenContainer.setAttribute('class', 'person__quantity_children_container margin-bottom');
    personQuantityChildrenContainer.innerHTML = '<label class="margin-bottom" for="input__person_quantity_children">How many kids do you have?</label>';
    personQuantityChildrenContainer.innerHTML += '<input class="margin-bottom" type="number" name="" id="input__person_quantity_children">';
    personQuantityChildrenContainer.innerHTML += '<button class="button__next margin-bottom">Next/Recount</button>';
    inputContainer.insertBefore(personQuantityChildrenContainer, buttonShowResults);
    buttonNext = document.querySelector('.button__next')
    buttonNextFunc();
  } else {
    document.querySelector('.person__quantity_children_container').remove();
    correctionQuantityInputsForChildren();
  };

};

function correctionQuantityInputsForChildren() {
  let countRemove = document.querySelectorAll('.person__children_info_container').length;
  
  for(let i = 0; i < countRemove; i++) {
    document.querySelector('.person__children_info_container').remove();
  };

};

function getPersonQuantityChildren() {
  let inputPersonQuantityChildren = document.querySelector('#input__person_quantity_children').value;
  return inputPersonQuantityChildren;
};

function createInputsForChildren(quantityChildren) {
  correctionQuantityInputsForChildren();
  
  for(let i = 0,j = 1; i < quantityChildren; i++, j++) {
    let divChildrenInputs = document.createElement('div');
    divChildrenInputs.setAttribute('class', 'margin-bottom person__children_info_container child' + j);
    
    if(i === 0) {
      divChildrenInputs.innerHTML = '<p>Enter the name and age of your first child.</p>';
    } else{
      divChildrenInputs.innerHTML = '<p>Enter the name and age of your next child.</p>';
    };
    
    divChildrenInputs.innerHTML += '<label class=\"margin-bottom\" for=\"input__person_child' + j + '_name\">Child\'s name</label>';
    divChildrenInputs.innerHTML += '<input class="margin-bottom" type="text" name="" id="input__person_child' + j + '_name">';
    divChildrenInputs.innerHTML += '<label class=\"margin-bottom\" for=\"input__person_child' + j + '_age\">Child\'s age</label>';
    divChildrenInputs.innerHTML += '<input class="margin-bottom" type="number" name="" id="input__person_child' + j + '_age">';
    
    inputContainer.insertBefore(divChildrenInputs, buttonShowResults);
  };

};

function showResults() {
  let emptyInputs = findEmptyInputs();

  if(emptyInputs === 0) {
    let divResultsContainer = document.createElement('div'),
    mainContainer = document.querySelector('.main__container');
  
    divResultsContainer.setAttribute('class', 'results__container');
    divResultsContainer.innerHTML = '<p class="person-info person__name">Name: ' + document.querySelector('#input__person_name').value + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__last_name">Last name: ' + document.querySelector('#input__person_last_name').value + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__age">Age: ' + document.querySelector('#input__person_age').value + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__height">Height: ' + document.querySelector('#input__person_height').value + ' centimeters' + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__weight">Weight: ' + document.querySelector('#input__person_weight').value + ' kilogram' + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__gender">Gender: ' + document.querySelector('#select__person_gender').value + '</p>';
    divResultsContainer.innerHTML += '<p class="person-info person__marital_status">Marital status: ' + document.querySelector('#select__person_marital_status').value + '</p>';
    
    if(document.querySelector('#input__person_having_children').checked) {
      divResultsContainer.innerHTML += '<p class="person-info person__having_children">Having children: ' + 'Yes' + '</p>';
    } else {
      divResultsContainer.innerHTML += '<p class="person-info person__having_children">Having children: ' + 'No' + '</p>';
    };
    
    if(document.querySelector('#input__person_having_children').checked) {
      divResultsContainer.innerHTML += '<p class="person-info person__quantity_children">Quantity children: ' + document.querySelector('#input__person_quantity_children').value + '</p>';
    };
  
    if(document.querySelector('#input__person_having_children').checked) {
      divResultsContainer.innerHTML += '<p>Children:</p>';
      
      for(let i = 0, j = 1; i < quantityChildren; i++, j++) {
        divResultsContainer.innerHTML += '<p class="person-info">Name: ' + document.querySelector('#input__person_child' + j + '_name').value + ' | ' + 'Age: ' +
        document.querySelector('#input__person_child' + j + '_age').value + '</p>';
      };
    };
    
    inputContainer.style.display = 'none';
    mainContainer.appendChild(divResultsContainer);
  } else {
    alert('Input error!');
  };
  
};

function buttonNextFunc() {
  buttonNext.addEventListener('click', function() {
    quantityChildren = getPersonQuantityChildren();
    createInputsForChildren(quantityChildren);
  });
};

function findEmptyInputs() {
  let allInputs = document.querySelectorAll('input'),
  emptyInputs = 0;

  for(let i = 0; i < allInputs.length; i++) {
    if(allInputs[i].value === "") {
      emptyInputs++;
    };
  };
  return emptyInputs;
  
};

personHavingChildren.addEventListener('click', showQuantityChildrenInput);

buttonShowResults.addEventListener('click', showResults);














