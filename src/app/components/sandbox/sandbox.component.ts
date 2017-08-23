import { Component } from '@angular/core';

@Component({
    selector: 'app-sandbox',
    template:`
        {{ people }}
        <ul>
            <li *ngFor="let person of people">
                {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people, let i = index">
                {{i + 1}} {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people2, let i = index">
                {{i + 1}} {{person.firstName}} {{person.lastName}}
            </li>
        </ul>        
    `,
    
})

export class SandboxComponent {
    people = ['Woosuk', 'Eunkyung', 'Sunjin', 'Chloe'];

    people2 = [
        {
            firstName: 'Woosuk',
            lastName: 'Chang'
        },
        {
            firstName: 'Enukyung',
            lastName: 'Park'
        },        
        {
            firstName: 'Sunjin',
            lastName: 'Chang'
        },
        {
            firstName: 'Chloe',
            lastName: 'Chang'
        }    
    ];

    constructor() {
        this.people[2] = "Carol"
    }
}
