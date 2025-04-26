<template>
  <div class="table-page">
    <table class="table">
      <tbody>
        <tr class="table_row">
          <td class="table_cell">1,1</td>
          <td class="table_cell">1,2</td>
          <td class="table_cell">1,3</td>
          <td rowspan="5" class="table_cell">1,4</td>
          <td class="table_cell">1,5</td>
        </tr>
        <tr class="table_row">
          <td class="table_cell">2,1</td>
          <td class="table_cell">2,2</td>
          <td class="table_cell">2,3</td>
          <td class="table_cell">2,5</td>
        </tr>
        <tr class="table_row">
          <td class="table_cell">3,1</td>
          <td class="table_cell">3,2</td>
          <td class="table_cell">3,3</td>
          <td class="table_cell">3,5</td>
        </tr>
        <tr class="table_row">
          <td rowspan="2" class="table_cell">4,1</td>
          <td class="table_cell">4,2</td>
          <td class="table_cell">4,3</td>
          <td class="table_cell">4,5</td>
        </tr>
        <tr class="table_row">
          <td class="table_cell">5,2</td>
          <td class="table_cell">5,3</td>
          <td class="table_cell">5,5</td>
        </tr>
        <tr class="table_row">
          <td class="table_cell">6,1</td>
          <td class="table_cell">6,2</td>
          <td class="table_cell">6,3</td>
          <td class="table_cell">6,4</td>
          <td class="table_cell">6,5</td>
        </tr>
        <tr class="table_row">
          <td class="table_cell">7,1</td>
          <td class="table_cell">7,2</td>
          <td colspan="2" class="table_cell">7,3</td>
          <td class="table_cell">7,5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style scoped>
/* Здесь будут ваши стили из style.css, относящиеся к странице Table */
</style> 