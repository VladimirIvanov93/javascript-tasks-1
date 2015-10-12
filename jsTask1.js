var arab = [1, 4, 5, 9, 10, 40, 50];//, 90, 100, 400, 500, 900, 1000];
var rome = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];//,'XC','C','CD','D','CM','M';


function arabToRome(num)
{
	if(!num) {return ''; };
	var result = '';
	var index_number  = arab.length - 1;
	while(num > 0)
	{
		if(num >= arab[index_number])
		{
			result += rome[index_number];
			num -= arab[index_number];
		}
		else
		{
			index_number--;
		}
	}
	return result;
}


function arabToRomeTime(hours,minutes)
{
	return arabToRome(hours) + ':' + arabToRome(minutes);
}


function arabToRomeM(hours, minutes)
{
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

	var IVn = concateSymobol(I,V);
	var IXn = concateSymobol(I,X);
	var XLn = concateSymobol(X,L);

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

	if(!hours) {return '';};
	var result = '';
	var count_number = arab.length - 1;
	var hours0 = hours;
	var minutes0 = minutes;
	var index_number;

	for(var fragment_number = 0; fragment_number < separator.length; fragment_number++)
	{
		index_number = count_number;
		hours = hours0;
		while(hours > 0)
		{
			if(hours >= arab[index_number])
			{
				result += romeASCII[index_number][fragment_number];
				hours -= arab[index_number];
			}
			else
			{
				index_number--;
			}
		}
	  result += separator[fragment_number];
		index_number = count_number;
		minutes = minutes0;
		while(minutes > 0)
		{
			if(minutes >= arab[index_number])
			{
				result += romeASCII[index_number][fragment_number];
				minutes -= arab[index_number];
			}
			else
			{
				index_number--;
			}
		}
		result += '\n';
	}
	return result;
}


function concateSymobol(a,b){
	var c= ['', '', '', '', '', '', '', ''];
	for(var i = 0; i < 8; i++){
		c[i] += a[i] + b[i];
	}
	return c;
}


//var date = new Date();
//console.log(arabToRomeM(date.getHours(),date.getMinutes()));

var hours = process.argv[2];
var minutes = process.argv[3];
if ((0 <= hours && hours < 24) && (0 <= minutes && minutes < 60)){
	console.log(arabToRomeTime(hours,minutes));
	console.log(arabToRomeM(hours,minutes));
}
else {
	console.log('Время задано неверно. Укажите корректно часы и минуты арабскими цифрами.');
};
