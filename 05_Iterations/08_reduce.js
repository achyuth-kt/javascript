//reduce function
const num=[1,2,3,4,5]
let var1=num.reduce((acc,val)=>{
  console.log(`acc :${acc} and val :${val}`);
  return val+acc},0)
  console.log(var1);
//   output
// acc :1 and val :2
// acc :3 and val :3
// acc :6 and val :4
// acc :10 and val :5
// 15

//here initaally acc=0 as given above
         // then acc=acc+val 
      // returns acc; in tthe end

let var2=num.reduce((acc,val)=>acc+val,5)     
console.log(var2);//20