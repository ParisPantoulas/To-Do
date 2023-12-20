<template>
  <form @submit.prevent="SubmitForm">
      <label>Title</label>
      <input type="text" v-model="title" required placeholder="Enter your plan">
      <label>Details</label>
      <textarea v-model="details" required placeholder="Type the details of your plan"></textarea>
      <label class="check">Is you plan completed?
        <input type="checkbox" v-model="complete">
      </label>
      <button>Add Project</button>
  </form>
</template>
  
<script>


export default {
data() {
    return {
    title: '',
    details: '',
    complete: false
    }
},
methods: {
    SubmitForm() {
    let plan = {
        title: this.title,
        details: this.details,
        complete: this.complete
    }
    console.log(plan)

    fetch('http://localhost:3000/plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plan)
    }).then(() => {
        this.$router.push('/')
    }).catch(err => console.log(err))
    }
}
}
</script>
  
<style scoped>
form {
  background: #415569;
  padding: 20px;
  border-radius: 10px;
  display: inline-block; 
  text-align: left;
  width: 500px;
  margin-top: 8vh;
}

label {
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  border-radius: 8px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: rgb(91, 91, 180);
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

input[type="checkbox"] {
  margin-top: -40px;
  width: auto;
}

.check {
  margin-top: 20px;
}
</style>
