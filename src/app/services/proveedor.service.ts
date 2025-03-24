import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private ApiUrl = 'http://localhost:3001'; 

  constructor(private http: HttpClient) {}

  
  crearProveedor(formData: FormData): Observable<any> {
    return this.http.post(`${this.ApiUrl}/api/proveedores`, formData);
  }



  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.ApiUrl}/api/proveedores/login`, { email, password });
  }

  
  getProfile(): any {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(profile) : null;  
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }


  getProveedorById(id: string): Observable<any> {
    return this.http.get(`${this.ApiUrl}/api/proveedores/${id}`);
  }


  updateProveedor(id: string, data: any): Observable<any> {
    return this.http.put(`${this.ApiUrl}/api/proveedores/${id}`, data);
  }

  
  saveProfile(profile: any): void {
    localStorage.setItem('profile', JSON.stringify(profile));  
  }
}
