//counter code
var button= document.getElementById('counter');

button.oneclick = function () {
    
    // create the response and store it in a variable
    var request = new XMLHttpRequest();
    
    //capture the response and store it in  variable
    request.onreadystatechange = functio() {
        if(request.status === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200)
            var counter = =request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    // not done yet
};
    // make the request
    request.open('GET', 'http://http://kenilgadhiya.imad.hasura-app.io/counter' , true);
    
};

//submit name
var nameInput == document.getElementById('name');
var name = nameInput.value;
var sbmit = document.getElementById('submit_btn');
submit.oneclick = function () {
  // make a request to the server and send the name
  
  // capture a list of names and render it as a list
  var name = ['name1','name2','name3','name4'];
  var list = '';
  for (var i=0;i<=names.length; i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};