import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Catalog } from './components/catalog/catalog';
import { CartForm } from './components/cart-form/cart-form';
import { CheckBoxForm } from './components/check-box-form/check-box-form';
import { MyElementRef } from './components/element-ref/element-ref';

export const routes: Routes = [
    { path: '', component: MyElementRef },
    { path: 'catalog', component: Catalog },
    { path: 'cart', component: CartForm },
];
