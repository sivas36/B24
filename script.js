//1.Create a XMLHTTPREQUEST object
var req = new XMLHttpRequest();
//2.open a connection
//true is use bcz that should not affect the rest part of the exection of the prgrm

req.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send the connection
//send the request
req.send();
//4.once the data received successfully
//data receiveing fromthe server will be of string format
//to conver it into a js object we use .parse.

req.onload=function()
{
    
    var data = JSON.parse(this.response);
    for(var i=0;i<=data.length;i++){
    var n =data[i].name;
    var lat=data[i].latlng[0];
    var long=data[i].latlng[1];
    waether(n,lat,long);
   
  
    }

}

function waether(name,a,b){
    var request=new XMLHttpRequest();
    url = new URL("https://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+ b +"&appid=77794824797fb725dd52c79b1982d7bf")

    request.open('GET',url,true);
    request.send();
    request.onload=function(){
    var datas= JSON.parse(request.response);
    console.log(name +" : " + datas.main.temp)
    }


    
}

