
export default{
    name : 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children: [
        //Todas las rutas hijas de Daybook
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView'),
        }
    ]
}