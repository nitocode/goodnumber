<script setup>
const closeRules = () => {
  emit("close");
};

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="rules-modal fixed h-screen w-screen left-0 top-0"
    @click.self="closeRules()"
  >
    <div
      class="rules-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"
    >
      <div class="text-center p-4 text-sm">
        <div class="fixed top-4 right-4 cursor-pointer" @click="closeRules()">
          <img
            class="w-[20px] h-[20px]"
            src="@/assets/cross.svg"
            alt="croix de fermeture de modal des règles"
          />
        </div>
        <h2 class="font-bold text-lg my-4">Comment ça marche&nbsp;?</h2>
        <p>
          Smart Numdle est un quiz quotidien où vous devez trouver la bonne
          réponse en un nombre de tentatives limité.
        </p>
        <p>En cas de mauvaise réponse un indice vous sera donné.</p>
        <div class="separator"></div>
        <p>1847 : 🔺<br />Le résultat à trouver est plus grand.</p>
        <div class="separator"></div>
        <p>1400 : 🔻<br />Le résultat à trouver est plus petit.</p>
        <div class="separator"></div>
        <p>Comparez ensuite votre résultat avec vos amis&nbsp;!</p>
        <p>Bonne chance&nbsp;!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rules-modal {
  background: rgba(0, 0, 0, 0.5);
  .rules-container {
    background-color: #3d4451;
    p {
      margin-bottom: 1em;
    }
  }
}
</style>
