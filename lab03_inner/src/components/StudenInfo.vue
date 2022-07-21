<template>
  <div class="event-card">
    <h4>First Name: {{ event.name }}</h4>
    <h4>Last Name: {{ event.surname }}</h4>
    <h4>GPA: {{ event.gpa }}</h4>
  </div>
</template>

<script>
export default {
  name: 'StudenInfo',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39395c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
