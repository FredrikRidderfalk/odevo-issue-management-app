import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  searchPlaceholder = "Search by name, address, or Brf..."

  constructor() { }

  ngOnInit(): void {
  }

}
