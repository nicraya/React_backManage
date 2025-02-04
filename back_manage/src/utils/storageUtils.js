/*
*   该文件的作用是存储一些对用户信息操作的方法
* */
export default {
    saveUser:function (userInfo) {  //保存用户信息
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
    },
    getUser:function () {   //获取用户信息
        return JSON.parse(localStorage.getItem('userInfo')||'{}')
    },
    removeUser:function () {    //删除用户信息
        localStorage.removeItem('userInfo')
    }
}