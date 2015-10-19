var arab = [1, 4, 5, 9, 10, 40, 50]; //, 90, 100, 400, 500, 900, 1000];
var rome = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L']; //,'XC','C','CD','D','CM','M';

function arabToRome(num) {
  if (!num) {
    return '';
  };
  if (num == 0) {
    return 'Z';
  };
  var result = '';
  var indexNumber = arab.length - 1;
  while (num > 0) {
    if (num >= arab[indexNumber]) {
      result += rome[indexNumber];
      num -= arab[indexNumber];
    } else {
      indexNumber--;
    }
  }
  return result;
}

function arabToRomeTime(hours, minutes) {
  return arabToRome(hours) + ':' + arabToRome(minutes);
}

function arabToRomeM(hours, minutes) {
  var Z = [
    ' - - - - - - - -',
    ' - - - - - -   -',
    '          -  -  ',
    '       -  -     ',
    '    -  -        ',
    ' -  -           ',
    ' -  - - - - - - ',
    ' - - - - - - - -'
  ];

  var I = [
    ' _  _  _  _  _ ',
    '(_)(_)(_)(_)(_)',
    '      (_)      ',
    '      (_)      ',
    '      (_)      ',
    '      (_)      ',
    ' _  _ (_) _  _ ',
    '(_)(_)(_)(_)(_)'
  ];

  var V = [
    ' _           _ ',
    '(_)         (_)',
    '(_)         (_)',
    '(_)         (_)',
    '  (_)     (_)  ',
    '   (_)   (_)   ',
    '    (_)_(_)    ',
    '      (_)      '
  ];

  var X = [
    ' _           _ ',
    '(_)_       _(_)',
    '  (_)_   _(_)  ',
    '    (_)_(_)    ',
    '     _(_)_     ',
    '   _(_) (_)_   ',
    ' _(_)     (_)_ ',
    '(_)         (_)'
  ];

  var L = [
    ' _             ',
    '(_)            ',
    '(_)            ',
    '(_)            ',
    '(_)            ',
    '(_)            ',
    '(_) _  _  _  _ ',
    '(_)(_)(_)(_)(_)'
  ];

  var IVn = concateSymobol(I, V);
  var IXn = concateSymobol(I, X);
  var XLn = concateSymobol(X, L);

  var separator = [
    '               ',
    '      _  _     ',
    '     (_)(_)    ',
    '     (_)(_)    ',
    '               ',
    '      _  _     ',
    '     (_)(_)    ',
    '     (_)(_)    '
  ];

  var romeASCII = [I, IVn, V, IXn, X, XLn, L];

  if (!hours) {
    return '';
  };
  var result = '';
  var countNumber = arab.length - 1;
  var hours0 = hours;
  var minutes0 = minutes;
  var indexNumber;

  for (var fragmentNum = 0; fragmentNum < separator.length; fragmentNum++) {
    indexNumber = countNumber;
    hours = hours0;
    if (hours == 0) {
      result += Z[fragmentNum];
    };
    while (hours > 0) {
      if (hours >= arab[indexNumber]) {
        result += romeASCII[indexNumber][fragmentNum];
        hours -= arab[indexNumber];
      } else {
        indexNumber--;
      }
    }
    result += separator[fragmentNum];
    indexNumber = countNumber;
    minutes = minutes0;
    if (minutes == 0) {
      result += Z[fragmentNum];
    };
    while (minutes > 0) {
      if (minutes >= arab[indexNumber]) {
        result += romeASCII[indexNumber][fragmentNum];
        minutes -= arab[indexNumber];
      } else {
        indexNumber--;
      }
    }
    result += '\n';
  }
  return result;
}

function concateSymobol(a, b) {
  var c = ['', '', '', '', '', '', '', ''];
  for (var i = 0; i < 8; i++) {
    c[i] += a[i] + b[i];
  }
  return c;
}

//var date = new Date();
//console.log(arabToRomeM(date.getHours(),date.getMinutes()));

var hours = process.argv[2];
var minutes = process.argv[3];

if ((0 <= hours && hours < 24) && (0 <= minutes && minutes < 60) &&
  ((hours % 1) === 0) && ((minutes % 1) === 0)) {
  console.log(arabToRomeTime(hours, minutes));
  console.log(arabToRomeM(hours, minutes));
} else {
  console.log('Время задано неверно');
};
