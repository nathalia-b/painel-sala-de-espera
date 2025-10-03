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
  templateUrl: './ficha-component.html',
  styleUrl: './ficha-component.scss',
})
export class FichaComponent {
  //  Recebe se a chamada é a atual
  @Input() chamadaAtual: boolean = false;

  //  Recebe os dados da chamada feita
  @Input() dadosSenha: Dados | undefined;

  /* Formata uma string (nome ou especialidade) de forma abreviada.
    Se for só uma palavra, retorna ela inteira. 
    Se tiver mais de uma, retorna a inicial da primeira + o último termo.
    Clínico Geral -> C. Geral; Maria da Silva Santos -> M. Santos */
  formatarString(string?: string): string {
    if (!string) return '';

    const stringInteira: string[] = string.trim().split(' ');
    const qtdPalavras = stringInteira.length;

    if (qtdPalavras === 1) return stringInteira[0];

    const primeiraPalavra = stringInteira[0];
    const ultimaPalavra = stringInteira[qtdPalavras - 1];

    return `${primeiraPalavra[0].toUpperCase()}. ${ultimaPalavra}`;
  }
}
