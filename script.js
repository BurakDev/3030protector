var array = document.getElementsByTagName("a");

for(var i = 0; i < array.length; i++){
	var a = array[i];
	if(a.pathname.indexOf("%00", a.pathname.length - 3) !== -1){
		a.href = "#";
	}
}

delete array;