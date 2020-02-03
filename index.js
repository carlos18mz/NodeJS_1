var http = require("http");
var url = require("url");
var fs = require("fs");
var log = require("./modules/mylog");
var querystring = require("querystring");
var {info} = require("./modules/mylog");
var {countries} = require("countries-list");

var server = http.createServer(function(request, response){
    
    var parsed = url.parse(request.url);
    console.log("parsed : ",parsed);
    /*
    response.writeHead(200,{'Content.Type':'application/json'});
    response.write(JSON.stringify(countries.EC));
    response.end();*/


    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log(query);
   
    if(pathname === "/")
    {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>HOME PAGE</p></body></html>');
        response.end();
    }
    else if( pathname === "/exit")
    {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>SALIDA</p></body></html>');
        response.end();
    }
    else if(pathname === "/info")
    {
        var result = log.info(pathname);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }
    else if(pathname === "/error")
    {
        var result = log.error(pathname);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }
    //export modules
    else if(pathname === "/country")
    {
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }
    else
    {       
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    }
    

});


server.listen(4000);

console.log("running on 4040");

