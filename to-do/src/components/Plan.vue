<template>
    <div>
      <div class="plan-list">
        <div class="plan-item">
          <h2>{{ plan.title }}</h2>
          <p>{{ plan.details }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['plan']
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
</style>




