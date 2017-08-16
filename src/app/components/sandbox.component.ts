import { Component } from '@angular/core';

@Component({
    selector: 'app-sandbox',
    template: `
        <h1>{{ name }} is {{ age }} years old</h1>
        <h2>My name is {{ person.firstName }} {{ person.lastName}}</h2>
        <ul>
            <li>{{ 'Hello World' }}</li>
            <li>{{ 1+1 }}</li>
            <li>{{ showAge() }}</li>
        </ul>
    `
})

export class SandboxComponent {
    name = 'Woosuk Chang';
    age = 45;
    person = { firstName: 'Chloe', lastName: 'Chang'};

    constructor() {
        console.log('Constuctor ran...');
        // this.age = 10;

        this.hasBirthday();
    }

    hasBirthday() {
        this.age += 1;
    }

    showAge() {
        return this.age;
    }
}
