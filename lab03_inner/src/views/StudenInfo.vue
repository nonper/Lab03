<template>
  <h1>Studen Information</h1>
  <div class="events">
    <EventCardStu v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCardStu from '@/components/StudenInfo.vue'
import EventService from '@/services/AnotherEventService'

export default {
  name: 'EventListView',
  components: {
    EventCardStu //register it as a child component
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
