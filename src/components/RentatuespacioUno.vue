<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h3>Renta tu espacio</h3>

    <div>
  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="200" height="128" alt="placeholder"></b-img>
      </b-media-aside>

      <b-media-body>
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <b-media>
          <template #aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0">Nested Media</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
          
        </b-media>
        <b-button @click="irInformaciondeespacio"  variant="primary">Catologo de espacio</b-button>

      </b-media-body>
    </b-media>
  </b-card>
</div>

  </div>
</template>

<script>
export default {
  methods: {
    irInformaciondeespacio() {
      this.$router.push({ name: 'Informaciondeespacio' });
    },
  
  },
    data() {
      return {
        items: [
          {
            text: 'InicioLandspage',
            to:{
              name:'InicioLandspage'
            }
          },
          {
            text: 'Renta tu Espacio',
            active: true
          },
          
          {
          text: 'Informacion de espacio',
          to: {
            name: 'Informaciondeespacio'
          }
          
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

<style>

</style>