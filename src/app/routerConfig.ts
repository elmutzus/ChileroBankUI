import { Routes } from '@angular/router';
import { DepartamentoCreateComponent } from './departamento-create/departamento-create.component';
import { DepartamentoEditComponent} from './departamento-edit/departamento-edit.component';
import { DepartamentoIndexComponent} from './departamento-index/departamento-index.component';

export const appRoutes: Routes = [
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