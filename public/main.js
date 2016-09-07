'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/
function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	form.hidden = true;
	let obj = JSON.parse(result);
    	let count = obj.count;
	window.helloWorld.innerHTML = plural(count); 

	console.log(data, result);
}

function plural(count) {
    if (count == 0) {
        return "Здравствуй, дух";
    }
    if (count == 1) {
        return "Рады приветствовать на нашем курсе!";
    }
    if (count > 1 && count < 15) {
	if ( (15 - count) == 2 || (15 - count) == 3 || (15 - count) == 4)
            return "Кликай дальше!! Еще осталось " + (15 - count) + " раза";
        else
	    return "Кликай дальше!! Еще осталось " + (15 - count) + " раз";
    }

    return "01001000 01101001 00101100 00100000 01100010 01110010 01101111";
}

function hello (text) {
	return 'Привет, ' + text;
}

if (typeof exports === 'object') {
	exports.hello = hello;
	exports.plural = plural;
}
