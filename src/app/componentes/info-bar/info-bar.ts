import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app';

@Component({
  selector: 'app-info-bar',
  imports: [CommonModule],
  templateUrl: './info-bar.html',
  styleUrl: './info-bar.scss',
})
export class InfoBar {
  dataAtual: Date = new Date();
  protected readonly title = 'Clinica validações - JFS (MATRIZ)';
}
