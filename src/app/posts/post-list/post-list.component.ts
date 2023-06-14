import { Component  , OnInit} from '@angular/core';

import { datos } from 'src/app/datos';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  datos: any[] = datos; 

  constructor() { 
    console.log(datos)
  }

  

  ngOnInit(): void {
  }

}
