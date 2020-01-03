function Guess(min, max)
{
	let rules = "Якщо відповідь \"так\" - введіть 1, якщо \"ні\" - введіть 0.";
	alert("Загадайте число, а я його вгадаю.\n" + rules);
	let N = 0, count = 0, number, interval;
	do
	{
		number = Math.min(Math.max(Math.floor(Math.random() * (max - min)) + min, min+1), max);
		N = prompt("Проміжок [" + min + ";" + max + "]\nЗагадане Вами число = " + number, 1);
		if (N==0)
		{
			count++;
			do
			{
				interval = prompt( number + " більше загаданого числа?\n" + rules, 1);
			} while (interval!=0 && interval!=1 && interval!=null);
			if (interval==1)
				max = number;
			else if (interval==0)
				min = number;
		}
	} while (N!=1 && N!=null);
	if (N==1)
		alert("Ураа! Я вгадав число за " + (count +1) + " спроб(-у, -и).");
}