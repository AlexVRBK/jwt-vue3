<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();

const redirectToSignup = () => {
  router.push('/signup');
};

const redirectToCars = () => {
  router.push('/cars');
};

const redirectToSignin = () => {
  router.push('/signin');
};
</script>

<template>
  <main>
    Hello Vue3
    <Button label="Signin" @click="redirectToSignin" />
    <Button label="Signup" @click="redirectToCars" />
    <Button label="Cars" @click="redirectToSignup" />
  </main>
</template>
