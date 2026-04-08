import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
    selector: 'app-subject',
    imports: [AsyncPipe],
    templateUrl: './subject.html',
    styleUrl: './subject.scss',
})
export class SubjectDemo {
    subjectValue$ = new Subject<number>();

    ngOnInit() {
        // const subject$ = new Subject<number>();
        // subject$.subscribe((v) => console.log('a', v));
        // subject$.next(1);
        // subject$.subscribe((v) => console.log('b', v));
        // subject$.next(5);
        // subject$.complete();
        // subject$.next(124);
        // const bSubject$ = new BehaviorSubject<number>(0);
        // bSubject$.subscribe((v) => console.log('a', v));
        // bSubject$.next(1);
        // const value = bSubject$.getValue();
        // bSubject$.subscribe((v) => console.log('b', v));
        // bSubject$.next(5);
        // console.log('value', value);
        // bSubject$.complete();
        // bSubject$.next(124);
    }

    ngAfterViewInit() {
        this.subjectValue$.next(243);
    }
}

// subject - обсёр, в который я могу сам отправлять значения
// одно значение получат все подписчики
// behaviorSubject - сабжект, хранящий текущее значение и сразу отдает его новым подписчикам
// getValue() - метод БехавиорСабжекта, позволяющий синхронно спросить текущее состояние (вернуть текущее значение)
