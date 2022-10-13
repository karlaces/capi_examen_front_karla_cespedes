import { Component, OnInit } from '@angular/core';
import { TablaUsuariosService } from './tabla-usuarios.service'

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  config: any;
  count : number =0;
  page = 1;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  users :any =[];

  constructor(
    private TablaUsuariosService: TablaUsuariosService
  
  ){ }

  onTableDataChange(event:any){
    this.page = event;
    this.getUsers();
  }  

  onTableSizeChange(event:any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }  
  
    pageChanged(event:any){
      this.config.currentPage = event;
    }
  
   
 
  ngOnInit(): void {

    this.getUsers();
    
  }

  getUsers(){
    this.TablaUsuariosService.getUsers().subscribe(
      (response:any) => {
        this.users = response.data;
        this.count = response.count;

       
      }
    );
  }

}
