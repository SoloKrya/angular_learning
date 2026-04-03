import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-item-cart',
    imports: [],
    templateUrl: './item-cart.html',
    styleUrl: './item-cart.scss',
})
export class ItemCart {
    @Input() title: string = '';
    @Input() price: number = 0;
    @Input() category: string = '';
    @Output() itemAdded = new EventEmitter<string>();

    addItemToCart() {
        this.itemAdded.emit(this.title);
    }
}
