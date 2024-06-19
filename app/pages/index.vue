<template>
  <main>
    <h1>WELCOME</h1>

    <div>
      <input v-model="toNumber" placeholder="No. with country code" />
      <button @click="requestCallback">Request a callback</button>
    </div>
  </main>
</template>

<script setup lang="ts">
const toNumber = ref("");
const requestCallback = async () => {
  if (toNumber.value) {
    const call = await $fetch("/api/call", {
      method: "POST",
      body: { to: toNumber.value },
    });

    console.log("call api res", call);
  } else {
    alert("Please enter your number");
  }
};
</script>
