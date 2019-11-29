function* FibonachiGenerator()
{
	let fib1 = 1;
  	let fib2 = 1;
  	for(let i=0; true; i++)
  	{  
	    let temp = fib2;
	    fib2 = fib1;
	    fib1 = fib1 + temp;
	    let reset = yield temp;
	    if (reset)
	    {
	    	let fib1 = 1;
  			let fib2 = 1;
	    }
	}
}

function generateFibN()
{
	let N = prompt("Скільки згенерувати елементів?", 1);
	let fib = FibonachiGenerator();
	console.log("");
	for (let i = 1; i<=N; i++)
	{
		console.log(fib.next().value)
	}
}

function start()
{
	let choice = 1;
	while(choice != 0)
	{
		generateFibN(); 
		choice = prompt("Продовжити? (символ - так, 0 - ні.)", 1);
	}
}

alert("Task1 JS. Ряд Фібоначчі.\n\nВведіть start() у консолі.")