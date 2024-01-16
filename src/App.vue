<script setup>
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand  style="margin-left: 15px"> RutaExplora </b-navbar-brand>
      <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
      <b-collapse id="navbar-nav" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="inicio">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <b-col md="3" class="p-0">
          
          <b-sidebar 
          z-index="-1"
            no-close-on-backdrop
            no-header-close
            no-close-on-route-change
            no-close-on-esc
            visible = "true"
            id="sidebar-1"
            shadow       
          >
          <b-nav vertical class="pt-5">
            <p>Hola me llamo cesar </p>

           <b-nav-item>
            <b-link :to="{ name: 'Inicio'}">
              Opcion 1
            </b-link>
           </b-nav-item>

           <b-nav-item>
            <b-link :to="{ name: 'Main'}">
              Opcion 2
            </b-link>
           </b-nav-item>
           <b-nav-item>
            <b-link :to="{ name: 'Tercero'}">
              Opcion 3
            </b-link>
           </b-nav-item>
           <b-nav-item>
            <b-link :to="{ name: 'InicioLandspage'}">
              Opcion 4
            </b-link>
           </b-nav-item>
           </b-nav>
          </b-sidebar>
        </b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script></script>

<style scoped>
</style>