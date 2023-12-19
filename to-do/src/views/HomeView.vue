<template>
  <div class="home">
    <PlanFilter />
    <div>
        <div v-for="plan in plans" :key="plan.id">
          <Plan :plan="plan"/>
        </div>
    </div>
  </div>
</template>

<script>
import Plan from '../components/Plan.vue'
import PlanFilter from '../components/PlanFilter.vue'

export default {
components: { Plan, PlanFilter},
data() {
    return {
      plans: [],
    };
},
mounted() {
    fetch('http://localhost:3000/plans')
    .then((res) => res.json())
    .then((data) => (this.plans = data))
    .catch((err) => console.log(err));
},
methods: {},
};
</script>