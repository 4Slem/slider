
var elem = document.getElementsByClassName('wrap')[0];
var count = document.getElementsByClassName('item').length;
var width = document.getElementsByClassName('container')[0].offsetWidth;

console.log(width);



var item = document.getElementsByClassName('item');

var size = width/4

console.log(size/100 + 100);
for(x of item) {
	x.style.width = size + 'px';
}

const stat = count - 4;

document.getElementById('divs').onmousemove = function(e) {
  	var x = divs.offsetX==undefined?e.layerX:e.offsetX;
 	var ss = (x/width*100)/(count/stat);
  	elem.style.transform = "translate(-"+ss+"%, 0)";

  	$('.item').each(function(index) {
  		console.log($(this).offset().left);
  		/*if($(this).offset().left > width - 100 && $(this).offset().left < width + 300) {
  			console.log($(this).children('.add').css('transform', 'perspective( 400px ) rotateY(45deg)'));
  		} else if($(this).offset().left > 0 && $(this).offset().left < 100){
  			$(this).children('.add').css('transform', 'perspective( 400px ) rotateY(45deg)')
  		} else {
  			$(this).children('.add').css('transform', 'perspective( 400px ) rotateY(0deg)')
  		}*/



  		if($(this).offset().left > 100 && $(this).offset().left > width - 100) {
  			
  			$(this).children('.add').css('transform', 'perspective( 400px ) rotateY(45deg)')
  		} else {
  			$(this).children('.add').css('transform', 'perspective( 400px ) rotateY(0deg)')
  		}
  	});
  	
}

$('.item').mouseover(function(e){
	$(this).css('width', size+(size/100 + 150)+'px');
});

$('.item').mouseleave(function(e){
	$(this).css('width', size+'px');
});