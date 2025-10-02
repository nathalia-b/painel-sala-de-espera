import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Dados {
  senha: string;
  nome: string;
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
  @Input() chamadaAtual: boolean = false;
  @Input() dadosSenha: Dados | undefined;
}
