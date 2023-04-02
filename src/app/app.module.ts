import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ErrorComponent } from './Pages/error/error.component';
import { FlotanteComponent } from './Components/flotante/flotante.component';
import { MaterialModuleModule } from './Pages/material-module/material-module.module';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubmenuComponent } from './Components/submenu/submenu.component';
import { MateriasComponent } from './Components/materias/materias.component';
import { UserComponent } from './Pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ErrorComponent,
    FlotanteComponent,
    MenuComponent,
    FooterComponent,
    SubmenuComponent,
    MateriasComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
  ],
  exports: [
    FlotanteComponent,
    MenuComponent,
    SubmenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
