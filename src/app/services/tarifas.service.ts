import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Tarifas } from '../interfaces/tarifas.interface';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private httpClient = inject(HttpClient);
  public readonly baseUrl = 'https://epica-network.onrender.com/api/tarifas';
  private readonly cacheDuration = 60000; // Duración del caché en milisegundos (ej. 60 segundos)

  // Variables de caché
  private cache: Map<string, { data: any, timestamp: number }> = new Map();

  /**
   * Verifica si el caché para una clave específica es válido.
   * @param {string} key - La clave del caché a verificar.
   * @returns {boolean} - Verdadero si el caché es válido, falso en caso contrario.
   */
  private isCacheValid(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) {
      return false;
    }
    const isValid = (Date.now() - cached.timestamp) < this.cacheDuration;
    if (!isValid) {
      this.cache.delete(key);
    }
    return isValid;
  }

  /**
   * Establece el caché para una clave específica.
   * @param {string} key - La clave del caché.
   * @param {any} data - Los datos a almacenar en el caché.
   */
  private setCache(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  /**
   * Obtiene el caché para una clave específica si es válido.
   * @param {string} key - La clave del caché.
   * @returns {any | null} - Los datos en caché si son válidos, de lo contrario null.
   */
  private getCache(key: string): any | null {
    if (this.isCacheValid(key)) {
      return this.cache.get(key)!.data;
    }
    return null;
  }

  /**
   * Maneja errores de las solicitudes HTTP.
   * @param {any} error - El error ocurrido.
   * @returns {Promise<any>} - Una promesa rechazada con el mensaje de error.
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // Log de errores
    return Promise.reject(error.message || error);
  }

  /**
   * Asegura que los datos de tarifa cumplen con la interfaz Tarifas.
   * @param {any} data - Los datos de tarifa a asegurar.
   * @returns {Tarifas[]} - Los datos de tarifa asegurados.
   */
  private ensureTarifas(data: any): Tarifas[] {
    return data.map((item: any) => ({
      type: item.type,
      name: item.name,
      gb: item.gb ?? undefined,
      minutes: item.minutes ?? undefined,
      price: item.price,
      speed: item.speed ?? undefined,
      lines: item.lines ?? undefined,
      channels: item.channels ?? undefined,
      extras: item.extras ?? undefined
    }));
  }

  /**
   * Obtiene todas las tarifas desde el servidor o del caché si es válido.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getAll(): Promise<Tarifas[] | any> {
    const cacheKey = 'all';
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.baseUrl));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene una tarifa por su ID desde el servidor o del caché si es válido.
   * @param {number} tarifaId - El ID de la tarifa.
   * @returns {Promise<Tarifas | any>} Una promesa que resuelve con la tarifa.
   */
  async getById(tarifaId: number): Promise<Tarifas | any> {
    const cacheKey = `byId_${tarifaId}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas | any>(`${this.baseUrl}/${tarifaId}`));
      const tarifa = this.ensureTarifas([data])[0];
      this.setCache(cacheKey, tarifa);
      return tarifa;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene tarifas por cantidad de GB desde el servidor o del caché si es válido.
   * @param {string} tarifaGb - La cantidad de GB de la tarifa.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getByGb(tarifaGb: string): Promise<Tarifas[] | any> {
    const cacheKey = `byGb_${tarifaGb}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(`${this.baseUrl}/gb/${tarifaGb}`));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene tarifas por velocidad desde el servidor o del caché si es válido.
   * @param {string} speed - La velocidad de la tarifa.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getBySpeed(speed: string): Promise<Tarifas[] | any> {
    const cacheKey = `bySpeed_${speed}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(`${this.baseUrl}/speed/${speed}`));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene tarifas por tipo desde el servidor o del caché si es válido.
   * @param {string} tarifaType - El tipo de la tarifa.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getByType(tarifaType: string): Promise<Tarifas[] | any> {
    const cacheKey = `byType_${tarifaType}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(`${this.baseUrl}/type/${tarifaType}`));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene tarifas por nombre desde el servidor o del caché si es válido.
   * @param {string} tarifaName - El nombre de la tarifa.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getByName(tarifaName: string): Promise<Tarifas[] | any> {
    const cacheKey = `byName_${tarifaName}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(`${this.baseUrl}/name/${tarifaName}`));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene tarifas por tipo y dato específico desde el servidor o del caché si es válido.
   * @param {string} type - El tipo de la tarifa.
   * @param {string} data - El dato específico de la tarifa.
   * @returns {Promise<Tarifas[] | any>} Una promesa que resuelve con la lista de tarifas.
   */
  async getByTypeAndData(type: string, data: string): Promise<Tarifas[] | any> {
    const cacheKey = `byTypeAndData_${type}_${data}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data_1 = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(`${this.baseUrl}/${type}/${data}`));
      const tarifas = this.ensureTarifas(data_1);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
