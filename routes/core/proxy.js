/**
 * Created by Administrator on 2018/3/23.
 */
var http = require("http");
var httpProxy = require("http-proxy");
var url=require('url');
/**
 * 翻墙代理
 * @type {*}
 */
var proxy = httpProxy.createProxyServer({
    //代理的地址
    target: 'http://127.0.0.1:65289/',
    // 下面的设置用于https
    // ssl: {
    //     key: fs.readFileSync('server_decrypt.key', 'utf8'),
    //     cert: fs.readFileSync('server.crt', 'utf8')
    // },
    // secure: false
});
proxy.on('error', function(err, req, res){
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    //判断如果是接口访问，则通过proxy转发
    if(pathname.indexOf("google") > 0){
        proxy.web(request, response);
        return;
    }
});
server.listen(80);
