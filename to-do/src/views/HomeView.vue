<template>
  <div class="home">
    <PlanFilter @filter="currentFilter = $event" :currentFilter="currentFilter"/>
    <div>
        <div v-for="plan in filteredPlans" :key="plan.id">
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
      currentFilter: 'all'
    };
},
mounted() {
    fetch('http://localhost:3000/plans')
    .then((res) => res.json())
    .then((data) => (this.plans = data))
    .catch((err) => console.log(err));
},
computed: {
    filteredPlans() {
      if (this.currentFilter === 'completed') {
        return this.plans.filter(plan => plan.complete)
      }
      if (this.currentFilter === 'ongoing') {
        return this.plans.filter(plan => !plan.complete)
      }
      return this.plans
    }
  }
}

</script>