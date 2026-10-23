import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from '@angular/router';
import { NoSpacesDirective } from './darictives/no-spaces.directive';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe, NoSpacesDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  username: string = '';
  email: string = '';
  password: string = '';
  street: string = '';
  city: string = '';
  zipcode: string = '';
}
