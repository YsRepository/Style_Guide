import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import {GeneralComponent} from './general/general.component';
import { PanelComponent } from './panel/panel.component';
import { DialogComponent } from './dialog/dialog.component';

const appRoutes: Routes = [
  {path: '', component: GeneralComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'dialog', component: DialogComponent},
  {path: '**', component: GeneralComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
