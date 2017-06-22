import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex )
const store = new Vuex.Store({
    // 初始状态
    state: {
        yanglao: 8,
        yiliao: 2,
        shiye: 0.5,
        gongshang: 0,
        shengyu: 0,
        gongjijin: 8,
        tongchou: 20,

        showResult: false,

        jishu: 0,
        jixiao: 0,
        jiangjin: 0
    },
    // mutations本质上是一些函数
    // 通过mutation修改state
    mutations: {
        "passyanglao": function ( state, yanglao ) {
            // 修改state里yanglao的值
            state.yanglao = yanglao
            console.log( '保存', state.user_name )
        },
        "passyiliao": function ( state, yiliao ) {
            state.yiliao = yiliao
            console.log( '保存', state.user_name )
        },
        "passshiye": function ( state, shiye ) {
            state.shiye = shiye
            console.log( '保存', state.user_name )
        },
        "passgongshang": function ( state, gongshang ) {
            state.gongshang = gongshang
            console.log( '保存', state.user_name )
        },
        "passshengyu": function ( state, shengyu ) {
            state.shengyu = shengyu
            console.log( '保存', state.user_name )
        },
        "passgongjijin": function ( state, gongjijin ) {
            state.gongjijin = gongjijin
            console.log( '保存', state.user_name )
        },
        "passtongchou": function ( state, tongchou ) {
            state.tongchou = tongchou
            console.log( '保存', state.user_name )
        },
        "saveshow": function ( state, show ) {
            state.showResult = show
        },
        "savejishu": function ( state, jishu ) {
            state.jishu = jishu
        },
        "savejixiao": function ( state, jixiao ) {
            state.jixiao = jixiao
        },
        "savejiangjin": function ( state, jiangjin ) {
            state.jiangjin = jiangjin
        }
    },
    // getters可以获取state里的值
    getters: {
        "getyanglao": function ( state ) {
            console.log( '获取', state.user_name )
            return state.yanglao
        },
        "getyiliao": function ( state ) {
            console.log( '获取', state.user_name )
            return state.yiliao
        },
        "getshiye": function ( state ) {
            console.log( '获取', state.user_name )
            return state.shiye
        },
        "getgongshang": function ( state ) {
            console.log( '获取', state.user_name )
            return state.gongshang
        },
        "getshengyu": function ( state ) {
            console.log( '获取', state.user_name )
            return state.shengyu
        },
        "getgongjijin": function ( state ) {
            console.log( '获取', state.user_name )
            return state.gongjijin
        },
        "gettongchou": function ( state ) {
            console.log( '获取', state.user_name )
            return state.tongchou
        },
        "getshow": function ( state ) {
            return state.show
        },
        "getjishu": function ( state ) {
            return state.jishu
        },
        "getjixiao": function ( state ) {
            return state.jixiao
        },
        "getjiangjin": function ( state ) {
            return state.jiangjin
        },
    }
    // actions: {
    //     "passyanglao": function ( state, yanglao ) {
    //         store.commit( "passyanglao", yanglao )
    //     },
    //     "passyiliao": function ( state, yiliao ) {
    //         store.commit( "passyiliao", yiliao )
    //     },
    //     "passshiye": function ( state, shiye ) {
    //         store.commit( "passshiye", shiye )
    //     },
    //     "passgongshang": function ( state, gongshang ) {
    //         store.commit( "passgongshang", gongshang )
    //     },
    //     "passshengyu": function ( state, shengyu ) {
    //         store.commit( "passshengyu", shengyu )
    //     },
    //     "passgongjijin": function ( state, gongjijin ) {
    //         store.commit( "passgongjijin", gongjijin )
    //     },
    //     "passtongchou": function ( state, tongchou ) {
    //         store.commit( "passtongchou", tongchou )
    //     },
    //     "saveshow": function ( state, show ) {
    //         store.commit( "saveshow", show )
    //     },
    //     "savejishu": function ( state, jishu ) {
    //         store.commit( "savejishu", jishu )
    //     },

    //     "savejixiao": function ( state, jixiao ) {
    //         store.commit( "savejixiao", jixiao )
    //     },
    //     "savejiangjin": function ( state, jiangjin ) {
    //         store.commit( "savejiangjin", jiangjin )
    //     }
    // }
})
// 如果在外部使用store，最后要导出
export default store