var exp=require('express');
var app=exp();
app.get('/',function(req,resp)
{
resp.send("Hey!I am the response");
console.log("No URL");
});

app.get('/Bulb/:status',function(req,resp)
{
var  status = req.params.status;
console.log(JSON.stringify(req.params.status) );
if(status.toLowerCase() == 'on' ){
  console.log("Bulb ON" + JSON.stringify(req.params));
resp.send("Hey! Bulb is On");
}
else{
console.log("Bulb Off" + JSON.stringify(req.params));
resp.send("Hey! Bulb is Off");
}


});

app.get('/BulbOff',function(req,resp)
{
resp.send("Hey! Bulb is OFF");
console.log("Bulb OFF");
});


var server=app.listen(3000,function(){})