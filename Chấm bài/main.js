let n=10;

let kt=true;
if(isNaN(n)||n<=1){
    console.log("khong phai la so nguyen to");
    
}else{
   let numstar=2;
   let output="";
   let count=0;

   while(count<n){
    let snt=true;
    
    for(let i=2;i<=Math.sqrt(numstar);i++){
        if(numstar%i==0){
            snt=false
            break;
        }
    }
     if(snt){
        output+=numstar+" ";
        count++;
     }

    numstar++;
   }

   console.log(output);
}