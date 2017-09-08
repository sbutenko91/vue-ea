<template>
  <div id="contact-us">
    <div class="cmp-contact-us container-fluid">
    <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3">
            <h3 class="title">CONTACT <span class="title2">US</span></h3>

        </div>
    </div>
    <form name="contactForm" @submit.prevent="OnContactUsSubmit">
        <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div :class="{ 'has-danger' : errors.has('firstName')}" class="form-group inp">
                            <label for="name">FIRST NAME*</label>
                            <input type="text" class="form-control" v-model="ContactRequest.firstName" v-validate="'required'" id="firstName" placeholder="" name="firstName">
                            <div class="form-control-feedback" v-show="errors.has('firstName')">Please enter your first name</div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div :class="{ 'has-danger' : errors.has('lastName')}" class="form-group inp">
                            <label for="name">LAST NAME*</label>
                            <input type="text" class="form-control" v-model="ContactRequest.lastName" v-validate="'required'" id="lastName" placeholder="" name="lastName">
                            <div class="form-control-feedback" v-show="errors.has('lastName')">Please enter your last name</div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div :class="{ 'has-danger' : errors.has('companyName')}" class="form-group inp">
                            <label for="name">COMPANY NAME*</label>
                            <input type="text" class="form-control" v-model="ContactRequest.companyName" v-validate="'required'" id="companyName" placeholder="" name="companyName">
                            <div class="form-control-feedback" v-show="errors.has('companyName')">Please enter your company name</div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="form-group inp">
                            <label for="name">ROLE</label>
                            <div class="btn-group">
                                <button type="submit" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <a class="name" id="selectRole"> {{ selectedRole }}</a>
                                <div class="arrow-button"></div>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" v-for="role in roles" @click="OnItemSelected(role)">{{ role }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div :class="{ 'has-danger' : errors.has('email')}" class="form-group inp">
                            <label for="email">EMAIL*</label>
                            <input type="text" class="form-control" v-model="ContactRequest.email" v-validate="'required|email'" id="email" name="email">
                            <div class="form-control-feedback" v-show="errors.has('email')">Please enter valid email</div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div :class="{ 'has-danger' : errors.has('phoneNumber')}" class="form-group inp">
                            <label for="phoneNumber">PHONE NUMBER*</label>
                            <input type="text" onlyNumber class="form-control" v-model="ContactRequest.phoneNumber" v-validate="'required|numeric'" id="phoneNumber" placeholder="" name="phoneNumber" oninput="this.value = this.value.replace(/[^0-9,+.]/g, '').replace(/(\..*)\./g, '$1');">
                            <div class="form-control-feedback" v-show="errors.has('phoneNumber')">Please enter your phone number</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3">
                <div class="form-group area">
                    <label for="message">MESSAGE</label>
                    <textarea class="form-control" v-model="ContactRequest.message" maxlength="600" id="message" name="message" rows="7"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="submit" @click.prevent="OnContactUsSubmit()">SEND MESSAGE</button>
            </div>
        </div>
    </form>
</div>

  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      role: '',
      selectedRole: '',
      roles: ['AccountsPayable', 'Executive', 'Finance', 'IT', 'Procurement', 'Treasury', 'Other'],
      ContactRequest: {
        email: '',
        message: '',
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        role: ''
      }
    }
  },
  methods: {
    OnItemSelected (role) {
      this.ContactRequest.role = role
      this.selectedRole = role
    },
    OnContactUsSubmit () {
      this.$validator.validateAll().then(() => {
        this.$http.post('https://api-earlyace-dev.azurewebsites.net/api/site/v1/contactrequests', this.ContactRequest)
        .then(response => {
          this.$toastr('success', response.data.messages, 'success')
          document.contactForm.reset()
          document.getElementById('selectRole').textContent = ''
        }, error => {
          this.$toastr('error', error.data.messages, 'error')
        }
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Contact.scss';
</style>
