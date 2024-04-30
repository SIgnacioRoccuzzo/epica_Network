import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Tarifas } from '../interfaces/tarifas.interface';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private httpClient = inject(HttpClient);
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/tarifas'
  }


  getAll(): Promise<Tarifas[] | any> {
    return firstValueFrom(this.httpClient.get<Tarifas[] | any>(this.baseUrl))
  }
  getById(tarifasId: number): Promise<Tarifas | any> {
    return firstValueFrom(
      this.httpClient.get<Tarifas | any>(`${this.baseUrl}/${tarifasId}`)
    );
  }
  getByData(tarifasData: string): Promise<Tarifas[] | any> {
    return firstValueFrom(
      this.httpClient.get<Tarifas | any>(`${this.baseUrl}/data/${tarifasData}`)
    );
  }
  getBytype(tarifastype: string): Promise<Tarifas[] | any> {
    return firstValueFrom(
      this.httpClient.get<Tarifas | any>(`${this.baseUrl}/type/${tarifastype}`)
    );
  }
  getByName(tarifasName: string): Promise<Tarifas[] | any> {
    return firstValueFrom(
      this.httpClient.get<Tarifas | any>(`${this.baseUrl}/name/${tarifasName}`)
    );
  }

  getByTypeandData(type: string, data: string): Promise<Tarifas[] | any> {
    return firstValueFrom(
      this.httpClient.get<Tarifas | any>(`${this.baseUrl}/${type}/${data}`)
    );
  }


}
