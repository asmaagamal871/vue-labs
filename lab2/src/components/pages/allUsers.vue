<template>
    <div class="w-75 mx-auto">
        <h2 class="mt-5">ALL Users</h2>
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-danger me-2 text-center" @click="deleteUser(user.id)">Delete</button>
                <button class="btn btn-sm btn-primary me-2 text-center"> <router-link :to="`/users/${user.id}`" class="text-decoration-none text-center text-white">More</router-link></button>
                <button class="btn btn-sm btn-success me-2 text-center"> <router-link :to="`/users/update/${user.id}`" class="text-decoration-none text-center text-white">Update</router-link></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "allUsers",
    data() {
      return {
        users: [] // Initialize users as an empty array
      };
    },
    created() {
      this.getallusers();
    },
    methods: {
      getallusers() {
        axios
          .get("http://localhost:2000/users")
          .then((res) => {
            console.log(res.data);
            this.users = res.data; // Assign the fetched data to the users property
          })
          .catch((err) => console.log(err));
      },
    
    deleteUser(id){
        axios.delete(`  http://localhost:2000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    }
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  