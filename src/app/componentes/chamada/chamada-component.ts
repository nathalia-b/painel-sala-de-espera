import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chamada',
  imports: [CommonModule],
  templateUrl: './chamada-component.html',
  styleUrl: './chamada-component.scss',
})
export class ChamadaComponent {
  //  Recebe os dados da chamada atual para poder exibi-los na 'chamada em destaque' que substitui o vídeo.
  @Input() dadosChamada: any;
}
