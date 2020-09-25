import { Component, OnInit } from '@angular/core';
import {AddressEntry} from './address-entry';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: AddressEntry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
