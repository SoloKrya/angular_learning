import { Component } from '@angular/core';
import { ItemCart } from '../item-cart/item-cart';

interface item {
    title: string;
    price: number;
}

@Component({
    selector: 'app-catalog',
    imports: [ItemCart],
    templateUrl: './catalog.html',
    styleUrl: './catalog.scss',
})
export class Catalog {
    items: item[] = [
        {
            title: 'hfhfh',
            price: 10,
        },
        {
            title: 'dfs',
            price: 100,
        },
        {
            title: 'zalup',
            price: 14,
        },
    ];

    parentItemAdded(title: string) {
        console.log(title);
    }
}
