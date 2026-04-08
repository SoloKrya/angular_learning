import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DoublePipe } from './double-pipe';
import { CutPipe } from './cut-pipe';
import { BetterCutPipe } from './better-cut-pipe';

@Component({
    selector: 'app-pipe',
    imports: [AsyncPipe, UpperCasePipe, DoublePipe, CutPipe, BetterCutPipe],
    providers: [BetterCutPipe],
    templateUrl: './pipe.html',
    styleUrl: './pipe.scss',
})
export class Pipe {
    subjectString$ = new BehaviorSubject<string>('start_value');
    subjectNumber$ = new BehaviorSubject<number>(2455);
    myString = 'chota';
    myNumber = 14151616;
    pipe = inject(BetterCutPipe);

    ngOnInit() {
        let longString = 'kodgsbspgfslknslnkfd lkn f lfsd lkjfdslkjd fs f;ld ;a';
        let shortedString = this.pipe.transform(longString, {});
        console.log(shortedString);
    }
}
// пайп - это преобразователь данных
// {{ name | uppercase }}
// 👉 angular → ANGULAR

// {{ name | lowercase }}
// 👉 ANGULAR → angular

// {{ 1234.567 | number:'1.2-2' }}
// 👉 1,234.57

// {{ 0.25 | percent }}
// 👉 25%

// {{ 1000 | currency:'EUR' }}
// 👉 €1,000.00

// {{ today | date:'short' }}
// 👉 07.04.26, 12:30

// {{ today | date:'fullDate' }}
// 👉 Tuesday, April 7, 2026

// {{ [1,2,3,4] | slice:1:3 }}
// 👉 [2,3]

// {{ 'Angular' | slice:0:3 }}
// 👉 Ang

// {{ user | json }}
// 👉 удобно для дебага
