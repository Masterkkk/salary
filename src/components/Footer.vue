<template>
    <footer>
        <router-link to="/">
            <span><i class="fa fa-calculator fa-lg;"></i></span>
            <span>计算</span>
        </router-link>
        <router-link to="/setting">
            <span><i class="fa fa-cog fa-lg;"></i></span>
            <span>设置</span>
        </router-link>
        <router-link to="/about">
            <span><i class="fa fa-tasks fa-lg;"></i></span>
            <span>关于</span>
        </router-link>
    </footer>
</template>
<style>
    footer{
        background-color: #59d;
        color: white;
        text-align: center;
        height: 48px;
    }
    footer a{
        text-decoration: none;
        display: block;
        width: 33.3333333333%;
        height: 48px;
        float: left;
        color: white;
    }
    footer a span{
        display: block;
        font-size: 13px;
    }
    footer a span:nth-child(1){
        width: 30px;
        height: 30px;
        margin: 0 auto;
        font-size: 20px;
    }
    footer a.selected{
        color: gold;
    }
</style>