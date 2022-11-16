///////////////////////porgrama que rastra ip con ipstack
//////opciones
const key="3a2ce75fe78be9ef91522fc761a3c3c0"
/////////funcion get IP 
const getIP =  ip => {
    const URL=`http://api.ipstack.com/${ip}?access_key=${key}`;

    return fetch(URL)
        .then(response => response.json())
        .then(json => json)
};

const n = selector => document.querySelector(selector);

const form = n("#form");
const input = n("#ip");
const result = n("#result");
const submit = n("#submit");

/*palabra nueva async=asyncrona*/
form.addEventListener("submit" , async (event) =>{ /*cuando se precione submit hacer..*/
	event.preventDefault();	//prevenir evento y recarge la pagina
	const { value } = input;       //////////preguntar esto
	submit.setAttribute("disabled" , '');   
	submit.setAttribute("aria-busy" , 'true');
	
	const json = await getIP(value);

	submit.removeAttribute("disabled");
	submit.removeAttribute("aria-busy");

	result.innerHTML = JSON.stringify(json , null , 2);
});