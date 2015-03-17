var Client = function (name, age, sex, location) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.location = location;
}

Client.prototype.asl = function () {
	return this.age + '/' + this.sex + '/' + this.location;
};
