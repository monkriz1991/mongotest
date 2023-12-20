<script setup>
definePageMeta({
  title: "My index page",
  layout: "default",
});
</script>
<template>
  <div class="container">
    <!-- <left-bar /> -->
    <div>
      <h1 class="">Hello !</h1>

      <div class="slider">
        <div class="one-block">
          <div class="rating-circle">
            <div class="star-icon">
              <Icon name="material-symbols:kid-star-outline" />
            </div>
            <span>9,4</span>
          </div>
          <img
            src="https://www.team17.com/wp-content/uploads/2021/08/Trepang2-Snippet-image-800x500.png"
            alt=""
          />
          <div class="one-block-inf">
            <strong>Title</strong>
            <span>Descrition</span>
          </div>
        </div>
        <div class="two-block">
          <img
            src="https://st2.depositphotos.com/3584689/11223/i/450/depositphotos_112238158-stock-illustration-sci-fi-gaming-character-in.jpg"
            alt=""
          />
          <div class="one-block-inf">
            <strong>Title</strong>
            <span>Descrition</span>
          </div>
          <div class="play-icon">
            <Icon name="solar:play-circle-bold" />
          </div>
        </div>
      </div>
      <div class="img-test">
        <img
          src="https://drive.google.com/uc?export=view&id=1pqiqUPdHuY5whzeU-OeIts0PDw8N71uR"
          alt=""
        />
      </div>
      <div class="img-test">
        <img
          src="https://drive.google.com/uc?export=view&id=1og7flcjtz4B1n3uenBZ95MHUT4GbX6oh"
          alt=""
        />
      </div>

    </div>
  </div>
</template>

<style>
.img-test {
  float: left;
  width: 250px;
  height: 150px;
}
.img-test img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 17px;
}

.slider {
  float: left;
  width: 100%;
  margin: 60px 0 40px;
}
.block {
  float: left;
  width: 100%;
  margin: 0 0 15px;
  border-radius: 5px;
  padding: 20px;
  background: #f9f9f9;
}
.one-block {
  position: relative;
  padding: 180px 60px 60px;
  float: left;
  width: 60%;
  border-radius: 17px;
  margin: 0 0 0px;
}
.two-block {
  position: relative;
  padding: 180px 60px 60px;
  float: right;
  width: 36%;
  border-radius: 17px;
}
.one-block img,
.two-block img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 17px;
}
.one-block-inf {
  float: left;
  width: 100%;
  color: #fff;
  position: relative;
}
.one-block-inf strong {
  float: left;
  width: 100%;
  font-size: 28px;
  margin: 0 0 20px;
}
.one-block-inf span {
  float: left;
  width: 100%;
  font-size: 17px;
}
.rating-circle {
  position: absolute;
  left: 0px;
  background: #fff;
  z-index: 9;
  padding: 20px;
  border-radius: 50%;
  font-size: 36px;
  font-weight: 700;
  top: 0px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  border: 3px solid;
  box-shadow: 0 0 0px 15px #fff;
}
.rating-circle:after {
  content: "";
  position: absolute;
  right: -48px;
  width: 59px;
  height: 40px;
  background: #fff;
  top: -10px;
  border-radius: 0px 183px 59px 55px;
  background: radial-gradient(circle at top left, transparent 47%, white 46.5%);
  transform: rotate(180deg);
}
.rating-circle:before {
  content: "";
  position: absolute;
  left: -28px;
  width: 59px;
  height: 60px;
  background: #fff;
  bottom: -55px;
  border-radius: 0px 217px 33px 74px;
  background: radial-gradient(
    circle at top left,
    transparent 47%,
    #ffffff 46.5%
  );
  transform: rotate(273deg);
  transform: scale(-1, -1);
}
.star-icon {
  position: absolute;
  right: 0px;
  top: -3px;
  font-size: 26px;
  background: #fff;
  color: #ff2f00;
  border-radius: 50%;
  z-index: 12;
}
.play-icon {
  position: absolute;
  right: 50px;
  /* bottom: 0px; */
  font-size: 51px;
  color: #fff;
}
</style>
