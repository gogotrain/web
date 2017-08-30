<template>
  <div class="content">
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1 style=" text-align: center;">關於我們</h1>
    <h3 style=" text-align: center;">首頁/關於我們</h3>
    <br/><br/>
    <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">關於我們</Menu-item>
                <Menu-item name="2">何謂志願服務</Menu-item>
                <Menu-item name="3">聯絡我們</Menu-item>
                <Menu-item name="4">聯絡資訊</Menu-item>
            </div>
    </Menu>
    <div class="textp">
        <h1>有您當志工，希望在臺中！</h1><br/> 
        <h2>政府是太陽，但也有光照不到的地方，每一位志工就像黑夜中的螢火蟲，為人引路。然而，過去找志工或者徵志工訊息傳播不易，不知道有興趣的服務或者是
        需要的志工在何處，讓這樣微小的希望之光更容易被隱沒。<br/><br/>建置『臺中志工媒合平台』就是為了全臺中想當志工的市民以及非營利組織提供更優質
        、更便利的資訊整合平台，讓大家「輕鬆找志工、開心做志工」，並把愛送到每一個需要的角落。<br/><br/>在公益中體會生命價值的感動，進而以正循環，用
        愛活絡社會，實踐人人生而平等，大家都有好生活的權利；感謝巿民的參與，讓這個城巿更溫暖。</h2>
        <br/><br/>   <br/><br/>  <br/><br/> 
        <h1>2016臺中市志工大使 簡嫚書、曹晏豪</h1><br/> 
        <h2>為鼓勵更多青年學子加入公益行列，今年臺中市政府社會局特別邀請簡嫚書、曹晏豪擔任年度志工大使。<br/><br/>建置『臺中志工媒合平台』就是為了全
        簡嫚書，曾演繹多部精采作品，她更是臺中的女兒，散發著鄰家女孩的清新氣質，現在雖然身兼演員、導演和編劇多重身分，但還是懷抱著創作的熱情，希望能導
        演更多作品。一直以來對於公益活動不餘遺力，除今年年初擔任粉紅公益大使，帶領數千人以健走方式宣導乳癌防治，去年還曾擔任兒福聯盟偏鄉弱勢學童一日導
        師。而曹晏豪為影壇受注目的戲劇新人，更用自身的興趣攝影參與公益展覽。<br/><br/>日前，簡嫚書與曹晏豪二人也與臺中市政府社會局長呂建德，一同到太平
        社區關懷據點，與阿公阿嬤同樂，當天互動樂開懷，長輩們都十分開心！簡嫚書表示「我想用我自己的力量幫助更多的人」，各位臺中市民們，一起加入志工服務
        的行列吧！</h2>
    </div>
    <div class="gifp">
        <img :src="src" style="width: 600px; height: 450px;">
        <br/><br/><br/>
        <img :src="src1"  style="width: 600px; height: 500px;">
    </div>
    <div class="img">
     <img :src="src2" style="width: 900px; height: 220px;">
    </div>
    <br/><br/>  
</div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      about_msg: '11',
      src: 'http://volunteermatch.taichung.gov.tw/styles/images/about/about-pic1.jpg',
      src1: 'http://volunteermatch.taichung.gov.tw/_upload/htmlEdit/FLY0730_0033-OK%20(1)(1).jpg',
      src2: 'http://volunteermatch.taichung.gov.tw/_upload/htmlEdit/about.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-assistant{
    width: 500px;
    margin: 0 auto;
    height: inherit;
}
.textp{
   float: left;
   margin: 120px;
   max-width: 30%;
}
.gifp{
   margin-top: 120px;
   align:"texttop";
}
.img{
   margin-top:50px;
}
</style>
