// src/app/services/tarifas.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TarifasService } from './tarifas.service';
import { Tarifas } from '../interfaces/tarifas.interface';

describe('TarifasService', () => {
    let service: TarifasService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TarifasService]
        });
        service = TestBed.inject(TarifasService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should fetch all tarifas and cache the result', async () => {
        const mockTarifas: Tarifas[] = [
            { type: 'Móvil', name: 'Plan Oro', gb: '32GB', minutes: 'ilimitadas', price: 8.95 }
        ];

        service.getAll().then(tarifas => {
            expect(tarifas).toEqual(mockTarifas);
        });

        const req = httpMock.expectOne(service.baseUrl);
        expect(req.request.method).toBe('GET');
        req.flush(mockTarifas);

        // Check if the data is cached
        service.getAll().then(tarifas => {
            expect(tarifas).toEqual(mockTarifas);
        });
    });

    it('should handle errors correctly', async () => {
        const mockError = new ErrorEvent('Network error', {
            message: 'Unable to connect to the server'
        });

        service.getAll().catch(error => {
            expect(error).toBe('Unable to connect to the server');
        });

        const req = httpMock.expectOne(service.baseUrl);
        req.error(mockError);
    });
});
