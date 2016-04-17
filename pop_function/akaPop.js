Array.prototype.akaPop=function(){
	if(this.length>0){
		var len = this.length;
			len--;
			this.length = len;
			return len;
	}
	else{
		console.log("Array is empty")
	}
}