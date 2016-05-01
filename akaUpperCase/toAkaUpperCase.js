
String.prototype.toAkkaUpperCase = function() {

	var integer=0,i;
	var newString="";

	for(i=0;i<this.length;i++){

		var integer = this.charCodeAt(i);

		if(integer>=97 && integer<=122){
			integer=integer-32;
			newString=newString+String.fromCharCode(integer);
		}
		else{
			newString=newString+String.fromCharCode(integer);
		}
	}

	return newString;

};
