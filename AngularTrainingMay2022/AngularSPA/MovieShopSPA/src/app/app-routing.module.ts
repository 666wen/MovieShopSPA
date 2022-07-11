import { ReviewsComponent } from './Public/reviews/reviews.component';
//import { GenreComponent } from './Public/genre/genre.component';
import { HOMEComponent } from './Public/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Core/Guards/auth-guard.guard';
import { AdminGuardGuard } from './Core/Guards/admin-guard.guard';

// lazy loading or not
const routes: Routes = [
  { path: '', component: HOMEComponent },
  { path: 'Movies', loadChildren: () => import("./Public/movies.module").then(mod => mod.MoviesModule) },
  { path: 'Admin', loadChildren: () => import("./Admin/admin.module").then(mod => mod.AdminModule), canActivate: [AdminGuardGuard] },
  { path: 'Account', loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule) },
  { path: 'User', loadChildren: () => import("./User/user.module").then(mod => mod.UserModule) , canActivate: [AuthGuardGuard]},
  { path: 'Genres', loadChildren:() => import("./Public/genre/genre.module").then(mod => mod.GenreModule)},
  { path: 'Reviews', component: ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
