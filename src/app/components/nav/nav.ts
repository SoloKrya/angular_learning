import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    imports: [RouterLink],
    templateUrl: './nav.html',
    styleUrl: './nav.scss',
})
export class Nav {
    router = inject(Router);
    goToHome() {
        this.router.navigate(['']);
    }
}
//Все компоненты, активируемые по пути рендерятся в router-outlet
