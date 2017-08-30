<template>
  <div class="register">  
    <h1>{{mesg}}</h1>
    <br />
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Form-item label="帳號" prop="user">
        <Input v-model="formValidate.user" placeholder="請輸入帳號"></Input>
      </Form-item>
      <Form-item label="密碼" prop="password">
        <Input v-model="formValidate.password" placeholder="請輸入密碼"></Input>
      </Form-item>
      <Form-item label="確認密碼" prop="repassword">
        <Input v-model="formValidate.repassword" placeholder="請再輸入一次密碼"></Input>
      </Form-item>
      <Form-item label="姓名" prop="username">
        <Input v-model="formValidate.username" placeholder="請輸入姓名"></Input>
      </Form-item>
      <Form-item label="照片" prop="userimg">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">上傳照片</Button>
    </Upload>
      </Form-item>
      <Form-item label="性别" prop="gender">
        <Radio-group v-model="formValidate.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
          <Radio label="other">其他</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="身分證" prop="id">
        <Input v-model="formValidate.id" placeholder="請輸入身分證"></Input>
      </Form-item>
      <Form-item label="電話" prop="tel">
        <Input v-model="formValidate.tel" placeholder="請輸入電話"></Input>
      </Form-item>
      <Form-item label="手機" prop="mobile">
        <Input v-model="formValidate.mobile" placeholder="請輸入手機"></Input>
      </Form-item>
      <Form-item label="電子信箱" prop="email">
        <Input v-model="formValidate.email" placeholder="請輸入電子信箱"></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">確認註冊</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">清除重填</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data () {
      return {
        mesg: '個人註冊',
        formValidate: {
          user: '',
          password: '',
          repassword: '',
          gender: '',
          username: '',
          id: '',
          tel: '',
          mobile: '',
          email: ''
        },
        ruleValidate: {
          user: [
            { required: true, message: '帳號不可為空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密碼不可為空', trigger: 'blur' }
          ],
          repassword: [
              { required: true, message: '請再輸入一次密碼', trigger: 'blur' }
          ],
          gender: [
              { required: true, message: '請選擇性别', trigger: 'change' }
          ],
          username: [
            { required: true, message: '姓名不可為空', trigger: 'blur' },
            { type: 'String', message: '不符合規定', trigger: 'blur' }
          ],
          id: [
            { required: true, message: '身分證不可為空', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '電話不可為空', trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '手機不可為空', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '電子信箱不可為空', trigger: 'blur' },
            { type: 'email', message: '不符合規定', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('註冊成功')
          } else {
            this.$Message.error('註冊失敗')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
}
</script>