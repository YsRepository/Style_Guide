import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import {
  AccordionModule,
  AutoCompleteModule,
  ButtonModule, CalendarModule, CheckboxModule, ConfirmationService, ConfirmDialogModule, DataTableModule, DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextModule, MessageModule, OverlayPanelModule,
  PanelModule, RadioButtonModule,
  SharedModule, SidebarModule,
  TabViewModule, TooltipModule,
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralComponent } from './general/general.component';
import { PanelComponent } from './panel/panel.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputsComponent,
    ButtonsComponent,
    NavbarComponent,
    GeneralComponent,
    PanelComponent,
    DialogComponent,
    TableComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    AutoCompleteModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    TooltipModule,
    AccordionModule,
    routing,
    FileUploadModule,
    InputTextModule,
    MessageModule,
    CheckboxModule,
    RadioButtonModule,
    OverlayPanelModule,
    SidebarModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
