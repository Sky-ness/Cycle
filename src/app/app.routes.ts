import { Routes } from '@angular/router'
import { ContactComponent } from './features/contact/contact.component'
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component'
import { HomeComponent } from './features/home/home.component'
import { TeamsComponent } from './features/teams/teams.component'
import { ShopComponent } from './features/shop/shop.component'
import { ServiceComponent } from './features/service/service.component'
import { BrandsComponent } from './features/brands/brands.component'
import { PostureComponent } from './features/service/posture/posture.component'
import { WorkshopComponent } from './features/service/workshop/workshop.component'

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'shop',
        component: ShopComponent,
    },
    {
        path: 'service',
        component: ServiceComponent,
    },
    {
        path: 'service/posture',
        component: PostureComponent,
    },
    {
        path: 'service/workshop',
        component: WorkshopComponent,
    },
    {
        path: 'brands',
        component: BrandsComponent,
    },

    {
        path: 'teams',
        component: TeamsComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
]
