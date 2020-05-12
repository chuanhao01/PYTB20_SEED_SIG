import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '',
    component: Dashboard
  },
  {
    path: '/events/all',
    name: 'All Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/All.vue')
  },
  {
    path: '/events/current',
    name: 'Current Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Current.vue')
  },
  {
    path: '/events/past',
    name: 'Past Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Past.vue')
  },
  {
    path: '/events/create',
    name: 'Create Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Create.vue')
  },
  {
    path: '/event/:eventId',
    name: 'Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Event.vue')
  },
  {
    path: '/event/:eventId/edit',
    name: 'Edit Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Edit.vue')
  },
  {
    path: '/event/:eventId/participants',
    name: 'Event Participants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Participants.vue')
  },
  

  /* Fake event */

  {
    path: '/event/a',
    name: 'Fake Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Event.vue')
  },
  {
    path: '/event/a/edit',
    name: 'Fake Event Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Edit.vue')
  },
  {
    path: '/event/a/participants',
    name: 'Fake Event participants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/events/Participants.vue')
  },

  /* Volunteers */
  {
    path: '/volunteers',
    name: 'View Volunteers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/volunteers/All.vue')
  },
  {
    path: '/volunteer/:volunteerId',
    name: 'View Volunteer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/volunteers/Profile.vue')
  },
  

  /* fake volunteer */
  {
    path: '/volunteer/12',
    name: 'View Volunteer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all events" */ '../views/volunteers/Profile.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
