function User(name) {
	this.name = name;
}
User.prototype.getName = function() {return this.name};
// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const me = new User('Rex');
console.log(me.getName()); // Rex
