import { Component, computed, effect, input, Input, output, signal } from '@angular/core';

@Component({
    selector: 'app-signals',
    imports: [],
    templateUrl: './signals.html',
    styleUrl: './signals.scss',
})
export class Signals {
    // @Input() name: string = '';
    name = input.required<string>(); //создание сигнала на инпуте, занчение становится сигналом и можно хъерачить эфффект ему, вместо работы в нгОнЧанджес
    buttonClicked = output<number>(); //создание аутпута, новая запись чисто, создает все тот же эмиттер, к сигналам не привязан

    count = signal(0);
    firstname = signal('Svyat');
    lastname = signal('Kukushkin');
    logCount = effect(() => {
        console.log(this.count());
    });
    fullname = computed(() => {
        return this.firstname() + ' ' + this.lastname();
    });

    constructor() {
        effect(() => {
            console.log(this.fullname());
        });
    }

    ngOnInit() {
        this.firstname.set('Zhuzha');
    }

    increment() {
        this.count.update((value) => value + 1);
        this.buttonClicked.emit(this.count());
    }
}

// signal() хранит состояние, не переменная, а функция, присваивание через метод set()
// computed() вычисляет новое значение, это тоже сигнал
// effect() реагирует на изменение значения сигнала и вызывается каждый раз, когда значение меняется
// метод сигнала set() устанавливает новое значение
// метод сигнала update() преобразует текущее значение

// Пример создания модела - двусторонней привязки:
// Parent
// name = 'John';
// <app-child [(value)]="name">
// </app-child>

// Child
// value = model('');

// Child меняет: this.value.set('Mike');
// Parent автоматически получает: name = Mike
