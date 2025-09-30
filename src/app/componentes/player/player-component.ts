import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player-component.html',
  styleUrl: './player-component.scss',
})
export class PlayerComponent {
  private readonly videoId = 'WdxYgjjPSjg';
  urlSegura: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url =
      `https://www.youtube.com/embed/${this.videoId}` +
      `?autoplay=1` +
      `&mute=1` +
      `&loop=1` +
      `&playlist=${this.videoId}`;

    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
