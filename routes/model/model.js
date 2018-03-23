/**
 * Created by Administrator on 2016/12/8.
 * ORM 的 Model
 */

//用户信息
User=function(){
    this.tablename='user';      //用户表
    this.id=null;               //ID
    this.username="";         //登录名
    this.password="";         //登录密码
    this.displayname="";      //显示姓名
    this.status=0;           //状态(0.禁用,1.启用)
    this.createtime="";       //创建日期
    this.lastlogintime="";    //最后登录日期
};
//网站信息
Website=function(){
    this.tablename='website';   //网站信息
    this.id=null;               //ID
    this.siteurl="";          //网站URL
    this.title="";            //网站标题
    this.description="";      //网站描述
    this.keywords="";         //网站关键词
    this.logo="";             //网站logo
    this.carousel="";         //轮播图片url
    this.icp_num="";          //备案
    this.support_name="";     //技术支持name
    this.support_url="";      //技术支持url
    this.views=0;            //浏览次数
};
/**
 * app用户表
 * @constructor
 */
OilUser = function(){
    this.tablename="xts_oil_user";//用户表
    this.id=null;//id
    this.user_id="";//用户标识id
    this.platform="";//用户类型
    this.reg_id="";//谷歌推送服务注册id
}
/**
 * 推送消息表
 * @constructor
 */
Message = function(){
    this.tablename="xts_message";
    this.id=null;//id
    this.title="";
    this.content="";
    this.reg_ids="";
    this.type="";
}