var arab = [1, 4, 5, 9, 10, 40, 50];//, 90, 100, 400, 500, 900, 1000];
var rome = ['I','IV','V','IX','X','XL','L'];//,'XC','C','CD','D','CM','M';


function arabToRome(num)
{
	if(!num) return '';

	var i = arab.length - 1;
	while(num > 0)
	{
		if(num >= arab[i])
		{
			ret += rome[i];
			num -= arab[i];
		}
		else
		{
			i--;
		}
	}

	return ret;
}


function arabToRomeTime(hours,minutes){
	return arabToRome(hours)+':'+arabToRome(minutes);
}



function arabToRomeM(hours, minutes){

	var I = [' _  _  _  _  _ ',
					 '(_)(_)(_)(_)(_)',
					 '      (_)      ',
					 '      (_)      ',
					 '      (_)      ',
					 '      (_)      ',
					 ' _  _ (_) _  _ ',
					 '(_)(_)(_)(_)(_)'];
	 var V = [' _           _ ',
 					  '(_)         (_)',
 					  '(_)         (_)',
 					  '(_)         (_)',
 					  '  (_)     (_)  ',
 					  '   (_)   (_)   ',
 					  '    (_)_(_)    ',
 					  '      (_)      '];

	var X = [' _           _ ',
					 '(_)_       _(_)',
					 '  (_)_   _(_)  ',
					 '    (_)_(_)    ',
					 '     _(_)_     ',
					 '   _(_) (_)_   ',
					 ' _(_)     (_)_ ',
					 '(_)         (_)'];

 	var L = [' _             ',
 					 '(_)            ',
 					 '(_)            ',
 					 '(_)            ',
 					 '(_)            ',
 					 '(_)            ',
 					 '(_) _  _  _  _ ',
 					 '(_)(_)(_)(_)(_)'];

		var IVn ,IXn, XLn;
		IVn = concateSymobol(I,V);
		IXn = concateSymobol(I,X);
		XLn = concateSymobol(X,L);

		var s = ['               ',
						 '      _  _     ',
						 '     (_)(_)    ',
						 '     (_)(_)    ',
						 '               ',
						 '      _  _     ',
						 '     (_)(_)    ',
						 '     (_)(_)    '];

		var romeASCII = [I,IVn,V,IXn,X,XLn,L];


		if(!hours) return '';
		var ret = '';
		var i0 = arab.length - 1;
		var hours0 = hours;
		var minutes0 = minutes;

		for(k=0;k<s.length;k++)
		{
			i = i0;
			hours = hours0;
			while(hours > 0)
			{
				if(hours >= arab[i])
				{
					ret += romeASCII[i][k];
					hours -= arab[i];
				}
				else
				{
					i--;
				}
			}
			var i = arab.length - 1;
		  ret += s[k];
			i = i0;
			minutes = minutes0;
			while(minutes > 0)
			{
				if(minutes >= arab[i])
				{
					ret += romeASCII[i][k];
					minutes -= arab[i];
				}
				else
				{
					i--;
				}
			}

			ret += '\n';
		}

		return ret;

}

function concateSymobol(a,b){
	var c= ['','','','','','','',''];
	for(i=0;i<8;i++){//i<a.size&i<b.size;
		c[i]+=a[i]+b[i];
	}
	return c;
}




// var date = new Date();
// console.log(arabToRomeTime(date.getHours(),date.getMinutes()));
// console.log(arabToRomeM(date.getHours(),date.getMinutes()));

var hours = process.argv[2];
var minutes = process.argv[3];
if ((0<=hours&hours<24)&(0<=minutes&minutes<60)){
	console.log(arabToRomeTime(hours,minutes));
	console.log(arabToRomeM(hours,minutes));
}
else {
	console.log('Время задано неверно');
};
