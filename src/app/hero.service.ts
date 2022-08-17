import { Injectable } from '@angular/core';
import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heros';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor() {}

  getHeros(): Hero[] {
    return HEROES;
  }
}
