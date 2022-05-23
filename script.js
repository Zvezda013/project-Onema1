//	var money = +prompt("Ваш бюджет на месяц"),
//	time = prompt("введите дату в формате YYYY-MM-DD");
function start(){
	money = +prompt("Ваш бюджет на месяц");
	time = prompt("введите дату в формате YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц");
	}
}
start();
var appData	= {
	budget : money,
	timeData : time,
	expensis: {},
	optionalExpenses: {},
	income: [], 
	savings: true,
	chooseExpenses: function(){ 
		for(var i = 0; i < 2; i++){
			var a = prompt("Введите обязательную статью расходов в этом месяце"); 
				b = prompt("Во сколько обойдется?");
			if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 10){
				console.log("done")
				appData.expensis.a = b;
			} else{
				i = i - 1;
			}
		}
	},
	detectDayBudget: function(){
		appData.moneyPerday = (appData.budget / 30).toFixed(1);
		alert('Ежедневный бюджет:' + appData.moneyPerday);
	},
	detectLevel: function(){
		if (appData.moneyPerday < 300){
			console.log("Минимальный уровень достатка!");
		} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000){
			console.log("Средний уровень достатка!");
		} else if (appData.moneyPerday > 2000 ){
			console.log("Хороший уровень достатка!");
		} else{
			console.log("Произошла ошибка");
		}	
	}, 
	checkSavings: function(){
		if(appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?!");
	
			appData.monthIncome =(save/100/12*percent).toFixed(1);
			alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
		}
	},
	chooseOptExpenses: function(){
		for(let i =1; i < 3; i++){
			let opt = prompt("Статья необязательных расходов?", "");
			appData.optionalExpenses[i] = opt; 
		}
	}, 
	chooseIncome: function(){
		let items = prompt("Что принесет дополнительный доход? (Перечисли через запятую", '');
		appData.income = items.split(', ');
		appData.income.push(prompt("Может еще что-то"));
		appData.income.sort();
	}
};




