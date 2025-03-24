import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosCategoriaPage } from './productos-categoria.page';

describe('ProductosCategoriaPage', () => {
  let component: ProductosCategoriaPage;
  let fixture: ComponentFixture<ProductosCategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
