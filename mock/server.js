var express = require('express');
var url=require('url');
var Mock = require('mockjs');
var app = express(); 

app.all('*', function(req, res) {
    var data = Mock.mock({
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });
    res.send(data);
});
/**
 * 监听8082端口
 */
app.listen('8082');
