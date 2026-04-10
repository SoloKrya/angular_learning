import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-element-ref',
    imports: [],
    templateUrl: './element-ref.html',
    styleUrl: './element-ref.scss',
})
export class MyElementRef {
    el = inject(ElementRef);
    renderer = inject(Renderer2);
    @ViewChild('surprize') helloBoxRef!: ElementRef;

    ngOnInit() {
        // this.el.nativeElement.style.color = 'red';
        // это небезопасно, поэтому делай через renderer:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'pink');
        console.log(this.el.nativeElement);
    }

    ngAfterViewInit() {
        const helloEl = this.helloBoxRef.nativeElement;
        this.renderer.setStyle(helloEl, 'font-size', '100px');

        const div = this.renderer.createElement('div');
        this.renderer.setProperty(div, 'innerText', 'какой-то текст');
        // this.renderer.appendChild(this.helloBoxRef.nativeElement, div);
        this.renderer.insertBefore(this.el.nativeElement, div, this.helloBoxRef.nativeElement);

        const parent = this.renderer.parentNode(helloEl);
        //возвращает элемент, являющийся родительским для аргумента
        const next = this.renderer.nextSibling(helloEl);
        //возвращает элемент, идущий после аргумента в рамках одного родителя
        console.log(parent);
        console.log(next);

        let warning = 1;
        if (warning === 1) {
            this.renderer.addClass(helloEl, 'warning');
        } else {
            this.renderer.removeClass(helloEl, 'warning');
        }
    }
}
//ElementRef - обертка над реальным DOM-элементом, ссылка на элемент, чтобы получить сам элемент юзаем .nativeElement
// ViewChild позволяет достать элемент из HTML в TypeScript
//atribut - параметр элемента, задающися в HTML (id, class, href, src, disabled)
//property - то, что есть у DOM-объедка в ЖабаСкрипт
// <input value="Hello" />
// Attribute value="Hello"
// Property  input.value
// Методы renderer:
// appendChild - добавить в конец контейнера, переместить существующий
// insertBefore - добавить перед другим дочерним элементом контейнера
// removeChild - удалить элемент контейнера
