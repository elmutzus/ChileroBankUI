import { Routes } from '@angular/router';
import { DepartamentoCreateComponent } from './departamento-create/departamento-create.component';
import { DepartamentoEditComponent} from './departamento-edit/departamento-edit.component';
import { DepartamentoIndexComponent} from './departamento-index/departamento-index.component';
import { CuentaCreateComponent } from './cuenta-create/cuenta-create.component';
import { CuentaIndexComponent } from './cuenta-index/cuenta-index.component';
import { CuentaEditComponent } from './cuenta-edit/cuenta-edit.component';

export const appRoutes: Routes = [
    {
        path: 'cuenta',
        component: CuentaIndexComponent
    },
    {
        path: 'cuenta/create',
        component: CuentaCreateComponent
    },
    {
        path: 'cuenta/edit',
        component: CuentaEditComponent
    }
    {
        path: 'departamento/create',
        component: DepartamentoCreateComponent
    },
    {
        path: 'departamento/edit/:id',
        component: DepartamentoEditComponent
    },
    {
        path: 'departamento',
        component: DepartamentoIndexComponent
    }
];