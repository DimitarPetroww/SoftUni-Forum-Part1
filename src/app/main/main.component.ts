import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  themeList: ITheme[]

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe(themes => this.themeList = themes)
  }
}
