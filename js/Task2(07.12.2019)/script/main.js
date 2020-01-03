function Guess(min, max)
{
	// min = Math.ceil(min);
 //  	max = Math.floor(max);
  	let number = Math.floor(Math.random() * (max - min)) + min, count = 0, N;
  	console.log("number = " + number);
  	do
  	{
	  	let str = "Вгадайте число з проміжку [" + min +";"+ max + "]";
	  	N = max;
	  	//console.log("до циклу ", N);
	  	while (N >= max || N <= min)
		{
			N = prompt(str, min);
			//console.log("після циклу ", N);
			if (N==null)
			break;
		}
		
		console.log(N);
		if (N==null)
			break;

	  	count++;
	  	console.log("count = " + count);
	  	if (N==number)
		{
			alert("Вітаю! Ви вгадали число за " + count + " спроб(-у, -и).");
			console.log("Вітаю! Ви вгадали число за " + count + " спроб(-у, -и).");
			return ;
		}
		else
		{
			alert("Спробуйте ще!");
	  		console.log("Спробуйте ще!");			
		}
		if (N<number)
	  	{
	  		min = N;
	  	}
	  	else if (N>number)
	  	{
	  		max = N;
	  	}
	} while (N!=number);

}
