<template>
    <div class="page">
        <form @submit.prevent>
            <input type="number" :value="jishu_state" @input="change()" required placeholder="您的基本工资/不能低于最低工资标准">
            <input type="number" :value="jixiao_state" @input="change()" required placeholder="您的绩效工资">
            <input type="number" :value="jiangjin_state" @input="change()" required placeholder="您的奖金">
            <button @click="calc()">开始计算</button>
        </form>
        <section v-if="showResult">
			<dl>
                <dt>工资总额</dt>
                <dd>{{jishu_state + jixiao_state + jiangjin_state | fixed}}</dd>
            </dl>
            <div class="hr"></div>
            <dl class="zhichu">
                <dt>养老 {{yanglao_state}}%</dt>
                <dd>{{shebao.yanglao | fixed}}</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>医疗 {{yiliao_state}}%</dt>
                <dd>{{shebao.yiliao | fixed}}</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>失业 {{shiye_state}}%</dt>
                <dd>{{shebao.shiye | fixed}}</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>工伤 {{gongshang_state}}%</dt>
                <dd>0.00</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>生育 {{shengyu_state}}%</dt>
                <dd>0.00</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>公积金 {{gongjijin_state}}%</dt>
                <dd>{{shebao.gongjijin | fixed}}</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>社保统筹 {{tongchou_state}}元</dt>
                <dd>{{shebao.tongchou | fixed}}</dd>
            </dl>
            <div class="hr"></div>
            <dl>
                <dt>计税工资</dt>
                <dd>{{jishui | fixed}}</dd>
            </dl>
            <div></div>
            <dl class="zhichu">
                <dt>个人所得税</dt>
                <dd>{{shui | fixed}}</dd>
            </dl>
            <div class="hr"></div>
            <dl class="result">
                <dt>实发工资</dt>
                <dd>{{shifa | fixed}}</dd>
            </dl>
		</section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    // mapGetters辅助函数可以将store中的getters映射到局部计算属性
    computed: mapGetters({
        yanglao_state: 'getYanglaoState',
        yiliao_state: 'getYiliaoState',
        shiye_state: 'getShiyeState',
        gongshang_state: 'getGongshangState',
        shengyu_state: 'getShengyuState',
        gongjijin_state: 'getGongjijinState',
        tongchou_state: 'getTongchouState',
        // 
        showResult: 'getShowResultState',

        jishu_state: 'getJishuState',
        jixiao_state: 'getJixiaoState',
        jiangjin_state: 'getJiangjinState'
    }),
    data() {
        return {
            shebao: {
                yanglao: 0,
                yiliao: 0,
                shiye: 0,
                gongjijin: 0,
                tongchou: 20,
            },

            jishui: 0,
            shui: 0,
            shifa: 0
        }
    },
    mounted () {
        if (this.showResult) {
            this.calc();
        }
    },
    methods: {
        calc: function () {
            this.$store.commit('CHANGE_JISHU', parseInt(document.getElementsByTagName('input')[0].value))
            this.$store.commit('CHANGE_JIXIAO', parseInt(document.getElementsByTagName('input')[1].value))
            this.$store.commit('CHANGE_JIANGJIN', parseInt(document.getElementsByTagName('input')[2].value))

            var total = parseInt(this.jishu_state) + parseInt(this.jixiao_state) + parseInt(this.jiangjin_state)
            if (total < 2000) {
                alert("你是个贫农，免税")
                return
            }
            // 用户输入了非数字
            if (isNaN(total)){
                return
            }
            var yanglao = parseInt(this.jishu_state) * this.yanglao_state / 100
            var yiliao = parseInt(this.jishu_state) * this.yiliao_state / 100
            var shiye = parseInt(this.jishu_state) * this.shiye_state / 100
            var gongjijin = parseInt(this.jishu_state) * this.gongjijin_state / 100
            var tongchou = parseInt(this.tongchou_state)

            // 计算计税工资
            var jishui = total - yanglao - yiliao - shiye - gongjijin - tongchou

            // 计税基数
            var shuiji = jishui - 3500
            var shui = 0

            // 计算个人所得税
            if (shuiji <= 0) { shui = 0; }
            if (shuiji <= 1500) { shui = shuiji * 0.03; }
            else if (shuiji <= 4500) { shui = shuiji * 0.1 - 105; }
            else if (shuiji <= 9000) { shui = shuiji * 0.2 - 555; }
            else { shui = shuiji * 0.25 - 1005; }

            this.shebao.yanglao = yanglao;
            this.shebao.yiliao = yiliao,
            this.shebao.shiye = shiye,
            this.shebao.gongjijin = gongjijin;
            this.shebao.tongchou = tongchou

            this.jishui = jishui
            this.shui = shui
            this.shifa = jishui - shui

            this.$store.commit('IS_SHOW', true)
        },
        change: function () {
            this.$store.commit('IS_SHOW', false)
            // console.log("change " + this.showResult)
        }
    }
}
</script>
<style scoped>
    input{
        border: 1px solid #39f;
        height: 2.4rem;
        padding: 0.7rem;
        width: 100%;
        border-radius: 0.3rem;
        margin: 0.25rem 0;
        outline: none;
    }
    input[type=number]:focus{
        box-shadow: inset 1px 1px 2px gray;
    }
    form button{
        margin: 0.25rem 0;
        border: 1px solid #198cff;
        background-color: #198cff;
        color: white;
        width: 100%;
        height: 2.4rem;
        border-radius: 0.3rem;
        font-size: 0.9rem;
    }
    section {
        background-color: white;
        margin: 0 0.5rem 4rem 0.5rem;
        padding: 0.5rem;
    }
    dl {
        margin: 1rem 0;
        font-size: 0.8rem;
        color: #333;
    }
    dt {
        float: left;
    }
    dd {
        float: right;
    }
    section > div {
        clear: both;
    }
    .zhichu {
        color: red;
    }
    .zhichu > dd:before {
        content: '-';
    }
    .hr {
        border-bottom: 1px solid gray;
        position: relative;
        top: 0.5rem;
    }
    .result {
        font-weight: bold;
    }
</style>