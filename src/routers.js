/**
 * Created by KateYeEumLee on 2017-08-31.
 */

import Contact from './page_components/Contact.vue'
import About from './page_components/About.vue'
import Services from './page_components/Services.vue'
import Home from './page_components/Container.vue'


export const routes =[
    {path: '/contact', component:Contact},
    {path: '/about', component: About},
    {path: '/service', component: Services},
    {path: '/', component: Home}

]