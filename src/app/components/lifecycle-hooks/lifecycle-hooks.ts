import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChange,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    imports: [],
    templateUrl: './lifecycle-hooks.html',
    styleUrl: './lifecycle-hooks.scss',
    // для оптимизации работы с изменениями
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleHooks
    implements OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked
{
    @Input() titleChild = '';

    // срабатывает в момент создания
    constructor() {
        ispolnitsyaPervim: true;
    }

    // срабатывает КАЖДЫЙ РАЗ, когда меняются инпуты (входные свойства)
    ngOnChanges(changes: SimpleChanges) {
        console.log(this.titleChild);
        console.log(changes);
    }

    // срабатывает один раз, когда инициируется компонент
    ngOnInit() {}

    // вызывается каждый цикл обнаружения изменений (очень часто, ОЧЕНЬ)
    ngDoCheck() {}

    // вызывается один раз после вставки контента в ng-content
    ngAfterContentInit() {}

    // вызывается каждый раз после проверки содержимного ng-content
    ngAfterContentChecked() {}

    // вызывается один раз, когда все дома (все элементы в ДОМе доступны)
    ngAfterViewInit() {}

    // вызывается каждый раз после обнаружения изменений в шаблоне
    ngAfterViewChecked() {}

    // вызывается единожды перед удалением компонента (отпишись от подписок)
    ngOnDestroy() {}
}
