// function for push in array

Array.prototype.akaPush=function(value){

var len = this.length;
  this[len] = value;
  len++;
  this.length = len;
  return len;
}