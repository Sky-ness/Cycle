import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from 'primeng/api'
import { InputSwitchModule } from 'primeng/inputswitch'
import { MenubarModule } from 'primeng/menubar'
import { MenuComponent } from './features/menu/menu.component'
import { FooterComponent } from './features/footer/footer.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        FaIconComponent,
        InputSwitchModule,
        MenubarModule,
        MenuComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
