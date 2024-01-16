<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h3>Catálogo de espacio</h3>
    <div class="d-flex flex-row">

      <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" 
        style="max-width: 15em;" class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

      <br>
      <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 15rem;" class="mb-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

    

      <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
        style="max-width: 15rem;" class="mb-3">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

    <b-button @click="irDetallesdeespacio" variant="primary">Detalles de espacio</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    irDetallesdeespacio() {
      this.$router.push({ name: 'Detallesdeespacio' });
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
          text: 'Rentar tu espacio',
          to: {
            name: 'RentartuespacioDos'
          }
        },
        
        {
          text: 'Catologo de espacios ',
          active: true
        },
        {
          text: 'Detalles de espacio',
          to: {
            name: 'Detallesdeespacio'
          }
        },
       
      ]
    }
  }
}
</script>

<style></style>
