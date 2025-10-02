import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player-component';
import { CommonModule } from '@angular/common';
import { ChamadaComponent } from '../chamada/chamada-component';
import { FichaComponent } from '../ficha/ficha-component';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, PlayerComponent, ChamadaComponent, FichaComponent],
  templateUrl: './painel-component.html',
  styleUrl: './painel-component.scss',
})
export class PainelComponent {
  emChamada: boolean = false; //  Representação do 'Estado em Chamada'; É iniciado como false.
  chamadaAtual: any = null; // Dados da chamada em andamento.
  historico: any[] = []; // Armazena o histórico de chamadas anteriores.
  // Nomes de pacientes simulados
  mockPacientes = [
    'Julio Hebert',
    'Raphaela Lima',
    'Fábio Henrique',
    'Maria Luíza',
    'Fátima Fernandes',
  ];
  mockEspecialidades = ['CG', 'OT']; // Siglas de especialidades simuladas

  //  Método para retornar um elemento aleatório de um array
  private randomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  //  Método que controla o fluxo das chamadas e histórico
  simularNovaChamada(): void {
    // Adiciona a chamada atual ao início do histórico (caso exista)
    if (this.chamadaAtual) {
      this.historico.unshift(this.chamadaAtual);
    }

    // Geração de valores aleatórios para simular a nova chamada
    const rand = Math.floor(Math.random() * 5);
    const randEspecialidade = this.randomItem(this.mockEspecialidades);

    // Criação do objeto de chamada atual
    this.chamadaAtual = {
      senha:
        randEspecialidade +
        '-' +
        Math.floor(Math.random() * 1000) +
        this.randomItem(this.mockEspecialidades).slice(1),
      especialidade: randEspecialidade == 'CG' ? 'CLÍNICO GERAL' : 'ORTOPEDISTA',
      nome: this.randomItem(this.mockPacientes).toUpperCase(),
      guiche: 'Guichê ' + (rand === 0 ? rand + 1 : rand),
      hora: new Date(),
    };
    // Ativa o estado 'Em chamada'
    this.emChamada = true;

    // Define um timeout para finalizar a chamada em destaque após 15 segundos
    setTimeout(() => this.finalizarChamada(), 15000);
  }

  finalizarChamada() {
    this.emChamada = false;
  }
}
