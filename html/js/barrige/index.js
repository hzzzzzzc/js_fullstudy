let data = [
    {value:'12345679884651321368', time: 10, color: black},
    {}
]

// 获取所有需要的dom元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建 CanvasBarrage类
class CanvasBarrage {
    constructor(cavas,video,opts = {}) {        // constructor 是一种用于创建和初始化对象的特殊方法
        // opts ={} 表示如果没有传值，就默认为{}，防止报错
        if (!canvas || !video)  return

        // 将传进来的参数挂载到this上
        this.video = video
        this.canvas = canvas
        // 设置canvas宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height

        // 获取画布，操作画布

        this.ctx = canvas.getContext('2d')

        // 设置默认参数，如果没传就带上
        
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacitu: 0.5,
            fontSize: 20,
            data: []
        }
        // 合并对象，
    }
}

let canvasBarrage = new CanvasBarrage(canvas, video, {data})