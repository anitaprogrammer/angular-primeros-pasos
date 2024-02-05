import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'luffy';
  public age: number = 19;

  get CapitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'roronoa zoro';
  }

  changeAge():void{
    this.age = 20;
  }

  resetForm():void{
    this.name = 'luffy';
    this.age = 19;
  }

}
