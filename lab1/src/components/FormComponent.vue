<template >
  <div>
    <button class="continue-application" @click="handleButton" name="form">
      <div>
        <div class="pencil"></div>
        <div class="folder">
          <div class="top">
            <svg viewBox="0 0 24 27">
              <path
                d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z">
              </path>
            </svg>
          </div>
          <div class="paper"></div>
        </div>
      </div>
      Reigster
    </button>
    <button @click="handleButton" name="admins">
      <i class="bi bi-person-fill-gear"></i>
      Admins
    </button>
    <button @click="handleButton" name="users">
      <i class="bi bi-person-fill"></i>
      Users
    </button>
    <div v-if="activeFlag === 'form'" class="container mt-5 text-center py-5">
      <div class="form-container mx-auto">
        <p class="title">Register</p>
        <form class="form" action="" @submit.prevent="formHandling">
          <div class="input-group mb-3">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" v-model="person.name">
          </div>
          <div class="input-group mb-3">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="" v-model="person.email">
          </div>
          <div class="radio-inputs mb-3">
            <label class="radio">
              <input type="radio" name="radio" value="admin" checked="" v-model="selectedOption">
              <span class="name">Admin</span>
            </label>
            <label class="radio">
              <input type="radio" name="radio" value="user" v-model="selectedOption">
              <span class="name">User</span>
            </label>
          </div>
          <button class="sign" type="submit">Register</button>
        </form>
      </div>
    </div>
    <AdminComponent v-if="activeFlag === 'admins'" :admins="getAdmins" @deleteAdmin="deletePerson"></AdminComponent>
    <UserComponent v-if="activeFlag === 'users'" :users="getUsers" @deleteUser="deletePerson"></UserComponent>
    
  </div>
</template>
<script>
import AdminComponent from "./AdminComponent.vue";
import UserComponent from "./UserComponent.vue";

