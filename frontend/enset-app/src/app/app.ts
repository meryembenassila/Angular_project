import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html', // la partie view
  styleUrl: './app.css',
  imports: [RouterLink,RouterOutlet],
  standalone : true //webcomponet qui n'appartient a aucun module
})

//la partie module de MV
export class App {
 email : string ="med@gmail.com";
}

