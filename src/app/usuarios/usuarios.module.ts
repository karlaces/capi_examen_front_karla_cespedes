import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from '../tabla-usuarios/tabla-usuarios.component';
import { NgxPaginationModule } from 'ngx-pagination'; 



@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class UsuariosModule { }
