//首先进入界面提供两种选择，平坦模式，正常模式
//首先界面默认flex 居中布局
//选项
function createnewElement(id){
    const i = document.createElement("div")
    i.id = id
    return i
}
function a(a){
    console.log(a)
}
// document.body.offsetWidth 1659
// document.body.offsetHeight 945
// 创建草方块
// Math.floor(document.body.offsetWidth/15) 93
// Math.floor(document.body.offsetHeight/15) 63
// 获取种子seed,由线性同余法产生次种子lcg
let seed
function lcg(seed, x, c, m) {  
    return (seed * x + c) % m;  
}  
let x = 1103515245;  
let c = 114514;  
let m = Math.pow(2, 31); 
// 由于这是平坦世界，不需要种子
// 创建草方块
for(var i = 0;i<99;i++){
    const grass_block = createnewElement("grass_block")
    grass_block.style.position = 'absolute'
    grass_block.style.width = '1vw'
    grass_block.style.height = '1vw'
    grass_block.style.top = '25vw'
    grass_block.style.left = i+'vw'
    grass_block.style.border = '0.1px solid black'
    grass_block.style.backgroundColor = 'green'
    document.querySelector("#main_world").appendChild(grass_block)
}
