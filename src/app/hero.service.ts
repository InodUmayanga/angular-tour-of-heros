import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heros';

import { MessagesService } from './messages.service';



@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(
    private messageService: MessagesService
  ) {}

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
