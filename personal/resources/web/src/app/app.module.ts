import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatSelectModule,
    MatOptionModule, MatDialogModule, MatMenuModule
} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './modules/login/login.component';
import { IndexComponent } from './modules/index/index.component';

const routeList = [
    {
        path: '',
        component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: 'dang-nhap',
        component: LoginComponent,
        pathMatch: 'full'
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
        NgxDatatableModule,
        RouterModule.forRoot(routeList)
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
