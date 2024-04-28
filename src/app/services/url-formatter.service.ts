import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlFormatterService {
  toUrlFriendly(text: string): string {
    // Declaración del mapa con tipos explícitos
    const tildeMap: { [key: string]: string } = {
      'á': 'a',
      'é': 'e',
      'í': 'i',
      'ó': 'o',
      'ú': 'u',
      'ñ': 'n',
      'Á': 'A',
      'É': 'E',
      'Í': 'I',
      'Ó': 'O',
      'Ú': 'U',
      'Ñ': 'N',
    };

    // Reemplazar caracteres con tildes por sus equivalentes sin tildes
    const withoutTildes = text
      .split('')
      .map(char => tildeMap[char] || char) // Reemplaza usando el mapa o conserva el carácter si no está en el mapa
      .join('');

    // Convertir a minúsculas
    const lowerCaseText = withoutTildes.toLowerCase();

    // Reemplazar espacios por guiones
    const withHyphens = lowerCaseText.replace(/\s+/g, '-');

    // Eliminar caracteres no alfanuméricos excepto guiones
    const sanitized = withHyphens.replace(/[^a-z0-9-]/g, '');

    return sanitized;
  }

  constructor() { }
}
