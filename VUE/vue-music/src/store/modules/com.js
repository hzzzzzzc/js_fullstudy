import * as type from '../types' //将 typs下面的 所有 export 出来的 全部引入 为 type 对象，使用type.name来使用

const state = {
    showSidebar: false
}

const getters = {
    showSidebar: state => state.showSidebar
}

const mutations = {
    [type.COM_SHOW_SIDE_BAR](state, status) {  //之所以这样写 而不直接赋值为true 是因为所有函数优先设置成异步方法
        state.showSidebar = status
    }
}

const actions = {
    setShowSidebar({ commit }, status) {   //action中的方法自带 context ,不过可以通过这种写法不写context
        commit(type.COM_SHOW_SIDE_BAR, status)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}