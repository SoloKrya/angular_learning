import { Component } from '@angular/core';
import { LifecycleHooks } from '../lifecycle-hooks';

@Component({
    selector: 'app-parent',
    imports: [LifecycleHooks],
    templateUrl: './parent.html',
    styleUrl: './parent.scss',
})
export class Parent {
    titleParent: string = 'Начинается аттракцион';

    ngOnInit() {
        setInterval(() => {
            this.titleParent = this.generateTitle();
        }, 10000);
    }

    generateTitle() {
        const currentDate = new Date();
        return `Title ${currentDate}`;
    }
}
