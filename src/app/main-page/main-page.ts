import { Component } from '@angular/core';
import { Post } from '../interface/my-interface';


@Component({
  imports: [],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {
  posts: Post[] = [
    { name: 'Banana', img: 'img/banana.jpg', likes: 5 },
    { name: 'Currant', img: 'img/currant.jpg', likes: 5 },
    { name: 'Kiwi', img: 'img/kiwi.jpg', likes: 5 },
    { name: 'Lemon', img: 'img/lemons.jpg', likes: 5 },
    { name: 'Orange', img: 'img/orange.jpg', likes: 5 },
    { name: 'Oranges', img: 'img/oranges.jpg', likes: 5 },
    { name: 'Strawberries', img: 'img/strawberries.jpg', likes: 5 },
  ];
}
