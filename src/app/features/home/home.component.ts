import { Component, OnInit } from '@angular/core'

import { GalleriaModule } from 'primeng/galleria'
import { NgOptimizedImage } from '@angular/common'
import { StyleClassModule } from 'primeng/styleclass'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [GalleriaModule, NgOptimizedImage, StyleClassModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    images: any[] | undefined

    ngOnInit() {
        this.images = [
            {
                title: 'images 1',
                src: 'assets/images/home/image1.jpg',
            },
            {
                title: 'images 2',
                src: 'assets/images/home/image2.png',
            },
            {
                title: 'images 3',
                src: 'assets/images/home/image3.jpg',
            },
        ]
    }
}
