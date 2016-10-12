function rysujChoinke(x){
 	var star = [];
	for(i = 1; i <= x; i ++){
    	star = [];
    	
		for(j = 1; j <= i*2-1; j ++){
		star.push("*");
		}
		console.log(star.join(''));
	} 
}