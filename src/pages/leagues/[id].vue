<script setup lang="ts">
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/data/resource';
import { ref, onMounted } from 'vue';

const route = useRoute()

const client = generateClient<Schema>();
const league = ref<Schema['League']['type']>();

async function fetchLeague() {
  client.models.League.get({
    id: (route.params as { id: string }).id,
  }).then((record) => { league.value = record.data as Schema['League']['type'] })
}

onMounted(() => {
  fetchLeague();
});
</script>

<template>
  <div>
    <h1>League Detail Page </h1>
    <div v-if="league">{{ league.name }}</div>
  </div>
</template>