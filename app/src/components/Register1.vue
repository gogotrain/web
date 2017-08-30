<template>
  <div class="register">  
    <h1>{{mesg}}</h1>
    <br />
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Form-item label="" prop="user" >
        <p>帳號&emsp;&emsp;&emsp;<Input v-model="formValidate.user" placeholder="請輸入帳號"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="password">
        <p>密碼&emsp;&emsp;&emsp;<Input v-model="formValidate.password" placeholder="請輸入密碼"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="repassword">
        <p>確認密碼&emsp;<Input v-model="formValidate.repassword" placeholder="請再輸入一次密碼"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="username">
        <p>單位名稱&emsp;<Input v-model="formValidate.username" placeholder="單位名稱"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="userimg">
      <p>照片&emsp;</p>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">上傳照片</Button>
      </Upload>
      </Form-item>
      <br/>
      <Form-item label="" prop="id">
        <p>單位類型&emsp;<Input v-model="formValidate.id" placeholder="請輸入單位類型"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="tel">
        <p>立案字號&emsp;<Input v-model="formValidate.tel" placeholder="請輸入立案字號"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="mobile">
        <p>統一編號&emsp;<Input v-model="formValidate.mobile" placeholder="請輸入統一編號"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>負責人&emsp;&emsp;<Input v-model="formValidate.email" placeholder="請輸入負責人"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>登記電話&emsp;<Input v-model="formValidate.email" placeholder="請輸入登記電話"></Input></p>
      </Form-item>
      <br/>
       <Form-item label="" prop="email">
        <p>通訊電話&emsp;<Input v-model="formValidate.email" placeholder="請輸入通訊電話"></Input></p>
      </Form-item>
      <br/>
       <Form-item label="" prop="email">
        <p>登記地址&emsp;<Input v-model="formValidate.email" placeholder="請輸入登記地址"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>通訊地址&emsp;<Input v-model="formValidate.email" placeholder="請輸入通訊地址"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
      <p style="">網站&emsp;&emsp;&emsp;&emsp;
        <Radio-group v-model="formValidate.gender">
          <Radio label="male">目前暫無網站</Radio>&emsp;&emsp;&emsp;
          <Radio label="female">有，請輸入網址</Radio>
        </Radio-group>
        <Input v-model="value" style="width: 350px">
       <Select v-model="select1" slot="prepend" style="width: 70px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select> 
        <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
       </Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>Email&emsp;&emsp;&ensp;<Input v-model="formValidate.email" placeholder="請輸入電子信箱"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>聯絡人&emsp;&emsp;<Input v-model="formValidate.email" placeholder="請輸入聯絡人 / 職稱"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>連絡時間&emsp;<Input v-model="formValidate.email" placeholder="請輸入可聯絡時間"></Input></p>
      </Form-item>
      <br/>
      <Form-item label="" prop="email">
      <p>是否有成立志工隊
          <Radio-group v-model="formValidate.gender">
          <Radio label="male">是</Radio>&emsp;&emsp;&emsp;&emsp;
          <Radio label="female">否</Radio>
        </Radio-group></p>
      </Form-item>
      <br/>
     <Form-item label="" prop="email">
     <p>背景圖片&emsp;</p>
     <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">上傳照片</Button>
      </Upload>
     </Form-item>
      <br/>
      <Form-item label="" prop="email">
        <p>組織簡介&emsp;<Input v-model="value5" type="textarea" :rows="3" placeholder="請輸入組織簡介"></Input></p>
      </Form-item>
      <br/>
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
        mesg: '組織註冊',
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
<style scoped>
div {
  margin:0px auto;
  width: 75%;
}
Form{
  margin-right:10%;    
}
</style>