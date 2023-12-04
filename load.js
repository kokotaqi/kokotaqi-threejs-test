// Music!
const main_menu_music = new Audio
main_menu_music.src = "https://lw-sycdn.kuwo.cn/f3a6965152c6db023b9f5fa761516d4c/65630c0f/resource/30106/trackmedia/M500003ypdQ14L9MyM.mp3"
let music_play = function () {
    main_menu_music.play()
    document.removeEventListener('click', music_play);
}
document.addEventListener('click', music_play);
//监听主界面点击事件
function a(a) {
    console.log(a)
}
function row_turn(which_none, which_flex) {
    document.getElementById(interface[which_none]).style.display = 'none'
    document.getElementById(interface[which_flex]).style.display = 'flex'
    current_page = interface[which_flex]
}
var interface = ["main_menu", "SinglePlayer_", "Setting_", "Seed"]
var current_page = 0
// 当在主界面触发点击事件
// 点击了SinglePlayer
document.querySelector("#SinglePlayer").onclick = function () {
    row_turn(0, 1)
}
document.querySelector("#Setting").onclick = function () {
    row_turn(0, 2)
}
document.querySelector("#PlainWorld").onclick = function () {
    row_turn(1, 3)
}
// 当触发esc事件
document.onkeydown = function (event) {
    if (event.keyCode === 27) {
        if (current_page === interface[1]) {
            row_turn(1, 0)
        }
        if (current_page === interface[2]) {
            row_turn(2, 0)
        }
        if (current_page === interface[3]) {
            row_turn(3, 1)
        }
    }
};
//小图标icons点击事件
document.querySelector("#icons").onclick = function () {
    alert("Wechat:Reveseas,为何没有其他的？我没注册")
}
//主题数下小字
const Tree_Word = ["爱玩原神", "啊？", "我的世界忠实玩家", "你怎么知道我满命八重没歪过？", "氪金一轮只为给她最好的", "枫丹剧情最棒了", "更新ing", "我知道你很急但是你先别急", "Wait What?", "bugjump.jpg", "debug,jpg", "FA,开摆", "你看到这条的时候，说明你很幸运", "void 0"]
function in_react_word(list) {
    var random_word = Math.floor(Math.random() ** 2 * 200)
    const list_len = list.length - 1
    while (random_word > list_len) {
        random_word -= list_len
    }
    return random_word
}
document.querySelector("h3").innerHTML = Tree_Word[in_react_word(Tree_Word)]
// 检测seed输入是否合法
let seed
document.querySelector("#InputSeedEnter").addEventListener("click", function () {
    var inputValue = document.getElementById("InputSeed").value;
    var is_number_react = 0
    for (var i = 0; i < inputValue.split('').length; i++) {
        var value = inputValue.split('')[i];
        if (Number.isInteger(parseFloat(value))) {
            seed = inputValue;
            const targetUrl = "index2.html";
            window.location.href = targetUrl
        }
        else {
            if (is_number_react === 0) {
                alert("text must be input all numbers!")
                is_number_react = 1
            }
        }
    }
})
// Setting
var music_times = 1
document.querySelector("#Music").onclick = function () {
    if (music_times === 1) {
        main_menu_music.pause()
    }
    else {
        main_menu_music.play()
    }
    music_times*=-1
}