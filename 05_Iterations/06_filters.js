const lang=["js","java","cpp","py"]

//in any for loops return is not possible 
const val=lang.forEach(function (item){
  return item
})
console.log(val);//undefined


//Filter will work only for true or false
//filter cannot change the values in storing variable("varr")

//to return we use filters
const num=[1,2,3,4,5]
let varr=num.filter((val)=> val>2)
console.log(varr);//[ 3, 4, 5 ]

//or
varr=num.filter((val)=>{
  if(val>2)
  return val
})
console.log(varr);//[ 3, 4, 5 ]

//another example 
//for objects
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];



const bookk=books.filter((bk)=>bk.genre==="History")
console.log(bookk);

//output will be all the objects with genre as "History"
//output
// [  {title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },{
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996}]