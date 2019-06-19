function IsPrime(num) {

   for ( var i = 2; i < num; i++ ) {
       if ( num%i === 0 ) {

           return false;
       }
   }
   return true;

}function assign(n) {

   var array = [2];

   for ( var i = 3; i < n; i=i+2 ) {

       if (IsPrime(i) ) {
       	
           array.push(i);
       }
   }
   console.log(array); 

}assign(100);
