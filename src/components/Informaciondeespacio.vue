<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h3>Informacion de tu espacio</h3>
    <div>
      <div class="mb-3">
        <b-button v-b-toggle href="#example-collapse" @click.prevent>Toggle Sidebar</b-button>
      </div>

      <b-collapse id="example-collapse">
        <b-card title="¡Descubre el lugar perfecto para tu próximo evento!">
          Ubicación privilegiada:
          Nuestro espacio está estratégicamente ubicado en zapata, lo que lo convierte en el lugar perfecto para tu
          evento. Con fácil acceso y una ubicación céntrica, garantizamos que tus invitados llegarán sin complicaciones.
          <p></p>
          Espacio versátil:
          Ya sea que estés planeando una reunión de negocios, una fiesta privada, una sesión de fotos o cualquier otro
          evento especial, nuestro espacio es altamente versátil y se puede adaptar a tus requerimientos. Contamos con
          áreas abiertas, salas privadas y una amplia gama de servicios para asegurarnos de que tu evento sea un éxito.
          
        </b-card>
        <br>
        <b-button @click="irOfertartuespacio"  variant="primary">Ofertar tu espacio</b-button>

      </b-collapse>
      


    </div>
  </div>
</template>

<script>
export default {
  methods: {
    irOfertartuespacio() {
      this.$router.push({ name: 'Ofertatuespacio' });
    },

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
          text: 'Renta tu espacio',
          to: {
            name: 'RentatuespacioUno'
          }
        },
        
        {
          text: 'Informacion de espacio',
          active: true
        },
        {
          text: 'Oferta tu espacio',
          to: {
            name: 'Ofertatuespacio'
          }
        },
      ]
    }
  }
}

</script>

<style></style>