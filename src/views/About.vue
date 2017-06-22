<template>
    <div>
        <div class="panel">
            <h3>个人所得税税率表</h3>
            <hr>
            <p>计税工资（减去各项扣款后）减3500后</p>
            <p>不超过1500元的税率3%</p>
            <p>1500元至4500元的部分税率10%，速算扣除105</p>
            <p>4500元至9000元的部分税率20%，速算扣除555</p>
            <p>9000元至35000元的部分税率25%，速算扣除1005</p>
        </div>
    </div>
</template>
<style scoped>
    .panel {
        margin: 55px 10px;
        padding: 1px 10px;
        background-color: white;
        color: #555;
        font-size: 13px;
    }
    .panel h3{
        font-weight: normal;
        color: #333;
    }
</style>