let data = 'lgb';

function foo(){
    console.log('01foo' + data)
}

let myModule = {
    data : 'lrx',
    foo(){
        console.log('1111' , this.data)
    }
};


// IIFE 匿名函数自调用
// 先定义匿名函数 , 没有名称的函数
// 注入window , 将内部数据(函数\属性)绑定到window中
// 最后调用时, 传入window
(function(window){
    console.log('匿名函数内部')
    let data = 'QQ'

    let struid = '888'

    function foo(){
        console.log(this)
        console.log('foo' , 'this='+this , 
        'data='+data , 'struid='+this.struid)
    }

    window.myModule3 = {struid , foo}
})(window);


(function(window , $){
    let data = 'quanxin'
    function foo(){
        console.log(this)
        console.log($)
        console.log('this='+this.data)
        $('body').css('color' , 'red')
    }
    window.myModule4 = {data , foo}
})(window , jQuery)