import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chamada',
  imports: [CommonModule],
  templateUrl: './chamada-component.html',
  styleUrl: './chamada-component.scss',
})
export class ChamadaComponent {
  @Input() dadosChamada: any;
}
