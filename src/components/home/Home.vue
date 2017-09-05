<template>
  <div id="home">
    <cmp-header></cmp-header>
    <div id="top" class="component-site-home">
      <cmp-demo :barOpened="BarOpened" @close="barOpened = false"></cmp-demo>
      <div class="cmp-full-screen container-fluid" id="home">
        <div class="row row-fluid text-xs-center">
          <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 text-center">
            <h1 class="text-main">Automate supplier
              <span class="text-primary">discounts</span> and maximise your
              <span class="text-primary">savings</span>.
            </h1>
            <button type="button" id="videobutton" class="btn btn-outline-primary" @click="showModal()">WATCH THE VIDEO</button>
            <button type="button" id="requestbutton" class="btn btn-outline-primary active" @click="OpenBar()">REQUEST A DEMO</button>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div id="imageModal" class="modal container-fluid" v-if="show == true" @click="closeModal">
          <div class="modal-opacity"></div>
          <div class="wrapper-modal">
            <div class="modal-content">
            <button type="button" class="btn btn-danger cancel" @click="closeModal"><div class="cancel-icon"></div></button>
              <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://player.vimeo.com/video/212211173?autoplay=1" width="640px" height="360px" align="middle" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
     </transition>

      <div class="cmp-about-product container-fluid" id="product">
        <div class="row test">
          <div class="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h3 class="title">ABOUT
              <span class="title2">PRODUCT</span>
            </h3>
            <h5 class="text-main">EarlyAce automates your supplier discounting process and improves your profitability, risk-free, by maximising early payment discount capture. Your suppliers can view all the invoices you wish to pay early and make real-time discount offers. EarlyAce automatically selects the best invoices for you to pay early.
            </h5>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 offset-xl-1">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#buyer" role="tab">EARLYACE FOR BUYERS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#supplier" role="tab">EARLYACE FOR SUPPLIERS</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div class="tab-pane active" id="buyer" role="tabpanel">
                <div class="row">
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon1"></div>
                    </div>
                    <p class="text-benefit">Increase profitability</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon2"></div>
                    </div>
                    <p class="text-benefit">Earn risk-free cash returns</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon3"></div>
                    </div>
                    <p class="text-benefit">Healthier supply chain</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-2 col-lg-4 offset-lg-2 col-xl-4 offset-xl-2 ben">
                    <div class="icon-area">
                      <div class="i icon4"></div>
                    </div>
                    <p class="text-benefit">Outperform low yielding short-term investments</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon5"></div>
                    </div>
                    <p class="text-benefit">Simple onboarding process</p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="supplier" role="tabpanel">
                <div class="row">
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon6"></div>
                    </div>
                    <p class="text-benefit">Improve cashflow</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon7"></div>
                    </div>
                    <p class="text-benefit">Accelerate invoice payments in a few clicks</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon8"></div>
                    </div>
                    <p class="text-benefit">No middlemen – 100% free to use</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-2 col-lg-4 offset-lg-2 col-xl-4 offset-xl-2 ben">
                    <div class="icon-area">
                      <div class="i icon9"></div>
                    </div>
                    <p class="text-benefit">Access early payment as needed</p>
                  </div>
                  <div class="col-8 offset-2 col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0 ben">
                    <div class="icon-area">
                      <div class="i icon10"></div>
                    </div>
                    <p class="text-benefit">No complicated paperwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" style="float:left; width: 100%">
        <cmp-contact></cmp-contact>
      </div>
      <div id="footer">
        <cmp-footer></cmp-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './../header/Header.vue'
import Contact from './../contact-us/Contact.vue'
import Footer from './../footer/Footer.vue'
import RequestDemo from './../demo/DemoRequest.vue'
export default {
  name: 'home',
  data () {
    return {
      BarOpened: false,
      show: false
    }
  },
  methods: {
    OpenBar: function () {
      this.BarOpened = !this.BarOpened
      console.log(this.BarOpened)
    },
    showModal: function () {
      this.show = true
    },
    closeModal: function () {
      this.show = false
    }
  },
  components: {
    'cmp-header': Header,
    'cmp-contact': Contact,
    'cmp-footer': Footer,
    'cmp-demo': RequestDemo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'Home.scss';
</style>
