var http = require('http');
var url=require('url');
var Mock = require('mockjs');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    var data = Mock.mock({
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });

    response.writeHead(200, {'Content-type' : 'application/json; charset=utf-8'});
    response.write(data);
    response.end();
    // switch(url){
    //     case "/":
    //         console.log(response)

    // }
}).listen(8082);
