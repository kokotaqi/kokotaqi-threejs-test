//vw转px
function vxtruntopx(vw) {
    px = window.innerWidth / 100 * vw
    return px
}
player = createnewElement("player");
// 给player设置基本属性
player.style.width = '1.8vw'
player.style.height = '2.9vw'
player.style.position = 'absolute'
player.style.border = '1px solid black'
player.style.left = '5vw'
document.querySelector("#main_world").appendChild(player)
// 添加按键事件
let move_left
let move_right
let move_jump
let move_x = 5
document.onkeydown = function (event) {
    if (event.key === 'a') {
        move_left = true
    }
    if (event.key === 'd') {
        move_right = true
    }
    if (event.keyCode === 32) {
        move_jump = true
    }
}
document.onkeyup = function (event) {
    if (event.key === 'a') {
        move_left = false
    }
    if (event.key === 'd') {
        move_right = false
    }
    if (event.keyCode === 32) {
        move_jump = false
    }
}
// 设置重力
top_ = 0
speed = 0.1
let gravity
function set_gravity() {
    gravity = setInterval(() => {
        if (player.offsetTop < vxtruntopx(22)) {
            top_ += speed
        }
        player.style.top = top_ + 'vw'
    }, 10);
}
if (document.onkeydown) {
    setInterval(() => {
        if (move_left) {
            move_x -= 0.05
            player.style.left = move_x + 'vw'
        }
        if (move_right) {
            move_x += 0.05
            player.style.left = move_x + 'vw'
        }
        if (move_jump) {
            top_ -= 0.05
            speed = 0
        }
        else {
            speed = 0.1
        }
    }, 5);
}
set_gravity()