
import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

// const fadeIn = [
//   query(':leave', style({ position: 'absolute', left: 0, right: 0, opacity: 1 }), { optional: true }),
//   query(':enter', style({ position: 'absolute', left: 0, right: 0, opacity: 0 }), { optional: true }),
//   query(':leave', animate('1s', style({ opacity: 0 })), { optional: true }),
//   query(':enter', animate('1s', style({ opacity: 1 })), { optional: true })
// ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // trigger('routerAnimations', [
    //   transition('* => *', fadeIn)
    // ])
  ]
})

export class AppComponent {
  title = 'MeditationApp';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
