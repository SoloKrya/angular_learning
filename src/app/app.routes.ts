import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { CartForm } from './components/cart-form/cart-form';
import { CheckBoxForm } from './components/check-box-form/check-box-form';

export const routes: Routes = [
    { path: '', component: CheckBoxForm },
    { path: 'catalog', component: Catalog },
    { path: 'cart', component: CartForm },
];
