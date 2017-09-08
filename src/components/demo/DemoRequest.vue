<template>
    <div id="demorequest">
        <div class="cmp-right-bar" id="rightbar">
            <div class="shade" :class="{'shade-opened' : barOpened}" @click="CloseBar()"></div>
            <div class="aside" id="right" :class="{'aside-opened' : barOpened == true}">
                <div class="aside-close">
                    <button type="button" id="closebar" class="btn-close" data-dismiss="modal" aria-label="Close" :class="{'shade-opened' : barOpened == true}" v-on:click="CloseBar">
                        <div class="icon-close"></div>
                    </button>
                </div>
                <div class="cmp-request-demo container-fluid">
                    <h2 class="header">Request Demo</h2>
                    <form name="demoForm" @submit.prevent="OnDemoRequestSubmit">
                        <div :class="{ 'has-danger' : errors.has('company')}" class="form-group">
                            <label for="company">COMPANY NAME*</label>
                            <input type="text" v-model="DemoRequest.companyName" class="form-control" v-validate="'required'" id="company" name="company">
                            <div class="form-control-feedback" v-show="errors.has('company')">Please enter company name</div>
                        </div>
                        <div :class="{ 'has-danger' : errors.has('email')}" class="form-group ">
                            <label for="email">EMAIL*</label>
                            <input type="text" v-model="DemoRequest.email" class="form-control" v-validate="'required|email'" id="email" name="email">
                            <div class="form-control-feedback" v-show="errors.has('email')">Please enter valid email</div>
                        </div>
                        <div :class="{ 'has-danger' : errors.has('fullName')}" class="form-group ">
                            <label for="name">FIRST NAME AND LAST NAME*</label>
                            <input type="text" v-model="DemoRequest.fullName" class="form-control" v-validate="'required'"  id="name" name="fullName">
                            <div class="form-control-feedback" v-show="errors.has('fullName')">Please enter your name</div>
                        </div>

                        <div class="form-group role-group">
                            <label for="role1">ROLE</label>
                            <div class="btn-group">
                                <button type="submit" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <a class="name" id="selectRoleDemo"> {{ selectedRole }}</a>
                                    <div class="arrow-button"></div>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" v-for="role in roles" @click="OnItemSelected(role)">{{ role }}</a>
                                </div>
                            </div>
                        </div>

                        <div :class="{ 'has-danger' : errors.has('phoneNumber')}" class="form-group ">
                            <label for="phone">PHONE NUMBER*</label>
                            <input type="input" v-model="DemoRequest.phoneNumber" class="form-control" v-validate="'required|numeric'" id="phone" name="phoneNumber" oninput="this.value = this.value.replace(/[^0-9,+.]/g, '').replace(/(\..*)\./g, '$1');">
                            <div class="form-control-feedback" v-show="errors.has('phoneNumber')">Please enter phone number</div>
                        </div>
                        <div class="form-group checkMeth">
                            <label for="checkbox-buy-sup">PREFERRED CONTACT METHOD</label>
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary phone default" :class="{'active' : LeftSelected}" id="checkbox-buy-sup" @click="OnLeftClick()"><div class="icon-phone"></div>By phone</button>
                                <button type="button" class="btn btn-primary mail default" :class="{'active' : !LeftSelected}" @click="OnRightClick()"><div class="icon-mail"></div>By email</button>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary send" id="submitForm" @click.prevent="OnDemoRequestSubmit()">
                            <a class="buttonName">SUBMIT</a>
                            <div class="arrow-submit"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'demoRequest',
  props: {
    'barOpened': {
      type: Boolean
    }
  },
  data () {
    return {
      role: '',
      selectedRole: '',
      roles: ['AccountsPayable', 'Executive', 'Finance', 'IT', 'Procurement', 'Treasury', 'Other'],
      LeftSelected: false,
      DemoRequest: {
        email: '',
        companyName: '',
        fullName: '',
        phoneNumber: '',
        contactType: 'Email',
        role: ''
      }
    }
  },
  methods: {
    CloseBar: function () {
      this.$emit('CloseBar', false)
    },
    OnItemSelected: function (role) {
      this.DemoRequest.role = role
      this.selectedRole = role
    },
    OnLeftClick: function () {
      this.LeftSelected = true
      this.DemoRequest.contactType = 'Phone'
    },
    OnRightClick: function () {
      this.LeftSelected = false
      this.DemoRequest.contactType = 'Email'
    },
    OnDemoRequestSubmit () {
      this.$validator.validateAll().then(() => {
        this.$http.post('https://api-earlyace-dev.azurewebsites.net/api/site/v1/demorequests', this.DemoRequest)
        .then(response => {
          document.getElementById('selectRoleDemo').textContent = ''
          document.demoForm.reset()
          this.CloseBar()
        }, error => {
          console.log(error)
          this.$toastr('error', error.data.messages, 'ERROR')
        }
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'DemoRequest.scss';
</style>