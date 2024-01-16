    import VueRouter from "vue-router";
    import Vue from "vue";

    Vue.use(VueRouter);

    const routes = [
        //La ruta base
        {
            path: '/',
            redirect: '/inicio'
        },
        //Las rutas asociadas a los componentes
        {
            path:'/',
            component: {
                render(c) {
                    return c('router-view')
                },
            },
            //Los componentes que se renderiza en router-view
            children:[
                {
                    path: '/Inicio',
                    name: 'Inicio',
                    component: () => import('../components/Inicio.vue')
                },
                {
                    path: '/Catologodeespacio',
                    name: 'Catologodeespacio',
                    component: () => import('../components/Catologodeespacio.vue')
                },
                {
                    path: '/InformacionDeespacio',
                    name: 'Informaciondeespacio',
                    component: () => import('../components/Informaciondeespacio.vue')
                },
                {
                    path: '/Detallesdeespacio',
                    name: 'Detallesdeespacio',
                    component: () => import('../components/Detallesdeespacio.vue')
                },
                {
                    path: '/Ofertastuespacio',
                    name: 'Ofertatuespacio',
                    component: () => import('../components/Ofertatuespacio.vue')
                },
                {
                    path: '/RentatuespacioUno',
                    name: 'RentatuespacioUno',
                    component: () => import('../components/RentatuespacioUno.vue')
                },
                {
                    path: '/RentartuespacioDos',
                    name: 'RentartuespacioDos',
                    component: () => import('../components/RentartuespacioDos.vue')
                },
                {
                    path: '/Main',
                    name: 'Main',
                    component: () => import('../components/Main.vue')
                },
                {
                    path: '/Tercero',
                    name: 'Tercero',
                    component: () => import('../components/Tercero.vue')
                },
                {
                    path: '/InicioLandspage',
                    name: 'InicioLandspage',
                    component: () => import('../components/InicioLandspage.vue')
                },
            

            ]
        }
    ]

    const router = new VueRouter({ routes, })

    
    export default router;

