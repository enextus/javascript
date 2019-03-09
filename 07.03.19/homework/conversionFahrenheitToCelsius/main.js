var celsius = null;
var fahrenheit = null;

function convertToFahrenheit( fahrenheit ) {

  if ( !isNaN(fahrenheit) ) {

    var celsius = ( ( fahrenheit - 32 ) * 5 / 9 ).toFixed( 1 );

    return celsius + ' \xB0C';
  }

  return 0;
}

var fahrenheit = parseInt( prompt( "Please enter the worth of fahrenheit temperature to convert it in to celsius." ), 10 );

var result = convertToFahrenheit( fahrenheit );
console.log( result );