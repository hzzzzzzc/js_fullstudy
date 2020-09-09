let Toast = {}
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center', //默认显示位置
        duration: '1500', //持续时间
    }

    for (let property in options) {
        opt[property] = options[property]  //使用options配置  //允许用户传入对象
    }

    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type  //如果传了type 就使用该type作为位置展示
        }

        if(document.getElementsByClassName('vue-toast').length){  //如果toast没有消失，则就不会生成新toast
            return
        }

        let toastTpl = Vue.extend({
            template: '<div class="vue-toast toast-' + opt.defaultType + '">' + tips + '</div>'
        })

        let tpl = new toastTpl().$mount().$el
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, opt.duration)
    }

    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })

}

export{
    Toast
}