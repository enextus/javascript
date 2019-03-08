var celsius = null;
var fahrenheit = null;

function convertToFahrenheit( celsius ) {

  if ( !isNaN( celsius ) ) {

    var fahrenheit = celsius * 9 / 5 + 32;

    return fahrenheit + ' \xB0F';
  } else {

    return 0;
  }
}

var celsius = parseInt( prompt( "Please enter the worth of celsius temperature to convert it in to fahrenheit." ), 10 );

var result = convertToFahrenheit( celsius );
console.log( result );