url=new URL(location.href)
type=url.searchParams.get('type')
loginBtn=document.querySelector('#loginBtn')
registerBtn=document.querySelector('#registerBtn')
username=document.querySelector('#username')
email=document.querySelector('#email')
password=document.querySelector('#password')
form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
})
if (registerBtn!=null) {
registerBtn.onclick=async()=>{
  request=await fetch('https://editor-k5t5.onrender.com/api/user/register',{
    method:'POST',
    body:JSON.stringify({
      username:username.value,
      email:email.value,
      password:password.value
    }),
    headers: {
        "Content-type": "application/json"
    } 
  })
  requestFinal=await request.json()
  console.log(requestFinal)
  if (request.ok) {
   location.href='login.html'
  }
  if(!request.ok){
    alert("please try again")
  }
}}
if (loginBtn!=null) {
  loginBtn.onclick=async()=>{
  request=await fetch('https://editor-k5t5.onrender.com/api/user/login',{
    method:'POST',
    body:JSON.stringify({

      email:email.value,
      password:password.value
    }),
    headers: {
        "Content-type": "application/json"
    } 
  })
  requestFinal=await request.json()
  console.log(requestFinal)
if(request.ok) {
   localStorage.setItem('token',requestFinal)
   location.href='index.html'
  } 
  if(!request.ok) {
  alert(requestFinal) 
  }
}
}
