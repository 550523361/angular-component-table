import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BaseTableListPager} from "angular-component-pager";
import {BaseTableListComponent} from "./tableList/base.table.list.component";
import {BaseTableListQueryComponent} from "angular-component-table-query";


@NgModule({
  declarations: [
    AppComponent,
    BaseTableListComponent,
    BaseTableListQueryComponent,
    BaseTableListPager
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
