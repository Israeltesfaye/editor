iframe=document.querySelector('iframe')
url=new URL(location.href)
files=JSON.parse(localStorage.getItem('files'))

iframe.contentDocument.body.innerHTML=files.html+"<style>"+files.css+"</style>"
iframe.contentWindow.eval(files.js)