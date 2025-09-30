import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player-component.html',
  styleUrl: './player-component.scss',
})
export class PlayerComponent {
  urlSegura: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/WdxYgjjPSjg?si=BwBlusq2xbmWHi_s';
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
