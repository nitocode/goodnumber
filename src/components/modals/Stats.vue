<script setup>
const close = () => {
  emit("close", "stats");
};

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="stats-modal fixed z-50 h-screen w-screen left-0 top-0"
    @click.self="close()"
  >
    <div
      class="stats-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"
    >
      <div class="p-4 text-sm">
        <div class="fixed top-4 right-4 cursor-pointer" @click="close()">
          <img
            class="w-[20px] h-[20px]"
            src="@/assets/cross.svg"
            alt="croix de fermeture de modal des règles"
          />
        </div>
        <h2 class="text-center font-bold text-lg my-4">Statistiques</h2>

        <table class="table-auto">
          <!-- <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
            </tr>
          </thead> -->
          <tbody>
            <tr>
              <td>Bonnes réponses consécutives</td>
              <td class="text-center">5</td>
            </tr>
            <tr>
              <td>Record bonnes réponses consécutives</td>
              <td class="text-center">The Eagles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats-modal {
  background: rgba(0, 0, 0, 0.5);
  .stats-container {
    background-color: #3d4451;
    p {
      margin-bottom: 1em;
    }
    td {
      padding: 10px 0;
    }
  }
}
</style>
