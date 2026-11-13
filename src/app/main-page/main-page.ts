import { Component } from '@angular/core';
import { Post } from '../interface/post';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {
  posts: Post[] = [
    { name: 'Banana', img: 'img/banana.jpg', likes: 5, isLiked: false },
    { name: 'Currant', img: 'img/currant.jpg', likes: 7, isLiked: false },
    { name: 'Kiwi', img: 'img/kiwi.jpg', likes: 8, isLiked: false },
    { name: 'Lemon', img: 'img/lemons.jpg', likes: 3, isLiked: false },
    { name: 'Orange', img: 'img/orange.jpg', likes: 2, isLiked: false},
    { name: 'Oranges', img: 'img/oranges.jpg', likes: 1, isLiked: false },
    { name: 'Strawberries', img: 'img/strawberries.png', likes: 4, isLiked: false },
  ];

  toggleLike(post: Post){
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }

}
