
function update_p_tag(thing_to_do){
  let p_tag = document.getElementById('thing_to_do');
  p_tag.innerHTML = thing_to_do;
}

function api_call(){
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => {
      response.json().then(data => {
      let thing_to_do = data['activity'];
      update_p_tag(thing_to_do);
    });
  })
}

function clicked(){
    api_call();
};