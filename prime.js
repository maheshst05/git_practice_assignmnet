function prime(num){
	let factor=0;
	for(i=1;i<num;i++){
		if(num%i){
		factor++;
		}
	}
	return factor;
}



let ans=prime(12)
if(ans==2){
			console.log("its prime number");
		}
		else{
			console.log("its not prime number");
		}