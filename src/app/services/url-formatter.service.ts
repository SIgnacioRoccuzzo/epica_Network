import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UrlFormatterService {
  toUrlFriendly(text: string): string {
    if (!text) {
      return '';
    }

    const tildeMap = new Map([
      ['á', 'a'],
      ['é', 'e'],
      ['í', 'i'],
      ['ó', 'o'],
      ['ú', 'u'],
      ['ñ', 'n'],
      ['Á', 'A'],
      ['É', 'E'],
      ['Í', 'I'],
      ['Ó', 'O'],
      ['Ú', 'U'],
      ['Ñ', 'N'],
    ]);

    const withoutTildes = text
      .split('')
      .map(char => tildeMap.get(char) || char) // Uso seguro del mapa
      .join('');

    const withHyphens = withoutTildes.toLowerCase().replace(/\s+/g, '-');
    const sanitized = withHyphens.replace(/[^a-z0-9-]/g, '');
    const cleaned = sanitized.replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '');

    return cleaned;
  }

  constructor() { }
}
