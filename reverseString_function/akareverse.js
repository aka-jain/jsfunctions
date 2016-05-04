String.prototype.akaReverseString=function  () {
	
	var rev="";

	for (i=this.length-1;i>=0;i--){
		rev=rev+this[i];
	}
	return rev;

}
