<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h3>Detalles de espacio</h3>
    <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
  </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        value: ''
      }
    },

  data() {
    return {
      items: [
        {
          text: 'Inicio Landspage',
          to: {
            name: 'InicioLandspage'
          }
        },
        {
          text: 'Rentar espacio',
          to: {
            name: 'RentartuespacioDos'
          }
        },
        {
          text: 'Catologo de espacio',
          to: {
            name: 'Catologodeespacio'
          }
        },
     
        {
          text: 'Detalles de espacio ',
          active: true
        },
       
      ]
    }
  }
}


</script>

<style>

</style>