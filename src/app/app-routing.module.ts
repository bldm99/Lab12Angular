import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotfoundComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
