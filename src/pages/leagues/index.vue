<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { Schema } from '../../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

// create a reactive reference to the array of todos
const leagues = ref<Array<Schema['League']['type']>>([]);

function fetchLeagues() {
    client.models.League.observeQuery().subscribe({
        next: ({ items }) => {
            leagues.value = items
        },
    });
}
async function createLeague() {
    await client.models.League.create({
        name: window.prompt("League Name?") ?? ""
    })
    fetchLeagues()
}
onMounted(() => {
    fetchLeagues();
});
</script>

<template>
    <div>
        <v-btn @click="createLeague">
            Add League
        </v-btn>
        <v-card class="mx-auto" max-width="300">
            <v-list>
                <v-list-item v-for="league in leagues" :key="league.id" :to="'leagues/' + league.id" link>
                    {{ league.name }}
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>