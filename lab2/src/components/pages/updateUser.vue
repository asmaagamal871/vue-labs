<template>
          <section className="section_form border-1 shadow-lg rounded-3 mx-auto py-3 text-center">
                <form id="consultation-form" className="feed-form  mx-auto" @submit.prevent="updateUser">
                    <input required="" v-model="first_name" name="Firstname" placeholder="First Name"  type="text" autoComplete="off"  />
                    <input v-model="last_name" name="lastName" required="" placeholder="Last Name"  type="text" autoComplete="off" />
                    <input v-model="gender" name="gender" required="" placeholder="Gender"  type="text" autoComplete="off"  />

                    <div className="text-center">
                        <button className="button_submit mx-auto" type="submit">Update</button>
                    </div>
                </form>
            </section>
</template>

<script>
import axios from "axios";

export default {
name: "userUpdateApp",
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
},
updateUser() {
      const user = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        gender: this.gender
      };

      axios.put(`http://localhost:2000/users/${this.id}`, user)
        .then(response => {
          console.log('User:', response.data);
          this.$router.push('/');
         
        })
        .catch(error => {
          console.error('Update failed:', error);
        
        });
    }
},
};
</script>

<style scoped>
.section_form{
    width: 40%;
    margin-top: 10%
}
.feed-form {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  
  .feed-form input {
    height: 54px;
    border-radius: 5px;
    background: white;
    margin-bottom: 15px;
    border: none;
    padding: 0 20px;
    font-weight: 300;
    font-size: 14px;
    color: #4B4B4B;
  }
  
  .button_submit:hover, .feed-form input:hover {
    transform: scale(1.009);
    box-shadow: 0px 0px 3px 0px #212529;
  }
  
  .button_submit {
    width: 100%;
    height: 54px;
    font-size: 14px;
    color: white;
    background: #ff7272;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    text-transform: uppercase;
  }
  
  </style>