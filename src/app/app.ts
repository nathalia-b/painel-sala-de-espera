import { Component, signal } from '@angular/core';
import { PainelComponent } from './componentes/painel/painel-component';
import { InfoBar } from './componentes/info-bar/info-bar';

@Component({
  selector: 'app-root',
  imports: [PainelComponent, InfoBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Clínica validações - JFS (MATRIZ)');
}
