import { LoginService } from './modules/login/login.service';
import { AuthGuard } from './services/guard/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoginGuard } from './services/guard/login/login.guard';
import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatSelectModule,
    MatOptionModule, MatDialogModule, MatMenuModule, MatFormFieldModule
} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './modules/login/login.component';
import { IndexComponent } from './modules/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routeList = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: IndexComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'dang-nhap',
        component: LoginComponent,
        pathMatch: 'full',
        canActivate: [LoginGuard]
    }
];
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        LoginComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule,
        MatMenuModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routeList)
    ],
    providers: [
        AppComponent,
        HttpService,
        LoginGuard,
        AuthGuard,
        AuthService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
