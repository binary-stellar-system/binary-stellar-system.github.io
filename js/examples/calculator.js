

document.write('<form name="calculator">\n');

document.write('<table border=0 cellspacing=5 cellpading=5><tr><td> \n');

// this is the text box that displays the current data
document.write('</td><td><input type="text" name="textbox" value="0" size=25></td>\n');

// this here is the hex, bin, dec, adn oct code for conversion
// not used just yet need degrees, radians, and grads in here document.write('</tr><tr>\n');
document.write('<td bgcolor="white">Hex<input type="radio" name="cbase" value="16" onClick="switchbase(16)">\n');
document.write('Dec<input type="radio" name="cbase" value="10" checked onClick="switchbase(10)">\n');
document.write('Oct<input type="radio" name="cbase" value="8" onClick="switchbase(8)">\n');
document.write('Bin<input type="radio" name="cbase" value="2" onClick="switchbase(2)"></td>\n');
document.write('</tr><tr><td><input type="button" value=" Clear " onclick="clearfunct()"></td>\n');
document.write('<td> <!-- here would be the deg rad and grad buttons --></td></tr></table>');
 // end of the head now we go for the next row


document.write('<table border=0 cellspacing=5 cellpading=5><tr><td>\n');

document.write('</td><td>\n');
document.write('</td><td>\n');
document.write('</td><td>\n');
//document.write('<input type="text" name="memory" value="" size=5></td><td>\n');
document.write('</td><td>\n');
document.write('<input type="button" value="  7  "  onClick="pickANumber(7)"></td><td>\n');
document.write('<input type="button" value="  8  "  onClick="pickANumber(8)"></td><td>\n');
document.write('<input type="button" value="  9  "  onClick="pickANumber(9)"></td><td>\n');
document.write('<input type="button" value=" / "  onClick="mathfunct(4)"></td><td>\n');
document.write('<input type="button" value=" mod "  onClick="mathfunct(7)"></td><td>\n');
document.write('<input type="button" value=" and "  onClick="mathfunct(8)"></td></tr><tr><td>\n');

document.write('<input type="button" value=" sqrt "  onClick="dofunction (1)"></td><td>\n');
document.write('<input type="button" value=" e "  onClick="dofunction (4)"></td><td>\n');
document.write('<input type="button" value=" ln "  onClick="dofunction (8)"></td><td>\n');
document.write('</td><td>\n');
document.write('<input type="button" value="  4  "  onClick="pickANumber(4)"></td><td>\n');
document.write('<input type="button" value="  5  "  onClick="pickANumber(5)"></td><td>\n');
document.write('<input type="button" value="  6  "  onClick="pickANumber(6)"></td><td>\n');
document.write('<input type="button" value=" * "  onClick="mathfunct(3)"></td><td>\n');
document.write('<input type="button" value=" or "  onClick="mathfunct(9)"></td><td>\n');
document.write('<input type="button" value=" xor "  onClick="mathfunct(10)"></td></tr><tr><td>\n');

document.write('<input type="button" value=" sin "  onClick="dofunction (5)"></td><td>\n');
document.write('<input type="button" value=" x^y "  onClick="mathfunct(6)"></td><td>\n');
document.write('<input type="button" value=" PI  "  onClick="dofunction(9)"></td><td>\n');
document.write('</td><td>\n');
document.write('<input type="button" value="  1  "  onClick="pickANumber(1)"></td><td>\n');
document.write('<input type="button" value="  2  "  onClick="pickANumber(2)"></td><td>\n');
document.write('<input type="button" value="  3  "  onClick="pickANumber(3)"></td><td>\n');
document.write('<input type="button" value=" - "  onClick="mathfunct(2)"></td><td>\n');
document.write('</td><td>\n');
//document.write('<input type="button" value=" not "  onClick="binaryfns(1)"></td></tr><tr><td>\n');
document.write('</td></tr><tr><td>\n');

document.write('<input type="button" value=" cos "  onClick="dofunction (6)"></td><td>\n');
document.write('<input type="button" value=" x^3 "  onClick="dofunction (14)"></td><td>\n');
document.write('<input type="button" value=" n!  "  onClick="dofunction(10)"></td><td>\n');
document.write('</td><td>\n');
document.write('<input type="button" value="  0  "  onClick="pickANumber(0)"></td><td>\n');
document.write('<input type="button" value=" +/- "  onClick="dofunction (3)"></td><td>\n');
document.write('<input type="button" value="  .   "  onClick="pickANumber(\'.\')"></td><td>\n');
document.write('<input type="button" value=" + "  onClick="mathfunct(1)"></td><td>\n');
document.write('<input type="button" value=" = "  onClick="mathfunct(5)"></td><td>\n');
document.write('<input type="button" value=" int "  onClick="dofunction(11)"></td></tr><tr><td>\n');

