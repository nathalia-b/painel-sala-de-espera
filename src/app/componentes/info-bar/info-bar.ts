import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-bar',
  imports: [CommonModule],
  templateUrl: './info-bar.html',
  styleUrl: './info-bar.scss',
})
export class InfoBar {
  dataAtual: Date = new Date();
  protected readonly title = 'CLÍNICA VALIDAÇÕES - JFS (MATRIZ)';
}
