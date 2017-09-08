<template>
    <div id="header">
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded" id="navbar">
    <button class="navbar-toggler navbar-toggler-right" @click="IsCollapsed=!IsCollapsed" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        </span>
        </button>
    <a class="navbar-brand hidden-lg-up float-xs-right"  v-scroll-to="'#top'">
        <div class="logo-icon"><img class="img-responsive" src="../../assets/images/icon-logo-white.png"></div>
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand hidden-md-down" v-scroll-to="'#top'">
            <div class="logo-icon"><img class="img-responsive" src="../../assets/images/icon-logo-white.png"></div>
        </a>

        <ul class="nav navbar-nav">
            <li :class="{active : activeIndex == 0 }" @click="IsCollapsed=!IsCollapsed" class="nav-item">
                <a class="nav-link" href="#top" v-scroll-to="'#top'">HOME </a>
            </li>
            <li :class="{active : activeIndex == 1 }" @click="IsCollapsed=!IsCollapsed" class="nav-item">
                <a class="nav-link" href="#product" v-scroll-to="'#product'">PRODUCT </a>
            </li>
            <li class="nav-item" href="#contact" @click="IsCollapsed=!IsCollapsed">
                <button type="button" href="#contact" v-scroll-to="'#contact'" class="btn btn-primary">CONTACT US</button>
            </li>
            <li class="nav-item" @click="IsCollapsed=!IsCollapsed">
                <button type="button" id="login" class="btn btn-outline-primary">LOGIN</button>
            </li>
            <!--<li class="nav-item ">
                <button type="button " class="btn btn-primary " @click="OnRequestDemoClick() ">DEMO</button>
            </li>-->
        </ul>
    </div>
</nav>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      IsCollapsed: false,
      activeIndex: 0,
      scrollPosition: null
    }
  },
  methods: {
    SelectMenuItem (index) {
      this.activeIndex = index
      this.IsCollapsed = false
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.document.body.onscroll = (event) => {
      let currPos = (window.pageYOffset + 120)
      let top = document.getElementById('top')
      let product = document.getElementById('product')
      let contact = document.getElementById('contact')
      if (currPos > top.offsetTop) {
        this.SelectMenuItem(0)
      }
      if (currPos > product.offsetTop) {
        this.SelectMenuItem(1)
      }
      if (currPos > contact.offsetTop) {
        this.SelectMenuItem(2)
      }
    }
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import 'Header.scss';
</style>