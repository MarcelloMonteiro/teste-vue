<template>
  <div>
    <h1>Login</h1>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/firebase'; // Importe a instância de autenticação do Firebase

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        // Redirecione o usuário para a página de tarefas após o login bem-sucedido
        // Você pode usar o Vue Router para isso: router.push('/tasks');
      } catch (error) {
        console.error('Erro ao fazer login:', error.message);
      }
    };

    return { email, password, login };
  },
};
</script>
