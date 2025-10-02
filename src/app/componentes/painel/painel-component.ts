import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player-component';
import { CommonModule } from '@angular/common';
import { ChamadaComponent } from '../chamada/chamada-component';
import { Ficha } from '../ficha/ficha';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, PlayerComponent, ChamadaComponent, Ficha],
  templateUrl: './painel-component.html',
  styleUrl: './painel-component.scss',
})
export class PainelComponent {
  emChamada: boolean = false;
  chamadaAtual: any = null;
  historico: any[] = [];
  mockPacientes = ['Julio Hebert', 'Raphaela Lima', 'Fábio Luíz', 'Maria João', 'Jane Doe'];

  simularNovaChamada(): void {
    this.emChamada = true;

    if (this.chamadaAtual) {
      this.historico.unshift(this.chamadaAtual);
    }

    this.chamadaAtual = {
      senha: 'CG-' + Math.floor(Math.random() * 1000) + 'N',
      nome: this.mockPacientes[Math.floor(Math.random() * 5)].toUpperCase(),
      guiche: `Guichê ${Math.floor(Math.random() * 5) + 1}`,
      hora: new Date(),
    };

    this.emChamada = true;

    setTimeout(() => this.finalizarChamada(), 2000);
  }

  finalizarChamada() {
    this.emChamada = false;
  }
}
