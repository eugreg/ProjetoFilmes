<script setup></script>

<template>
  <div class="container">
    <img
      src="https://i.pinimg.com/550x/d9/ee/de/d9eede5be6963701f136bc622f1f2b96.jpg"
      alt=""
    />
    <img
      src="https://i.pinimg.com/550x/d9/ee/de/d9eede5be6963701f136bc622f1f2b96.jpg"
      alt=""
    />
    <img
      src="https://i.pinimg.com/550x/d9/ee/de/d9eede5be6963701f136bc622f1f2b96.jpg"
      alt=""
    />
  </div>
</template>

<style>
body {
  width: 100%;
  /* height: 100vh;
  display: grid;*/
  place-items: center;
}
img {
  width: 30%;
  height: 100%;
  object-fit: cover;
  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);
  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
}
.container {
  max-width: 600px;
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container:hover img {
  opacity: 0.3;
}
.container img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}
</style>
