import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { ThemeService } from '../theme.service';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  themeList: ITheme[]

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemes()
    .pipe<ITheme[]>(
      map(x=> {
        return x.sort((a: ITheme, b: ITheme) => b.subscribers.length - a.subscribers.length)
      }))
    .subscribe(themes => this.themeList = themes)
  }
}
