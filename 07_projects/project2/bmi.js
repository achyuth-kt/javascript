const form=document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()

  const height=parseInt(form.querySelector('#height').value)
  const weight=parseInt(form.querySelector('#weight').value)
  const result=form.querySelector('#results')


  if(height=='' || height==0 || isNaN(height)){
    result.innerHTML="Please enter valid Height"
  }
  else if(weight=='' || weight==0 || isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }else{
    const bmi=(weight/(height*height/10000)).toFixed(2)
     if(bmi<18.6){
      result.innerHTML=`${bmi} : Under Weight`
     }else if(bmi<25){
      result.innerHTML=`${bmi} : Normal Weight`
     }else{
      result.innerHTML=`${bmi} : OverWeight`
     }

  }
})