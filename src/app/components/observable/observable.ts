import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { filter, interval, map, Observable, of, switchMap, take, tap } from 'rxjs';

@Component({
    selector: 'app-observable',
    imports: [],
    templateUrl: './observable.html',
    styleUrl: './observable.scss',
})
export class ObservableDemo implements OnInit {
    http = inject(HttpClient);
    ngOnInit() {
        // const obs$ = new Observable((observer) => {
        //     observer.next(1);
        //     observer.next(2);
        //     observer.error('yups');
        //     observer.next(3);
        //     observer.complete();
        // });
        // obs$.subscribe((value) => {
        //     //колбэк - функция, которая передается другой функции и вызывается в ней позже
        //     console.log(value);
        // });
        // obs$.subscribe({
        //     next: (value) => console.log(value),
        //     error: (error) => console.log(error),
        //     complete: () => console.log('done'),
        // });

        // const obsTimer$ = new Observable<number>((observer) => {
        //     let count = 0;
        //     const interval = setInterval(() => {
        //         observer.next(count++);
        //     }, 1000);
        //     return () => {
        //         clearInterval(interval);
        //     };
        // });
        // const subscribe = obsTimer$.subscribe((value) => {
        //     console.log(value);
        //     if (value == 7) {
        //         subscribe.unsubscribe();
        //     }
        // });
        // setTimeout(() => {
        //     const subscribe2 = obsTimer$.subscribe((value) => {
        //         console.log(value);
        //         if (value == 10) {
        //             subscribe2.unsubscribe();
        //         }
        //     });
        // }, 4000);

        // const obs2$ = new Observable((observer) => {
        //     observer.next(1);
        //     observer.next(2);
        //     observer.next(3);
        //     observer.complete();
        // });
        // of(1, 2, 3).subscribe((value) => console.log(value));

        // const obs = of(1, 2, 3);
        // obs.pipe(
        //     map((value) => value * 2),
        //     tap((v) => {
        //         v = v * 10;
        //         console.log(v);
        //     }),
        //     filter((value) => value > 2),
        // ).subscribe((value) => console.log(value));
        // obs.subscribe((value) => console.log(value));

        const obs2 = of(1, 2, 3);
        obs2.pipe(
            switchMap((value) => {
                console.log('start', value);
                return interval(500).pipe(take(3));
            }),
            //внешний поток быстро выдал 1,2,3
            //для каждого числа запустили внутренний таймер
            //но свитчМап каждый раз отменял старый таймер и оставлял только последний
            //поэтому в конце мы получаем значение только из последнего таймера
        ).subscribe((v) => console.log('internal', v));

        this.http
            .get('/api/user')
            .pipe(
                switchMap((user: any) => {
                    return this.http.get(`api/orders/${user.id}`);
                }),
            )
            .subscribe((order) => console.log(order)).unsubscribe;
    }
}
//обсервер - объект с методами (next, error, complete), который принимает значения от обсервабле
//next - функция, которая вызывается, когда обсервабле отправляет новые значения
//of функция, создающая обсёр (возвращает объект обсервабле)
//pipe - метод обсёра, позволяющий изменять поток данных с помощью операторов, НЕ изменяя оригинальный обсёр
//map - оператор обсёра (функция, принимающая поток, преобразующая и возвращающая новый), преобразующий каждое значение в потоке
//filter - оператор, пропускающий только значения, удовлетворяющие условию
//tap - оператор, позволяющий выполнить побочное действие, не изменяя поток

//switchMap - оператор, переключающийся на новый обсёр, отменяя предыдущий
//(хранит только последний внутренний обсёр, предудущие отменяет новое значение потока - новое выполнение свитчМапа, отменяет предыдущее, поток исходит только из последнего значения)
//take(n) - оператор, берущий только первые n значений потока, затем завершающий его (только если в потоке есть достаточное количество значений)
//first === take(1) - оператор, берущий только первое значение потока и завершающий его
