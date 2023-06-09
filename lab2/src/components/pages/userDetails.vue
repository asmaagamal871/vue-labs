<template>
        <div className='my-container m-auto d-flex align-items-center flex-column justify-content-center'>
        <div class="wrapper header">
        <img class="mel" src="../../assets/images/user.jpg" alt="img" />
            <h1 className='name'>Welcome {{ first_name }} {{ last_name }}</h1>
            <p className='desc'>Gender:{{gender}}</p>
        </div>
        <div class="wrapper footer">
            <p className='desc'>A simple profile card</p>
        </div>
    </div>
  </template>
  
  <script>
import axios from "axios";

export default {
  name: "userdetailsApp",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
    };
  },
  created() {
    this.getuserById();
  },
  methods: {
    getuserById() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(` http://localhost:2000/users/${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.id = res.data.id;
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.gender = res.data.gender;
        })
        .catch((err) => console.log(err));
    }
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import url(
  https://fonts.googleapis.com/css?family=Roboto+Slab:400);
.my-container {
  height: 520px;
}
body {
  font-family: "Roboto Slab", serif;
  text-align: center;
}
.name {
  margin: 0.5em 0 0.5em 0;
  font-size: 1.6em;
  font-weight: 700;
  color: #fff;
}
.desc {
  margin-bottom: 1.1em;
  opacity: 0.7;
}

.mel {
  border-radius: 50%;
  border: 5px solid #fff;
  max-width: 40%;
  -webkit-filter: contrast(0.9);
}
.wrapper {
  min-width: 250px;
  width: 20%;
  padding: 6% 0.5% 3% 0.5%;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0 20px 28px #ccc;
  animation: fadeIn 1s ease-in-out;
}
.header {
  background-image: linear-gradient(45deg, #ff7272, #ff7272, #fdc39b 100%);
}
.footer {
  padding: 0.5% 0.5%;
  margin: -20px auto;
  color: #999;
}
@keyframes fadeIn {
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
  