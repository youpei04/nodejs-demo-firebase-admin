var express = require('express');
var util = require('util');
var fs = require('fs');
var formidable = require('formidable');
var crypto = require('crypto');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../core/HttpUtils');
require('../core/push');
require('../model/model');

router.get('/', function (req, res, next) {
    res.redirect('/web/push');
});

router.get('/login', function (req, res, next) {
    res.render('web/login', {username: ''});
});

router.get('/logout', function (req, res, next) {
    //清空user信息
    req.session.user = null;
    req.session.website = null;
    res.redirect('/web/login');
});
router.post('/login', function (req, res, next) {
    var sqlClient = new SqlClient();
    var user = new User();

    sqlClient.query(user, function (result) {
        if (result != null && result.length > 0) {
            user = result[0];
            // 密码加密
            var md5 = crypto.createHash('md5');
            md5.update(req.body.password);
            var md5pwd = md5.digest('hex');
            if (user.password != md5pwd) {
                res.render('web/login', {status: 2, msg: '密码错误!', username: req.body.username});
                return;
            }
            if (user.createtime) user.createtime = CommonUtil.toDateString(user.createtime);
            req.session.user = user;
            user.lastlogintime = CommonUtil.toDateTimeString(Date.now());
            user.tablename = new User().tablename;
            sqlClient.update(user,function(result){
                console.log(result);
            })
            res.redirect('/web/push');
            return;
        }
        res.render('web/login', {status: 3, msg: '帐号不存在!', username: req.body.username});
    }, util.format(" where username='%s'", req.body.username));
});
//推送消息
router.get('/push', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (website) {
        if (user) {
            res.render('web/push', {user: user, website: website,message:new Message()});
        } else {
            res.redirect('/web/login');
        }
    } else {
        website = new Website();
        var sqlClient = new SqlClient();
        sqlClient.query(website, function (result) {
            if (result != null && result.length > 0) {
                website = result[0];
                req.session.website = website;
                if (user) {
                    res.render('web/push', {user: user, website: website,message:new Message()});
                } else {
                    res.redirect('/web/login');
                }
                return;
            }
            res.redirect('web/logout');
        });
    }
});
router.post('/push/add',function(req,res){
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/web/login');
        return;
    }
    var message = new Message();
    message.id = CommonUtil.uuid();
    message.content=req.body.content;
    message.title=req.body.title;
    message.reg_ids=req.body.reg_ids;
    message.type="other";
    debugger;
    push.sendMessage(message.reg_ids,message.title,message.content,function(res){
        debugger;
    })

    // res.render('web/push', {user: user, website: website,message:new Message()});

})
module.exports = router;