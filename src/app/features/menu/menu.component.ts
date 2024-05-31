import { Component, OnInit } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBiking, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from 'primeng/api'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { InputSwitchModule } from 'primeng/inputswitch'
import { MenubarModule } from 'primeng/menubar'
import { NgIf } from '@angular/common'

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [FaIconComponent, InputSwitchModule, MenubarModule, NgIf],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
    title = 'Cycle'
    faBiking = faBiking as IconProp
    items: MenuItem[] | undefined

    ngOnInit() {
        this.items = [
            {
                label: 'Accueil',
                icon: '',
                route: '/home',
            },
            {
                label: 'Articles',
                icon: '',
                route: '/shop',
                items: [
                    {
                        label: 'Vélo',
                        icon: '',
                        route: '/bike',
                    },
                    {
                        label: 'Nutrition',
                        icon: '',
                        route: '/nutrition',
                    },
                ],
            },
            {
                label: 'Prestations',
                icon: '',
                route: '/service',
                items: [
                    {
                        label: 'Etude posturale',
                        icon: '',
                        route: '/service/posture',
                    },
                    {
                        label: 'Atelier',
                        icon: '',
                        route: '/service/workshop',
                    },
                ],
            },
            {
                label: 'Partenaires',
                icon: '',
                route: '/brands',
            },
            {
                label: 'Equipe',
                icon: '',
                route: '/teams',
            },
            {
                label: 'Contact',
                icon: '',
                route: '/contact',
            },
        ]
    }
}
