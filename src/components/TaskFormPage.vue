// TaskListPage.vue
<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';

export default {
  setup() {
    const tasks = ref([]);

    onMounted(async () => {
      try {
        const snapshot = await db.ref('tasks').once('value');
        tasks.value = snapshot.val();
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error.message);
      }
    });

    return { tasks };
  },
};
</script>
