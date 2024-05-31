import { Component } from '@angular/core'
import { AvatarModule } from 'primeng/avatar'
import { CardModule } from 'primeng/card'
import { RatingModule } from 'primeng/rating'
import { StyleClassModule } from 'primeng/styleclass'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
    selector: 'app-teams',
    standalone: true,
    imports: [
        AvatarModule,
        CardModule,
        RatingModule,
        StyleClassModule,
        FaIconComponent,
    ],
    templateUrl: './teams.component.html',
    styleUrl: './teams.component.css',
})
export class TeamsComponent {
    protected readonly faWrench = faWrench as IconProp
    protected readonly faShoppingCart = faShoppingCart as IconProp
}
