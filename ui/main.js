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