document.write('<input type="button" value=" tan "  onClick="dofunction (7)"></td><td>\n');
document.write('<input type="button" value=" x^2 "  onClick="dofunction (13)"></td><td>\n');
document.write('<input type="button" value=" 1/x "  onClick="dofunction (2)"></td><td>\n');
document.write('</td><td>\n');
document.write('<input type="button" value=" A "  onClick="pickANumber(\'A\')"></td><td>\n');
document.write('<input type="button" value=" B "  onClick="pickANumber(\'B\')"></td><td>\n');
document.write('<input type="button" value=" C "  onClick="pickANumber(\'C\')"></td><td>\n');
document.write('<input type="button" value=" D "  onClick="pickANumber(\'D\')"></td><td>\n');
document.write('<input type="button" value=" E "  onClick="pickANumber(\'E\')"></td><td>\n');
document.write('<input type="button" value=" F "  onClick="pickANumber(\'F\')"></td>\n');
document.write('</tr></table>\n');
document.write('</form>\n');

buffer = 0;
counter = 0;
decimal=0;
textString= 0;
initnumval = 0;
isdec = 0;
fnct=0; // the function last performed
currentbase = new Number(10);
// initialize the text box
document.calculator.textbox.value = 0;


function binaryfns(fn) {
   // these can only be done if we are in base 10
   if (currentbase == 10) {
       visnum = document.calculator.textbox.value;
       if (fn == 1) {
           document.calculator.textbox.value = ~visnum;
       }
   } else {
       workbase = currentbase;
       convertToBaseTen(currentbase);
       visnum = document.calculator.textbox.value;
       if (fn == 1) {
           document.calculator.textbox.value = Math.abs(~visnum);
       }
       convertFromBaseTen(currentbase);
   }
}

// this performs the rest of the functions that we may want to add
function dofunction (fn) {
   // these can only be done if we are in base 10
   if (currentbase == 10) {
    visnum = document.calculator.textbox.value;
	switch ( fn ) {
		case 1:
    	    document.calculator.textbox.value = Math.sqrt(visnum);
			break;
		case 2:
			document.calculator.textbox.value = 1/visnum;
			break;
		case 3:
		    document.calculator.textbox.value = (-1) * visnum;
			break;
		case 4:
		    document.calculator.textbox.value = Math.exp(visnum);
			break;
		case 5:
		    document.calculator.textbox.value = Math.sin(visnum);
			break;
		case 6:
		    document.calculator.textbox.value =  Math.cos(visnum);
			break;
		case 7:
		    document.calculator.textbox.value = Math.tan(visnum);
			break;
		case 8:
		    document.calculator.textbox.value = Math.log(visnum);
			break;
		case 9:
		    document.calculator.textbox.value = Math.PI;
			break;
		case 10:
			lcnum = visnum;
			while (visnum > 1) {
	    		visnum--;
				lcnum = lcnum * visnum;
			}
			document.calculator.textbox.value = lcnum;
			break;
		case 11:
       if (isdec == 1) {
           if (visnum >= 0) {
               document.calculator.textbox.value = Math.floor(visnum);
           } else {
               document.calculator.textbox.value = Math.ceil(visnum);
           }
       } else {
           document.calculator.textbox.value = visnum;
       }
			 break;
		case 12:
        document.calculator.textbox.value = Math.LOG10E;
			 break;
		case 13:
        document.calculator.textbox.value = visnum*visnum;
			 break;
		case 14:
        document.calculator.textbox.value = visnum*visnum*visnum;
			 break;
	}
	}
}

// this function does the add subtract or multiply or divide and modulus as
// well as x to the power y
// consider this a private funtion of sorts
// only multiplication and addition work on none base 10
function getanswer(quant, varble) {
   initnumval = document.calculator.textbox.value;
   document.calculator.textbox.value = 0;

   switch ( quant ) {
       // because javascript can possible eval x+y to xy instead of a value
       // we make x+y = x-(-y) which is logically equivalent
       case 1:
	   		return ((new Number(varble)) + (new Number(initnumval)));
   		case 2:
          return varble - initnumval;
   		case 3:
		       return varble * initnumval;
   		case 4:
       		return (varble / initnumval);
    	 case 6:
	       return (Math.pow(varble, initnumval));
		case 7:
          return (varble% initnumval);
   }
   if (currentbase == 2) {
   		varble = convertDataToBaseTen(2, varble);
		initnumval = convertDataToBaseTen(2, initnumval);
     	if (quant==8) {
            value = (varble & initnumval);
        }
        if (quant==9) {
		    value = (varble | initnumval);
		}
        if (quant==10) {
            value = (varble ^ initnumval);
        }
        value = convertDataFromBaseTen(2, value);
        return value;
   }
}

