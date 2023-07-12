import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'josh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  creedItems = [
    {text:'To be so strong that nothing can disturb your peace of mind', icon:'self_improvement'},
    {text:'To talk health, happiness and prosperity to every person you meet', icon:'looks'},
    {text:'To make all your friends feel that there is something in them', icon:'diversity_3'},
    {text:'To look at the sunny side of everything and make your optimism come true', icon:'sunny'},
    {text:'To think only of the best, to work only for the best, and to expect only the best', icon:'star'},
    {text:'To be just as enthusiastic about the success of others as you are about your own', icon:'sentiment_very_satisfied'},
    {text:'To forget the mistakes of the past and press on to the greater achievements of the future', icon:'done_all'},
    {text:'To wear a cheerful countenance at all times and give every living creature you meet a smile', icon:'cruelty_free'},
    {text:'To give so much time to the improvement of yourself that you have no time to criticize others', icon:'schedule'},
    {text:'To be too large for worry, too noble for anger, too strong for fear, and too happy to permit the presence of trouble', icon:'landscape'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
