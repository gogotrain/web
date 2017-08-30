<template>
  <div class="bar" style="max-width:100%;">
    <Menu mode="horizontal" :theme="theme">
        <Menu-item name="1">
            <Icon type="navicon"></Icon>
            最新消息
        </Menu-item>
        <Menu-item name="2">
            <Icon type="ios-paper"></Icon>
            關於我們
        </Menu-item>
        <Menu-item name="3">
            <Icon type="ios-people"></Icon>
            志工活動
        </Menu-item>
        <Menu-item name="4">
            <Icon type="ios-people-outline"></Icon>
            公益組織
        </Menu-item>
        <Menu-item name="5">
            <Icon type="ribbon-b"></Icon>
            獎勵兌換
        </Menu-item>
        <Menu-item name="6">
            <Icon type="help"></Icon>
            FAQ
        </Menu-item>
        <Submenu name="7">
            <template slot="title">
                <Icon type="archive"></Icon>
                下載專區
            </template>
                <Menu-item name="7-1">志工文件</Menu-item>
            </Menu-group>
                <Menu-item name="7-2">組織文件</Menu-item>
            </Menu-group>
         </Submenu>
    </Menu>
  <div id="sidenav">
    <p id="search" style=" text-align: center;" >搜尋</p>
    <p id="fb"  style=" text-align: center;">FB</p>
    <p id="per_login"  style=" text-align: center;" @click="to_per_login">個人登入</p>
    <p id="org_login"  style=" text-align: center;" @click="to_org_login">組織登入</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      theme: 'primary'
    }
  },
  methods: {
    to_per_login: function () {
      this.$router.push({path: '/Sign'})
    },
    to_org_login: function () {
      this.$router.push({path: '/Sign1'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidenav p {
    position: absolute;
    right: -20px;
    padding: 10px;
    transition: 0.5s;
    width: 60px;
    height:60px;
    text-decoration: none;
    font-size: 15px;
    color: white;
    border-radius: 10px 0px 0px 10px;
}

#sidenav p:hover {
    right: 0;
    cursor: pointer;
}

#search {
    top: 150px;
    background-color: #AAAAAA;
}

#fb {
    top: 210px;
    background-color: #2196F3;
}

#per_login {
    top: 270px;
    background-color: #55AA00;
}

#org_login {
    top: 330px;
    background-color: #FF5511;
}
</style>
