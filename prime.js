function prime(num){
	let count=0;
	for(i=1;i<num;i++){
		if(num%i==0){
			count++;
		}
	}
	if(count==2){
		return true;
	}else{
		return false;
	}
}

let ans=prime(12);
if(ans==true){
	console.log("is prime number");

}
else{
	console.log("is not prime number");
}