import { Component } from '@angular/core';
import { Post } from '../interface/post';


@Component({
  imports: [],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {
  posts: Post[] = [
    { name: 'Banana', img: 'img/banana.jpg', likes: 5 },
    { name: 'Currant', img: 'img/currant.jpg', likes: 7 },
    { name: 'Kiwi', img: 'img/kiwi.jpg', likes: 8 },
    { name: 'Lemon', img: 'img/lemons.jpg', likes: 3 },
    { name: 'Orange', img: 'img/orange.jpg', likes: 2},
    { name: 'Oranges', img: 'img/oranges.jpg', likes: 1 },
    { name: 'Strawberries', img: 'img/strawberries.png', likes: 4 },
  ];
}
