import { Component  , Input , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datos } from 'src/app/datos';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  dato: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dato = datos.find(x => x.id === id);
  }

}
