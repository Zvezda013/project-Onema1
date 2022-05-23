var money = +prompt("Ваш бюджет на месяц"),
	time = prompt("введите дату в формате YYYY-MM-DD");

var appData	= {
	budget : money,
	timeData : time,
	expensis: {},
	optionalExpenses: {},
	income: [], 
	savings: false
};
/** 
for(var i = 0; i < 2; i++){
	var a = prompt("Введите обязательную статью расходов в этом месяце"); 
		b = prompt("Во сколько обойдется?");
	if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 10){
		console.log("done")
		appData.expensis.a = b;
	}
};
appData.moneyPerday = appData.budget / 30;
*/
let i = 0;
while(i< 2){
	
	var a = prompt("Введите обязательную статью расходов в этом месяце"); 
		b = prompt("Во сколько обойдется?");
	if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 10){
		console.log("done");
		appData.expensis.a = b;
	i++;
}
};
appData.moneyPerday = appData.budget / 30;


alert('Ежедневный бюджет:' + appData.moneyPerday);

if (appData.moneyPerday < 300){
	console.log("Минимальный уровень достатка!");
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000){
	console.log("Средний уровень достатка!");
} else if (appData.moneyPerday > 2000 ){
	console.log("Хороший уровень достатка!");
} else{
	console.log("Произошла ошибка");
}
