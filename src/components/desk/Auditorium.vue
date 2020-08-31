<template>
  <div id="autitorium">
    <section class="auditorium-bg"></section>
    <div class="wrapper top">
      <div class="back animate__animated animate__fadeInRight animate__delay-1s">
        <router-link to="/dashboard" class="icon"><svg enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" /></svg></router-link> Back
      </div>
    </div>
    <div class="iframevideo ">
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/WQPex9w4XN0?controls=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="detail">
        <!-- <div class="offer animate__animated animate__lightSpeedInLeft animate__delay-1s">
          <strong>Now playing</strong> Indore expo intro
        </div> -->
        <div class="animate__animated animate__lightSpeedInRight animate__delay-3s" >
          <router-link to="/stalls" class="button orange">Skip Video</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      done: false,
    }
  },
}

</script>
