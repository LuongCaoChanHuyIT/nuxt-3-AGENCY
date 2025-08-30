<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  texts: string[];
  interval?: number;
  className?: string;
}

const props = defineProps<Props>();

const currentText = ref(props.texts[0] || "");
let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % props.texts.length;
    currentText.value = props.texts[index];
  }, props.interval || 2000);
});
</script>

<template>
  <span :class="className">
    <br />

    <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <span :key="currentText">{{ currentText }}</span>
    </Transition>
  </span>
</template>
