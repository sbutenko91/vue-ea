<template>
    <div id="header">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded" :class="{show: IsCollapsed || scrollPosition > 300}">
        <button class="navbar-toggler navbar-toggler-right"  @click="IsCollapsed=!IsCollapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand logo-mobile" href="#" @click="IsCollapsed = false"><img src='./../../assets/logo.png'></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{show: IsCollapsed}">
            <ul class="navbar-nav  mr-auto" :class="{menuMobile: IsCollapsed}">
                <li class="nav-item logo-desktop">
                    <a href="#top"  @click="SelectMenuItem(999)"><img src='./../../assets/logo.png'></a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 0}">
                    <a class="nav-link" href="#service" @click="SelectMenuItem(0)">послуги</a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 1}">
                    <a class="nav-link" href="#aboutus" @click="SelectMenuItem(1)">про нас</a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 2}">
                    <a class="nav-link" href="#equipment" @click="SelectMenuItem(2)">обладнання</a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 3}">
                    <a class="nav-link" href="#gallery" @click="SelectMenuItem(3)">фото</a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 4}">
                    <a class="nav-link" href="#clients" @click="SelectMenuItem(4)">клієнти</a>
                </li>
                <li class="nav-item" :class="{active: ActiveIndex == 5}">
                    <a class="nav-link" href="#contact" @click="SelectMenuItem(5)">контакти</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link social">
                        <img class="socIcon" src='./../../assets/youtube.png'>
                        <img class="socIcon" src='./../../assets/facebook.png'>
                        <img class="socIcon" src='./../../assets/instagram.png'>
                    </a>
                </li>
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
      ActiveIndex: 100,
      scrollPosition: null
    }
  },
  methods: {
    SelectMenuItem (index) {
      this.ActiveIndex = index
      this.IsCollapsed = false
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.document.body.onscroll = (event) => {
      let currPos = (window.pageYOffset + 100)
      let top = document.getElementById('top')
      let service = document.getElementById('service')
      let aboutus = document.getElementById('aboutus')
      let equipment = document.getElementById('equipment')
      let gallery = document.getElementById('gallery')
      let clients = document.getElementById('clients')
      let contact = document.getElementById('contact')
      if (currPos > top.offsetTop) {
        this.ActiveIndex = 555
      }
      if (currPos > service.offsetTop) {
        this.ActiveIndex = 0
      }
      if (currPos > aboutus.offsetTop) {
        this.ActiveIndex = 1
      }
      if (currPos > equipment.offsetTop) {
        this.ActiveIndex = 2
      }
      if (currPos > gallery.offsetTop) {
        this.ActiveIndex = 3
      }
      if (currPos > clients.offsetTop) {
        this.ActiveIndex = 4
      }
      if (currPos > contact.offsetTop) {
        this.ActiveIndex = 5
      }
      console.log(currPos)
      console.log(service.offsetTop)
      console.log(this.ActiveIndex)
    }
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import 'Header.scss';
</style>