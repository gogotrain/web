<template>
  <div class="sign">  
    <h1>{{msg}}</h1>
    <br />
    <Form ref="formInline" :model="form" :rules="ruleInline" inline>
      <!-- 個人和組織按鈕 -->
     <Form-item>
      <Button type="primary" size="large" @click="toorganization">個人</Button>
     </Form-item>
     <Form-item>
      <Button type="primary" size="large">組織</Button>
     </Form-item>
      <br />
      <!-- 帳號輸入 -->
      <Form-item prop="user">
        <Input type="text" name="username" size="large" v-model="form.user" placeholder="請填寫帳號">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <br />
      <!-- 密碼輸入 -->
      <Form-item prop="password">
        <Input type="password" name="password" size="large" v-model="form.password" placeholder="請填寫密碼">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <br />
      <!-- 驗證碼輸入 -->
      <Form-item prop="captcha">
        <Input type="text" name="captcha" size="large" v-model="form.captcha" placeholder="請填寫驗證碼">
          <Icon type="ios-information" slot="prepend"></Icon>" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <br />
      <!-- 驗證碼圖片 -->
      <img src="https://i.blogs.es/cccb21/650_1000_captcha/original.jpg"  id="imgcode" style="width:80px" >
      <br />
      <!-- 登入按鈕 -->
      <Form-item>
      <Button type="success" size="large" style="position:relative; top:10px"  @click="toregister">組織註冊</Button>
      </Form-item>
      <Form-item>
      <Button type="success" size="large" style="position:relative; top:10px" @click="addsubmit">登入</Button>
      </Form-item>
    </Form>
  </div>
</template>
<!-- 帳號、密碼、驗證碼檢測 -->
<script>
export default {
  name: 'sign',
  data () {
    return {
      msg: '組織登入',
      form: {
        user: '',
        password: '',
        captcha: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '請填寫帳號', trigger: 'blur' },
          { type: 'email', message: '不符合規定', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請填寫密碼', trigger: 'blur' },
          { type: 'string', min: 6, message: '密碼長度不能小於6位', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '請填寫驗證碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addsubmit: function () {
      this.axios.post('http://211.149.193.19:8080/api/customers', {
        username: this.form.user,
        password: this.form.password,
        captcha: this.form.captcha
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    toregister: function () {
      this.$router.push({path: '/Register1'})
    },
    toorganization: function () {
      this.$router.push({path: '/Sign'})
    }
  }
}
</script>
<style scoped>
</style>