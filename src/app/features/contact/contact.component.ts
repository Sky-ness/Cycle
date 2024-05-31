import { Component } from '@angular/core'
import { EditorModule } from 'primeng/editor'
import { Button } from 'primeng/button'

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [EditorModule, Button],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent {}
