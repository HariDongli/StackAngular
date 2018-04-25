import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule , HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes} from '@angular/router';
import { DataService } from "./data.service";
const routes: Routes = [
{path: '', component: ParentComponent, outlet:'parent' , children : [
  {path:'', component: ChildComponent, outlet: 'child'}
]
}
]
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
