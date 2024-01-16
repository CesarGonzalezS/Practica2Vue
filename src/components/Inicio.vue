<template>
    <div>
      Inicio
      <div>
        <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>
      </div>
    </div>
  </template>
  
  <script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Tercero',
            to: { name: 'Tercero' }

          },
          {
            text: 'Main',
            to: { name: 'Main' }
          },
          {
            text: 'Inicio',
            active: true
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  
  </style>