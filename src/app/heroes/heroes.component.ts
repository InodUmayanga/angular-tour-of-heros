import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../hero/mock-heros';

import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heros => {
      this.heroes = heros;
    });
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
}