// this is the function that is called from the button press of add , sub, mul, or div
function mathfunct(letterx){

    workbase = currentbase;
	if ( (currentbase != 2) && ( (letterx == 8) || (letterx == 9) || (letterx == 10) ) ) {
		switchbase(2);
	} else if (((letterx == 2) || (letterx == 4)) && (currentbase != 10)) {
       switchbase(10);
    }
	if (fnct == 0) {
           fnct = letterx;
           counter = document.calculator.textbox.value;
           document.calculator.textbox.value = 0;
    } else {
           if (letterx != 5) {
               counter = getanswer(fnct, counter);
               fnct = letterx;
           } else {
               counter = getanswer(fnct, counter);
               fnct=0;
               document.calculator.textbox.value = counter;
           }
   }
   isdec =0;
   // if it is not base 10 convert bact to the base
   if ( currentbase != workbase ) {
		switchbase(workbase);
   }
}

////////////////////////////////////////////////////////////////////////
// these functions have been teseted
// and they seem to work okay
////////////////////////////////////////////////////////////////////////

// this funtion determines which number was pressed or if there was a decimal
// it also sets the text in the buffer which is the textdield
function pickANumber(number) {
   // the first 3 if's here filter out based on the base that we are set to
   if ((currentbase != 16) && ((number == 'A') || (number == 'B') || (number == 'C')
       || (number == 'D') || (number == 'E') || (number == 'F'))) {
      return;
   } else if ((currentbase == 8) && (number >=8)) {
      return;
   } else if ((currentbase == 2) && (number >=2)) {
      return;
   }
   // this does the building of the display buffer when someone enters a number
   buffer = document.calculator.textbox.value;
   if (buffer == 0){
      var textString = number;
   } else if ( ((isdec == 1) && (number =='.')) || ((number =='.') && (currentbase != 10)) ) {
      var textString = buffer;
   } else {
          var textString = buffer + number;
   }
   if ((number =='.') && (currentbase == 10)) {
       isdec =1;
   }
   document.calculator.textbox.value = textString;
}

// this function resets the values for manipulation
function clearfunct() {
   buffer=0;
   fnct=0;
   visnum =0;
   isdec =0;
   counter = 0;
   initnumval = 0;
   textString=buffer;
   document.calculator.textbox.value = textString;
}

////////////////////////////////////////////////////////////////////////
// below is used to switch between bases
// this code has been cleaned up and works
////////////////////////////////////////////////////////////////////////

// this function handles visually switching between bases
// baseval is the new base to conver to
function switchbase(baseval) {
   if (currentbase != 10) {
   		// convert to base 10
        convertToBaseTen(currentbase);
   }
   	if ( baseval == currentbase ) {
   		return;
	}
   convertFromBaseTen(new Number(baseval));
   currentbase = new Number(baseval);
}

// for conversion of hex numbers
function valuetoint(inval) {
    switch(inval) {
        case "A":
            return 10;
            break;
        case "B":
            return 11;
            break;
        case "C":
            return 12;
            break;
        case "D":
            return 13;
            break;
        case "E":
            return 14;
            break;
        case "F":
            return 15;
            break;
        default:
            return inval;
            break;
    }
}

// to convert from a base to base 10
// call this with the new base
function convertToBaseTen(inxbase) {
    invalue= document.calculator.textbox.value;
    document.calculator.textbox.value = convertDataToBaseTen(inxbase, invalue);
}

function convertDataToBaseTen(inxbase, invalue) {
    inremainder = 0;
    num = 1;
    while(num <= invalue.length) {
        incount = Math.pow(inxbase,num-1);
        inremainder = inremainder + valuetoint(invalue.charAt(invalue.length-num))*incount;
        num++;
    }
	return inremainder;
}


// to convert from base 10 to a base
// NOTE this should work with any base less than 16 but I only use 2, 8, 10, and 16
// call this with the new base
function convertFromBaseTen(xbase) {
    inval = new Number(document.calculator.textbox.value);
    document.calculator.textbox.value = convertDataFromBaseTen(xbase, inval);
}
function convertDataFromBaseTen(xbase, inval) {
    var hex = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var remainder = "";
    remainder = hex[inval%xbase];
    while (inval >= xbase) {
        inval = inval - (inval%xbase);
        inval = inval / xbase;
        if (inval >= xbase) {
            remainder = hex[inval%xbase] + remainder;
        } else {
            remainder = hex[inval] + remainder;
        }
    }
	return remainder;
}

