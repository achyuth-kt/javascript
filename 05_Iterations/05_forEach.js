//for each
const lang=["js","java","cpp","py"]

//function can be called
lang.forEach(function (item){
  console.log(item);//js java cpp py is printed
})

//arrow function also
lang.forEach((item)=>{
  console.log(item);//js java cpp py is printed
})


//we can call a function
function printer(item){
  console.log(item);
}

lang.forEach(printer)//js java cpp py is printed

//for each can access 3 components
lang.forEach((item,index,arrr)=>{
  console.log(item,index,arrr);
})
//output
// js 0 [ 'js', 'java', 'cpp', 'py' ]
// java 1 [ 'js', 'java', 'cpp', 'py' ]
// cpp 2 [ 'js', 'java', 'cpp', 'py' ]
// py 3 [ 'js', 'java', 'cpp', 'py' ]

//objects in array forEach
const language=[
  {
    langName:"java script",
    fileName:"js"
  },
  {
    langName:"python",
    fileName:"py"
  },
  {
    langName:"java",
    fileName:"java"
  }
]

language.forEach((item)=>{
  console.log(item.langName);
  console.log(item.fileName);
})
//output
// java script
// js
// python
// py
// java
// java

