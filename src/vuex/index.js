import * as getters from './getters'
// import * as actions from './actions'
import mutations from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    jishu: 0,
    jixiao: 0,
    jiangjin: 0,

    showResult: false,

    shebao: {
        yanglao: 9,
        yiliao: 2,
        shiye: 0.5,
        gongshang: 0,
        shengyu: 0,
        gongjijin: 8,
        tongchou: 20
    }
}

// 把index.js导出
export default new Vuex.Store({
    state,
    getters,
    // actions,
    mutations
})