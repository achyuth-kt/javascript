# Java Script-02

## DOM

#### Accessing
- we use className
```javascript
document.getElementId('title').className
```
- get attribute
```javascript
document.getElementById('title').getAttribute('class')
```
- set attribute
```javascript
 document.getElementById('title').setAttribute('class','test heading')
```
- inner content
```javascript
//include hidden text
 document.getElementId('title').textcontent
 //does not include inner text
 document.getElementId('title').innerText
 //inner html (it may be text or html code)
 document.getElementId('title').innerHtml

 //by class
 document.getElementClassName('heading')
```
- input inside type
```javascript
//html
// <input type="password" name="" id="">

 //javascript
 document.querySelector('input[type="password"]')
```
- QuarrySelectorAll
```javascript
//set of list
const list=document.querySelectorAll('li')
list[0]->first list
//loop
list.forEach(function (l){
    l.style.backgroundColor='green'
    
})
```
- getElementClassName()
```javascript
//let 3 list-items
document.getElementClassName('list-item')
//all three list are selected
//but we cannot use loops on it
//we can by
let list=document.getElementClassName('list-item')
Array.from(list)//converting it to array
```

#### Parent & Child

- html
```html
<body class="bg-black">
  <div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
  </div>
</body>
```

##### Parent

```javascript
 const parent=document.querySelector('.parent')
 console.log(parent.children)//all days in array format

// loop
for(let i=0;i<parent.children.length;i++){
    console.log(parent.childer[i].innerHTML)
}
//first and last element only accessed
parent.firstElementChild
parent.lastElementChild
```

##### Child
```javascript
//first class is selcted
const child=document.querySelector('.day')
//accessing parent
child.parentElement
//next child
child.nextElementSibling
```

#### Creating & Inserting Element(div)
- creating
```javascript
let div=document.createElement('div')
div.classNmae="create"
div.id=787
div.setAttributes('title',"Div01")
```
- inner text
```javascript
  div.innerText="Div is created"

  //optimal way is
  const text=document.createTextNode("Div is created")
  div.appendChild(text)
```
- Inserting div
```javascript
   document.body.appendChild(div)
```
#### Add,Edidt,Remove Element
- html
```html
 <body class="bg-black">
   <ul class="lang">
     <li>Java script</li>
   </ul>
 </body>
```
- function for creating a list
``` javascript
 function create(lang){
    const li=document.createElement('li')
    list.innerText=`${lang}`
    document.querrySelector('ul').appendChild(list)
     }
 create("Python")
 create("java")    
```
- optimal funcion
``` javascript
 function create(lang){
    const list=document.createElement('li')
    const li=document.createTextNode(`${lang}`)
    list.appendChild(li)
    document.querrySelector('ul').appendChild(list)
 }
 ```
 - Edit

 ``` javascript
 //by index(1 based indexing)
 //you know optimal one
 const selectSecond=document.querryselector('li:nth-child(2)')
 selectSecond.innerText="Node JS"
 //for first or last list
 ('li:first-child')
 ('li:last-child')
 ```

 - Remove
 ```javascript
  const lastChild=document.querySelector('li:last-child')
  lastChild.remove()
 ```
###### tagName
- list->LI
- image->IMG
- div->DIV......

#### setTime & setInterval
- here for function perenthesis is not used
- clearTimeout(____) will stop setTime or setInterval
```javascript
function printHii(){
  console.log("Hii")
}
  setTime(printHii,2000)

  const reference=setInterval(printer,2000,"Good Morning")//which is input("Good Morning)
```


## Events

#### alert
- onclick
- quarryselector->onclick
- querryselector->addEventListner
```javascript
//best method
document.quarrySelector('element').addEventListener('click',function(e){
  alert("clicked")
})
```

#### events
```javascript
document.getElementById('owl').addEventListner('click',function(e){
  console.log(e)
  console.log(e.target)
  e.stopPropogation()//it will not run for next in bubbling 
  },false)
  //false(default->bubbling)
  //true->no bubbling
```

#### defaultPreventer
```html
   <a style="color: aliceblue;" href="https://google.com" id="google">Google</a>
```
```javascript
 document.getElementById('google').addEventListener('click',function(e){
    //now link for google won't open
    e.preventDefault()
  })
```
###### Learn about
    type,timestap,defaultPrevented
    target,toElement,srcElement,currentTarget 
    clientX,clientY,screenX,screenY (Dimension)
    altkey, ctrlkey, shiftkey, keyCode(key value)

## Promise

#### Resolve 
```javascript
const promiseOne=new promise(function(resolve,reject){
  setTime(function(){
    console.log("Asyc task is completed");
    resolve()//here then called
  },1000)
}).then(function(){//joined
  console.log("resolved")
})
// separate
promiseOne.then(function(){
  console.log("resolved")
})
```

#### chaining
```javascript
   const promiseTwo=new promise(function(resolve,reject){
    setTime(function(){
      console.log("Asunc task completed")
      resolve({userName:"Achyuth"})
    },1000)
   })
  //chaining
   promiseTwo.then(function(user){
    console.log(user)
    return user.userName
   }).then(function(name){
    console.log(name)
   })
```


#### reject & finally
```javascript
  const promiseThree=new promise(function(resolve,reject){
    let error=true
    if(!error){
      resolve()
    }else{
      reject()
    }
  })
  promiseThree.then(function(){
    console.log('resolved')
  }).catch(function(){
    console.log('Error occured')
  }).finally(){
    console.log("it will always execute")
  }
```

- Example(git hub API)
```javascript
  fetch("https://api.github.com/users/achyuth-k-t")
  .then(function(response){
   return response.json()
  }).then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log(error,"Error occured")
  })
```

## Closure
```javascript
function outer(){
  let name="Achyuth"
  function inner(){
    console.log("Name is :",name);
  }
  return inner
}
//in closure if it is accessing inner function 
//it will also consider outer function(because inner func may access data from outer function)
const myFunc=outer()
myFunc()
```
