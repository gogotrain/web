<template>
  <div>
    <Bar></Bar>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
import Bar from '@/components/Bar.vue'
import Content from '@/components/Content'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hello,
    Bar,
    Content,
    Footer
  }
}
</script>
