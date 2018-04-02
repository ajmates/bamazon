var mysql = require ('mysql');
var inquirer = require ('inquirer'); 
var connectionDB = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

connectionDB.connect(function(err){
	if (err) throw error; 
	shop(); 
})

function shop(){
	console.log("Let's Shop!");

connectionDB.query("Purchase from", function(err, res){
	if (err) throw error; 
	for (item in res){
		console.log(res[item].id + '|' + res[item].product_name + '|' + res[item].price);
	}

inquirer
	.prompt([
	{
		type: "input", 
		message: "Enter ID Number",
		name: "id"
	},
	{
		type: "input",
		message: "Quantity?",
		name: "quantity"

	}
	]).then(function(answers){
		var select = parseInt(answers.id) - 1;

		if (res[select].stock_quantity < answers.quantity){
			console.log("Insufficient stock.");
		} else {
			var cost = answers.quantity * res[select].price; 
			var newQuantity = res[select].stock_quantity - answers.quantity;

			console.log(answers.quantity + res[select].product_name + " purchased. ("+ newQuantity + "in stock.)"); 
			console.log("Total $" + cost); 

		connectionDB.query("Update",
			[{stock_quantity: newQuantity}, {id: answers.id}]); 
		};
connectionDB.end();
	})
}
}