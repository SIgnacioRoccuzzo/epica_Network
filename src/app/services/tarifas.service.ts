import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Tarifas } from '../interfaces/tarifas.interface';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private httpClient = inject(HttpClient);
  public readonly jsonUrl = '../../assets/json/tarifas-data.json';
  private readonly cacheDuration = 60000; // Duración del caché en milisegundos (ej. 60 segundos)

  // Variables de caché
  private cache: Map<string, { data: any, timestamp: number }> = new Map();

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

  private setCache(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  private getCache(key: string): any | null {
    if (this.isCacheValid(key)) {
      return this.cache.get(key)!.data;
    }
    return null;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // Log de errores
    return Promise.reject(error.message || error);
  }

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

  async getAll(): Promise<Tarifas[] | any> {
    const cacheKey = 'all';
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getById(tarifaId: number): Promise<Tarifas | any> {
    const cacheKey = `byId_${tarifaId}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifa = this.ensureTarifas(data).find(t => t['id'] === tarifaId);
      this.setCache(cacheKey, tarifa);
      return tarifa;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getByGb(tarifaGb: string): Promise<Tarifas[] | any> {
    const cacheKey = `byGb_${tarifaGb}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data).filter(t => t.gb === tarifaGb);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getBySpeed(speed: string): Promise<Tarifas[] | any> {
    const cacheKey = `bySpeed_${speed}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data).filter(t => t.speed === speed);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getByType(tarifaType: string): Promise<Tarifas[] | any> {
    const cacheKey = `byType_${tarifaType}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data).filter(t => t.type === tarifaType);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getByName(tarifaName: string): Promise<Tarifas[] | any> {
    const cacheKey = `byName_${tarifaName}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data).filter(t => t.name === tarifaName);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getByTypeAndData(type: string, data: string): Promise<Tarifas[] | any> {
    const cacheKey = `byTypeAndData_${type}_${data}`;
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return Promise.resolve(cachedData);
    }
    try {
      const data_1 = await firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.jsonUrl));
      const tarifas = this.ensureTarifas(data_1).filter(t => t.type === type && t['someDataField'] === data);
      this.setCache(cacheKey, tarifas);
      return tarifas;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
