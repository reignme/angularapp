import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'app-sandbox',
    template: `
        <h1>Hello</h1>
    `
})

export class SandboxComponent {
    customer:Customer;
    customers:Customer[];

    constructor() {
        this.customer = {
            id:1,
            name:'Woosuk Chang',
            email:'woosuk.chang@gmail.com'
        }

        this.customers = [
            {
                id:1,
                name:'Woosuk Chang',
                email:'woosuk.chang@gmail.com'
            },
            {
                id:2,
                name:'Enukyung Chang',
                email:'woosuk.chang@gmail.com'
            },
            {
                id:3,
                name:'Sunjin Chang',
                email:'woosuk.chang@gmail.com'
            }            
        ];
    }
}
