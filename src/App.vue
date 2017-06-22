<template>
  <div>
    <headerbar class="header"></headerbar>
    <section class="page">
      <router-view></router-view>
    </section>
    <footerbar class="footer"></footerbar>
  </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
      name: 'app',
      components: {
        'headerbar': Header,
        'footerbar': Footer
      }
    }
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  background-color: #f3f3f3;
}
.header{
  position: absolute;
  top: 0;
  width: 100%;
}
.page{
  margin: 64px 0 48px 0;
  padding: 0 2px 0 2px;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
