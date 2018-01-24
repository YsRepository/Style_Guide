import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import {GeneralComponent} from './general/general.component';
import { PanelComponent } from './panel/panel.component';
import { DialogComponent } from './dialog/dialog.component';
import {TableComponent} from './table/table.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: GeneralComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'table', component: TableComponent},
  {path: '**', component: GeneralComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
