<template>
    <div>
        <form>
            <ul class="list">
				<li>
					<span>养老费率</span>
					<input type="number" @input="changeyanglao" :value="zhiyou" placeholder="请输入养老费率">%
				</li>
				<li>
					<span>医疗费率</span>
					<input type="number" @input="changeyiliao" :value="yiliao" placeholder="请输入医疗费率">%
				</li>
				<li>
					<span>失业费率</span>
					<input type="number" @input="changeshiye" :value="shiye" placeholder="请输入失业费率">%
				</li>
				<li>
					<span>工伤费率</span>
					<input type="number" @input="changegongshang" :value="gongshang" min="0" placeholder="请输入工伤费率">%
				</li>
				<li>
					<span>生育费率</span>
					<input type="number" @input="changeshengyu" :value="shengyu" min="0" placeholder="请输入生育费率">%
				</li>
				<li>
					<span>公积金费率</span>
					<input type="number" @input="changegongjijin" :value="gongjijin" placeholder="请输入公积金费率">%
				</li>
				<li>
					<span>社保统筹</span>
					<input type="number" @input="changetongchou" :value="tongchou" step="10" placeholder="请输入社保统筹">元
				</li>
			</ul>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    // 当一个组件需要获取多个状态时，使用mapState辅助函数生成计算属性
    computed: {
        ...mapState({
            // es6箭头函数
            // yanglao：函数名
            // yanglao的作用是从state里取值
            zhiyou: (state) => state.shebao.yanglao,
            yiliao: (state) => state.shebao.yiliao,
            shiye: (state) => state.shebao.shiye,
            gongshang: state => state.shebao.gongshang,
            shengyu: state => state.shebao.shengyu,
            gongjijin: state => state.shebao.gongjijin,
            tongchou: state => state.shebao.tongchou,
        })
    },
    methods: {
        changeyanglao: function (e) {
            // e.target.value：修改后的值
            this.$store.commit('UPDATE_YANGLAO', e.target.value)
        },
        changeyiliao: function (e) {
            this.$store.commit('UPDATE_YILIAO', e.target.value)
        },
        changeshiye: function (e) {
            this.$store.commit('UPDATE_SHIYE', e.target.value)
        },
        changegongshang: function (e) {
            this.$store.commit('UPDATE_GONGSHANG', e.target.value)
        },
        changeshengyu: function (e) {
            this.$store.commit('UPDATE_SHENGYU', e.target.value)
        },
        changegongjijin: function (e) {
            this.$store.commit('UPDATE_GONGJIJIN', e.target.value)
        },
        changetongchou: function (e) {
            this.$store.commit('UPDATE_TONGCHOU', e.target.value)
        }
    }
}    
</script>
<style scoped>
    ul.list{
        list-style: none;
        padding: 0;
        margin: 54px 10px 10px 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: white;
        color: #444;
    }
    .list li{
        height: 44px;
        line-height: 25px;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        text-align: right;
    }
    .list li:last-child{
        border:none;
    }
    .list input{
        height: 30px;
        font-size: 0.9rem;
        text-align: right;
        border: none;
        outline: none;
    }
    .list span{
        float: left;
        font-size: 0.9rem;
    }
    .list i {
        font-style: normal;
        margin-left: 3px;
    }
</style>