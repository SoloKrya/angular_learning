import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
    selector: 'app-unsubscribe',
    imports: [],
    templateUrl: './unsubscribe.html',
    styleUrl: './unsubscribe.scss',
})
export class Unsubscribe {
    subscription!: Subscription;
    subscription2: Subscription = new Subscription();
    private destroyRef = inject(DestroyRef); // - объект, сообщающий, когда компонент уничтожается
    // DestroyRef - ссылка на момент уничтожения
    private destroy$ = new Subject<void>();

    ngOnInit() {
        this.subscription = of(1, 2, 3).subscribe();
        this.subscription2.add(of(1, 2, 3, 4, 5, 6, 7, 8).subscribe((v) => console.log(v)));
        this.subscription2.add(of(4, 52, 63).subscribe((v) => console.log(v)));
        of('a', 'b', 'c').pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
        of('a', 'b', 'c').pipe(takeUntil(this.destroy$)).subscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
}

//способы отписки:
// 1. ручная отписка: Subscription.unsubscribe(), для каждой подписьки отдельно
// 2. несколько подписок через Subscription.add(), после этого отписка работает на все в Subscription
// 3. takeUntil() + Subject - передать в ngOnDestroy в сабжект сигнал, это убьет сигнал, убить сабжект
// 4. (recommended) takeUntilDestroyed - оператор, автоматически завершающий обсервабле, когда компонент удаляется
