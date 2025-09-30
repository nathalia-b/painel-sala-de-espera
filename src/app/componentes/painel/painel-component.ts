import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player-component';
import { CommonModule } from '@angular/common';
import { ChamadaComponent } from '../chamada/chamada-component';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, PlayerComponent, ChamadaComponent],
  templateUrl: './painel-component.html',
  styleUrl: './painel-component.scss',
})
export class PainelComponent {
  emChamada: boolean = false;

  // Dados mockados
  chamadaAtual = {
    senha: 'CG-001N',
    nome: 'Julio Hebert',
    guiche: 'Guichê 2',
  };

  //  Ativa o estado de chamada e o envia de volta ao padrão após 8s
  simularNovaChamada(): void {
    this.emChamada = true;

    setTimeout(() => {
      this.emChamada = false;
    }, 8000);
  }
}
