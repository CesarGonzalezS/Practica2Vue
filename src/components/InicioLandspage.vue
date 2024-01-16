<template>
    <div>
        <div>
            <b-container>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </div>

        <b-container fluid>
            <b-row>
                <div>
                    <br>
                    <b-card-group deck>
                        <b-card header-tag="header" footer-tag="footer" title="Renta tu espacio!">
                            <b-card-text>Conoce mas sobre los espacios disponibles</b-card-text>
                            <b-button @click="irARentaEspacioUno" variant="primary">Informacion de espacio</b-button>
                        </b-card>

                        <br>
                        <b-card title="Rentar tu espacio!" header-tag="header" footer-tag="footer">


                            <b-card-text>Tienes espacio disponibles , No pienses mas genera dinero rentando tu
                                espacio</b-card-text>
                            <b-button @click="irARentaEspacioDos" variant="primary">Catologo de espacio</b-button>

                        </b-card>
                    </b-card-group>
                </div>
            </b-row>

        </b-container>
    </div>
</template>

<script>
export default {
  methods: {
    irARentaEspacioUno() {
      this.$router.push({ name: 'RentatuespacioUno' });
    },
    irARentaEspacioDos() {
      this.$router.push({ name: 'RentartuespacioDos' });
    }
  },
  
}
</script>

<style></style>