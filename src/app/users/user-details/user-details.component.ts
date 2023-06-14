import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuarios } from 'src/app/usuarios';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.user = usuarios.find(x => x.id === id);
  }

}
