<template>
  <div class="footer">
    <p>{{ issue }}</p>
    <p>{{ issue_address }}</p>
    <p>{{ message }}</p>
    <p>{{ message_address }}</p>
    <p>{{ information }}</p>
    <p>{{ term }}</p>
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      issue: '網站使用上任何問題請找 台灣青年基金會 (04)2314-8350 E-mail : hope125.tc@gmail.com',
      issue_address: '地址：40353臺中市西區華美西街一段137號',
      message: ' 志願服務訊息請找 臺中市志願服務推廣中心 電話：(04) 2437-5973 傳真：(04) 2436-7034',
      message_address: '地址：40647臺中市北屯區旱溪西路三段260號',
      information: '榮譽卡優惠資訊 衛福部志工系統',
      term: '隱私政策 / 網站使用條款',
      copyright: 'Copyright © 2016 臺中市政府社會局. All Rights Reserved. Designed by Minmax'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  color:#FFFFFF;
  background-color:#888888;
}
</style>
