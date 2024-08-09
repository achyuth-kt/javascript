const marvel_heros=["thor","ironman","hulk"]
const dc_heros=["batman","flash","superman"]

//if we push

// console.log(marvel_heros.push(dc_heros));

//it will take has array datatype into it
//output
// [ 'thor','ironman','hulk',[ 'batman', 'flash', 'superman']


//Concatinate(concat)
// take a copy of array1 and array2 store it in a different one
const new_heros=marvel_heros.concat(dc_heros)
console.log(new_heros);


//Another type of concatination
// but we can concatinate N num of arrays
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

// Flat
//here there is array inside array inside array
const newArr=[1,5,[4,2,7],[3,6,[4,9,0]]]

//to flat it we use flat
// we should tell the depth the above ones depth is 3

//Infinity means flattens all it may be of any depth
const flatArr=newArr.flat(Infinity);
console.log(flatArr);


//Array
console.log(Array.isArray("achyuth"));//false
//convert to an array
console.log(Array.from("Achyuth"));//[ A,c,h,y,u,t,h ]

//we should specify if key or values(name or Achyuth)
console.log(Array.from({name:"Achyuth"}));//empty

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]