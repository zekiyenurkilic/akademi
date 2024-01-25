import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { AdminComponent } from './feature/pages/admin/admin.component';
import { UnauthorizedComponent } from './feature/pages/unauthorized/unauthorized.component';
import { hasRoleGuard } from './has-role.guard';
import { Role } from './role'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: AdminComponent },//canActivate: [hasRoleGuard], data: { roles: [Role.ADMIN] } 
        ]
    },
    { path: 'unauthorized', component: UnauthorizedComponent },

];
