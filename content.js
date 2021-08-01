chrome.runtime.onMessage.addListner(function(request){
  addText(request)
})

function addText(request){
  document.body.innerHTML += request
}