export default {
  name: "FormComponent",
  data() {
    return {
      activeFlag: "form",
      selectedOption:"admin",
      person: {
        name: '',
        email: '',
        role:''
      },
      persons: [
        {
          name: "Mariam",
          email: "mariam@gmail.com",
          role: "admin",
        },
        {
          name: "Ghina",
          email: "ghina@gmail.com",
          role: "user",
        },
        {
          name: "Mokhtar",
          email: "mokhtar@gmail.com",
          role: "user",
        },
        {
          name: "Yosra",
          email: "yosra@gmail.com",
          role: "admin",
        },
      ],
    };
  },
  methods: {
    handleButton(e) {
      this.activeFlag = e.target.name;
      console.log(this.activeFlag);
    },
    formHandling() {
      console.log(this.person)
      this.person.role=this.selectedOption;
      this.persons.push(this.person)
      console.log(this.persons)
      this.person={
        name:"",
        email:"",
        role:""
      };
    },
    deletePerson(email)
    {
      this.persons =  this.persons.filter((person)=> person.email !== email);
      //      this.persons =  this.persons.filter((person,index)=> index !== deletedIndex);

    }
  },
  computed: {
    getAdmins() {
      return this.persons.filter((person) => person.role === "admin");
    },
    getUsers() {
      return this.persons.filter((person) => person.role === "user");
    },
  },
  components: {
    AdminComponent,
    UserComponent,
  },
};
</script>
<style scoped>
.continue-application {
  --color: #fff;
  --background: #404660;
  --background-hover: #3a4059;
  --background-left: #2b3044;
  --folder: #f3e9cb;
  --folder-inner: #beb393;
  --paper: #ffffff;
  --paper-lines: #bbc1e1;
  --paper-behind: #e1e6f9;
  --pencil-cap: #fff;
  --pencil-top: #275efe;
  --pencil-middle: #fff;
  --pencil-bottom: #5c86ff;
  --shadow: rgba(13, 15, 25, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 17px 29px 17px 69px;
  transition: background 0.3s;
  color: var(--color);
  background: var(--bg, var(--background));
}

.continue-application>div {
  top: 0;
  left: 0;
  bottom: 0;
  width: 53px;
  position: absolute;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
  background: var(--background-left);
}

.continue-application>div .folder {
  width: 23px;
  height: 27px;
  position: absolute;
  left: 15px;
  top: 13px;
}

.continue-application>div .folder .top {
  left: 0;
  top: 0;
  z-index: 2;
  position: absolute;
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application>div .folder .top svg {
  width: 24px;
  height: 27px;
  display: block;
  fill: var(--folder);
  transform-origin: 0 50%;
  transition: transform 0.3s ease var(--fds, 0.45s);
  transform: perspective(120px) rotateY(var(--fr, 0deg));
}

.continue-application>div .folder:before,
.continue-application>div .folder:after,
.continue-application>div .folder .paper {
  content: "";
  position: absolute;
  left: var(--l, 0);
  top: var(--t, 0);
  width: var(--w, 100%);
  height: var(--h, 100%);
  border-radius: 1px;
  background: var(--b, var(--folder-inner));
}

.continue-application>div .folder:before {
  box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow),
    0 3.5px 7px var(--shadow);
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application>div .folder:after,
.continue-application>div .folder .paper {
  --l: 1px;
  --t: 1px;
  --w: 21px;
  --h: 25px;
  --b: var(--paper-behind);
}

.continue-application>div .folder:after {
  transform: translate(var(--pbx, 0), var(--pby, 0));
  transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application>div .folder .paper {
  z-index: 1;
  --b: var(--paper);
}

.continue-application>div .folder .paper:before,
.continue-application>div .folder .paper:after {
  content: "";
  width: var(--wp, 14px);
  height: 2px;
  border-radius: 1px;
  transform: scaleY(0.5);
  left: 3px;
  top: var(--tp, 3px);
  position: absolute;
  background: var(--paper-lines);
  box-shadow: 0 12px 0 0 var(--paper-lines), 0 24px 0 0 var(--paper-lines);
}

.continue-application>div .folder .paper:after {
  --tp: 6px;
  --wp: 10px;
}

.continue-application>div .pencil {
  height: 2px;
  width: 3px;
  border-radius: 1px 1px 0 0;
  top: 8px;
  left: 105%;
  position: absolute;
  z-index: 3;
  transform-origin: 50% 19px;
  background: var(--pencil-cap);
  transform: translateX(var(--pex, 0)) rotate(35deg);
  transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application>div .pencil:before,
.continue-application>div .pencil:after {
  content: "";
  position: absolute;
  display: block;
  background: var(--b,
      linear-gradient(var(--pencil-top) 55%,
        var(--pencil-middle) 55.1%,
        var(--pencil-middle) 60%,
        var(--pencil-bottom) 60.1%));
  width: var(--w, 5px);
  height: var(--h, 20px);
  border-radius: var(--br, 2px 2px 0 0);
  top: var(--t, 2px);
  left: var(--l, -1px);
}

.continue-application>div .pencil:before {
  -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
  clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
}

.continue-application>div .pencil:after {
  --b: none;
  --w: 3px;
  --h: 6px;
  --br: 0 2px 1px 0;
  --t: 3px;
  --l: 3px;
  border-top: 1px solid var(--pencil-top);
  border-right: 1px solid var(--pencil-top);
}

.continue-application:before,
.continue-application:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  border-radius: 1px;
  background: var(--color);
  transform-origin: 9px 1px;
  transform: translateX(var(--cx, 0)) scale(0.5) rotate(var(--r, -45deg));
  top: 26px;
  right: 16px;
  transition: transform 0.3s;
}

.continue-application:after {
  --r: 45deg;
}

.continue-application:hover {
  --cx: 2px;
  --bg: var(--background-hover);
  --fx: -40px;
  --fr: -60deg;
  --fd: 0.15s;
  --fds: 0s;
  --pbx: 3px;
  --pby: -3px;
  --pbd: 0.15s;
  --pex: -24px;
}

button {
  display: inline-block;
  border-radius: 4px;
  background-color: #3d405b;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  padding: 16px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

button i {
  cursor: none;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button i:after {
  content: "";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -15px;
  transition: 0.5s;
}

button:hover i {
  padding-right: 15px;
}

button:hover i:after {
  opacity: 1;
  right: 0;
}


.form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.sign {
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}
.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 100%;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: rgba(243, 244, 246, 1);
  font-weight: 600;
}
</style>