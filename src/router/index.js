import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home';
import City from '../pages/City/City';
import TabHotel from '../pages/TabHotel/TabHotel';
import MyAccount from '../pages/MyAccount/MyAccount';
import Finance from '../pages/Finance/Finance';
import Domestic from '../pages/Domestic/Domestic'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/city', name: 'city', component: City},
    {path: '/tabhotel', name: 'tabhotel', component: TabHotel},
    {path: '/myaccount', name: 'myaccount', component: MyAccount},
    {path: '/financecenter', name: 'financecenter', component: Finance},
    {path: '/domestic', name: 'domestic', component: Domestic}
  ]
});
