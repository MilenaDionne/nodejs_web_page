import {Component, Input, OnInit} from '@angular/core';
import {AddressEntry} from '../address-entry';

@Component({
  selector: 'app-address-list-element',
  templateUrl: './address-list-element.component.html',
  styleUrls: ['./address-list-element.component.css']
})
export class AddressListElementComponent implements OnInit {
  @Input() address: AddressEntry;
  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  getFullName(): string {
    return `${this.address.firstName}, ${this.address.lastName}`;
  }

}
