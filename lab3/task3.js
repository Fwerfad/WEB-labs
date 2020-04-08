const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};
function isEquivalent(obj1, obj2) {
	if (obj1.name === obj2.name) {
		if (obj2.weight === obj2.weight) {
			return true
		}
	}
	return false
}
// Реализуйте функцию isEquivalent

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false
