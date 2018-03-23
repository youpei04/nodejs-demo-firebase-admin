/**
 * Created by youp on 2018/3/15.
 */
var request = require('request');
HttpUtils = function(){};
HttpUtils.post = function(url,data){
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
    }, function(error, response, body) {
        debugger;
    });
}

