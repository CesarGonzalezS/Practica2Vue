<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h3>Renta tu espacio </h3>

    <div>
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024"
        img-height="480">
        <b-carousel-slide caption="First Slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
        <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
      <br>
      <b-button @click="irCatologodeespacio"  variant="primary">Ofertar tu espacio</b-button>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    irCatologodeespacio() {
      this.$router.push({ name: 'Catologodeespacio' });
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
          active: true
        },
        {
          text: 'Catologo de espacios',
          to: {
            name: 'Catologodeespacio'
          }
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

