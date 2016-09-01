import {Component, OnInit} from '@angular/core';
import {Grid} from './grid';
import {Column} from './column';

@Component({
    selector: 'my-grid',
    directives: [Grid],
    template: `<h3>Hello World! Here is a grid!</h3>
    <grid name="person grid" [rows]="people" [columns]="columns"></grid>`
})

export class GridDemo implements OnInit {

    people: Array<Person>;
    columns: Array<Column>;

    constructor() {


    }

    getPeople(): Array<Person> {
        return [
            {firstName:'Joe',lastName:'Jackson',age:20},
            {firstName:'Peter',lastName:'Smith',age:30},
            {firstName:'Jane',lastName:'Doe',age:50},
            {firstName:'Tim',lastName:'Smith',age:80}
        ];
    }

    getColumns(): Array<Column> {
        return [
            new Column('firstName','First Name'),
            new Column('lastName','Last Name'),
            new Column('age','Age')
        ];
    }

    ngOnInit () {
        this.people = this.getPeople();
        this.columns = this.getColumns();
    }
}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
}