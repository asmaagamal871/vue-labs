<template>
         <div id="error-body">
            <h1 id="error">404</h1>
        </div>
  </template>
  
  <script>
export default {
  name: "ErrorPage",
};
</script>
  
  <style scoped>
#error-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#error {
  font-size: 60vh;
  font-family: sans-serif;
  position: relative;
  background: white;
  color: black;
  margin: 0;
  margin-top: 5%;
  padding: 0;
  overflow: hidden;
}

#error:before {
  content: "";
  display: block;
  position: absolute;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 1em,
      #9e2053 1em,
      orange 50%
    ),
    repeating-linear-gradient(
      45deg,
      #111626,
      #111626 1em,
      pink 1em,
      #571b3d 50%
    );
  background-size: 3em 3em, 2em 2em;
  animation-name: ani;
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes ani {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 400% 0;
  }
}
</style>
  