function User(name) {
	this.name = name;
	function getName() {
		return name
	}
	return {
		getName : getName
	}
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const me = new User('Rex');
console.log(me.getName()); // Rex
