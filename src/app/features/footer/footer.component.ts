import { Component, OnInit } from '@angular/core'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import {
    faFacebook,
    faGooglePlus,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faCalendar,
    faCalendarMinus,
    faCalendarPlus,
    faClock,
    faEnvelope,
    faPhone,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TableModule } from 'primeng/table'
import { NgForOf } from '@angular/common'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [FaIconComponent, TableModule, NgForOf],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    protected readonly faInstagram = faInstagram as IconProp
    protected readonly faFacebook = faFacebook as IconProp
    protected readonly faGooglePlus = faGooglePlus as IconProp
    protected readonly faPhone = faPhone as IconProp
    protected readonly faEnvelope = faEnvelope as IconProp
    protected readonly faCalendar = faCalendar as IconProp
    protected readonly faUtensils = faUtensils as IconProp
    protected readonly faCalendarMinus = faCalendarMinus as IconProp
    protected readonly faCalendarPlus = faCalendarPlus as IconProp
}
