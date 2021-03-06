import App from '../App'
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const detail = r => require.ensure([], () => r(require('../pages/detail')), 'detail')
const profile = r => require.ensure([], () => r(require('../pages/profile')), 'profile')
const order = r => require.ensure([], () => r(require('../pages/order')), 'order')
const stuff = r => require.ensure([], () => r(require('../pages/stuff')), 'stuff')
const treasure = r => require.ensure([], () => r(require('../pages/treasure')), 'treasure')
export default [{
    path: '',
    component: App,
    children: [{
        path: '',
        // redirect: '/'
        component: App
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/detail',
        component: detail
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/order',
        component: order
    },
    {
        path: '/stuff',
        component: stuff
    },
    {
        path: '/treasure',
        component: treasure
    }]
}]