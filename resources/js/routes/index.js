// @ts-check
//function to redirect and block pages
let user = document.head.querySelector('meta[name="user"]')
var dataUser
function auth(){
	if(user.content){
		return true
	}else{
		return false
	}
}
function guardRoute(to, from, next)
{

	if(auth()){
        if(JSON.parse(user.content).role_id == 2){
            next(); // allow to enter route
        }else{
            next('/'); // go to '/login';
        }
	}else{
		next('/form/login'); // go to '/login';
	}
}
function guardRouteGuest(to, from, next)
{
	if(auth()){
		next('/');
	}else{
		next();
	}
}
/**
 * Here goes all your app routes definitions
 * @type {Array<import('vue-router').RouteConfig>}
 */
export const routes = [
    {
        path: '/',
        name: 'home',
        meta: { layout: 'default' },
        component: () =>
            import(/* webpackChunkName: "home" */ '../pages/home.vue'),
    },
    {
        path: '/form/:type',
        name: 'form-user',
        meta: {
            layout: 'default',
            title: 'Entrar y Registrarse'
        },
        beforeEnter : guardRouteGuest,
        component: () =>
            import(/* webpackChunkName: "form-user" */ '../pages/form-user.vue'),
        props: true
    },
    {
        path: '/contact',
        name: 'contact',
        meta: { layout: 'default' },
        component: () =>
            import(/* webpackChunkName: "contact" */ '../pages/contact.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            layout: 'dash',
            title: 'Panel de Control'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "dashboard" */ '../pages/dashboard.vue'),
    },
    {
        path: '/favorites',
        name: 'favorites',
        meta: {
            layout: 'default',
            title: 'Favoritas'
        },
        component: () =>
            import(/* webpackChunkName: "favorites" */ '../pages/favorites.vue'),
    },
    {
        path: '/publication/:uuid',
        name: 'publication',
        meta: { layout: 'default' },
        component: () =>
            import(/* webpackChunkName: "publication" */ '../pages/publication.vue'),
        props: true

    },
    {
        path: '/publications/edit/:uuid',
        name: 'publication-edit',
        meta: {
            layout: 'dash'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "PublicationEditPage" */ '../pages/publications-edit/publications-edit.vue'),
        props: true

    },
    {
        path: '/account',
        name: 'account',
        meta: {
            layout: 'dash',
            tile: 'Cuenta'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "account" */ '../pages/account.vue'),
        props: true

    },
    {
        path: '/publications',
        name: 'publications',
        meta: {
            layout: 'dash',
            title: 'Publicaciones'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "publications" */ '../pages/publications/publications.vue'),
        props: true

    },
    {
        path: '/images/upload',
        name: 'images',
        meta: {
            layout: 'dash',
            title: 'Imagenes'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "images" */ '../pages/imagesView.vue'),
    },
    {
        path: '/videos',
        name: 'videos',
        meta: {
            layout: 'dash',
            title: 'Video'
        },
        beforeEnter : guardRoute,
        component: () =>
            import(/* webpackChunkName: "videos" */ '../pages/videosView.vue'),
    },
    {
        path: '*',
        name: '404',
        meta: {
            layout: 'default',
            title: '404 Pagina no existe'
        },
        component: () =>
            import(/* webpackChunkName: "not-found-page" */ '../pages/404.vue'),
    },
];
