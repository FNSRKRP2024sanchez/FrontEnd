import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosProveedorPage } from './productos-proveedor.page';

describe('ProductosProveedorPage', () => {
  let component: ProductosProveedorPage;
  let fixture: ComponentFixture<ProductosProveedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
