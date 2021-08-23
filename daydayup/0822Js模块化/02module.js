function foo2(){
    console.log('02foo' + data)
}

let myModule2 = {
    data :'xm',
    foo(){
        console.log('myModule2' , this.data)
    }
}