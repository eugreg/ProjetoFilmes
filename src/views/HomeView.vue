<script setup></script>

<template>
  <div class="titulo"><h1>Populares</h1></div>
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
    <img
      src="https://i.pinimg.com/550x/d9/ee/de/d9eede5be6963701f136bc622f1f2b96.jpg"
      alt=""
    />

  </div>
</template>

<style>
body {
  width: 100%;
  place-items: center;
}
img {
  width: 10%;
  height: 77%;
  object-fit: cover;
  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);
  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
  margin-top: 10%;
}
.container {
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
.container:hover img {
  opacity: 0.3;
}
.container img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}

#app {
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: stretch;
  align-content: stretch;
}
.titulo{
  font-family: sans-serif;
  margin-left: 10px;
  color: black;
}
</style>
