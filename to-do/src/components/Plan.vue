<template>
    <div class="plan-list">
      <div class="plan-item" @click="showDetails = !showDetails">
        <div class="top-right-box" :class=" { completed: plan.complete }">
          <div v-if="plan.complete">Completed</div>
          <div v-else>Ongoing</div>
        </div>
        <h2>{{ plan.title }}</h2>
        <div v-if="showDetails">
          <p>{{ plan.details }}</p>
          <router-link :to="{name: 'EditPlan', params: { id: plan.id}}" class="edit-button">
            Edit Plan
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['plan'],
  data() {
    return {
      showDetails: false
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 40px;
}

.plan-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}

.plan-item {
  position: relative;
  background-color: #415569;
  border: 1px solid rgb(200, 200, 220);
  padding: 15px;
  border-radius: 8px;
  width: 700px;
  color: #fff;
}

.plan-item h2 {
  color: #fff;
  margin-bottom: 10px;
}

.top-right-box {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  border-radius: 0 8px 0 8px;
  height: 20px;
  background-color: rgb(167, 43, 43);
  border: 1px solid rgb(200, 200, 220);
}

.completed {
  background-color: #04530e;
}

.edit-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #2980b9;
}
</style>
