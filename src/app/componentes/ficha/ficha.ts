import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Dados {
  senha: string;
  nome: string;
  especialidade: string;
  hora: Date;
  guiche: string;
}

@Component({
  selector: 'app-ficha',
  imports: [CommonModule],
  templateUrl: './ficha.html',
  styleUrl: './ficha.scss',
})
export class Ficha {
  //  Recebe se a chamada é a atual
  @Input() chamadaAtual: boolean = false;

  //  Recebe os dados da chamada feita
  @Input() dadosSenha: Dados | undefined;

  get nomeFormatado(): string {
    if (!this.dadosSenha?.nome) return '';

    //  Separa nome e sobrenome
    const nomeCompleto: string[] = this.dadosSenha.nome.trim().split(' ');
    const nome = nomeCompleto[0];
    const sobrenome = nomeCompleto[1];

    if (nome && !sobrenome) return nome; // Caso só haja um nome, retorna ele completo.

    //  Retorna a primeira letra do primeiro nome e o sobrenome
    return `${nome[0].toUpperCase()}. ${sobrenome}`;
  }
}
