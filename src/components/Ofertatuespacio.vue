<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <h3> Oferta tu espacio </h3>
    <div>
  <div>
    <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
</div>
  </div>
</template>

<script>
export default {
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
          to: {
            name: 'Informaciondeespacio'
          }
          
        },
      
        {
          text: 'Oferta tu espacio',
          active: true
        }
      ]
    }
  }
}
</script>

<style>

</style>