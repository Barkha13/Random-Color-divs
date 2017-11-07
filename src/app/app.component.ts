import { Component } from '@angular/core';
var colors = ['PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum']; 
var random_colors = [];
for (let i = 0; i < colors.length; i++){
    let random_index = Math.floor(Math.random()*colors.length);
    random_colors.push(colors[random_index]);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Retro barcode Generator';
  colors = random_colors;
}
