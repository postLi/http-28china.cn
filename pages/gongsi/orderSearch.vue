<template>
  <div class="yd_2">
    <!-- yd_2 -->
    <input
      id="yd_nr"
      rows="3"
      cols="20"
      placeholder="请输入运单号，例如：">
    <input
      id="yd_cx"
      type="button">
    <div class="ydh">
      <span>001380</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSearch',
  mounted() {
    //运单查询 S
    $('.ydh').click(function() {
      $('#yd_nr').val('1809260061')
      $('.ydh').css('display', 'none')
    })
    $('#yd_nr').keyup(function() {
      if ($('#yd_nr').val()) {
        console.log('nr')
        $('#yd_cx').css('background-color', '#eb434d')
        $('#yd_cx').css('color', '#f9f9f9')
        $('.ydh').css('display', 'none')
      }
      if (!$('#yd_nr').val()) {
        console.log('nr')
        $('#yd_cx').css('background-color', '#fff')
        $('#yd_cx').css('color', '#f66618')
        $('.ydh').css('display', 'block')
      }
    })

    $('#yd_cx').click(function() {
      console.log($('#yd_nr').val())
      var num = $('#yd_nr').val()
      if (num) {
        window.open('/ydcx?num=' + num)
      }
      if (!num) {
        alert('请先输入运单号查询！')
      }
    })

    //运单查询 E
  }
}
</script>

<style scoped>
</style>
