import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './services/data.service';
import { AuthguardService } from './services/authguard.service'
import { CheckoutComponent } from './checkout/checkout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CheckedoutitemComponent } from './checkedoutitem/checkedoutitem.component';
import { LoginComponent } from './login/login.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BusinessaccountlistComponent } from './businessaccountlist/businessaccountlist.component';
import { BusinessaccountaddComponent } from './businessaccountadd/businessaccountadd.component';
import { BusinessaccounteditComponent } from './businessaccountedit/businessaccountedit.component';
import { BusinessaccountdisableComponent } from './businessaccountdisable/businessaccountdisable.component';
import { CheckedoutitembybusinessComponent } from './checkedoutitembybusiness/checkedoutitembybusiness.component';
import { ExportAsModule } from 'ngx-export-as';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatPaginatorModule} from '@angular/material';
import { ProductglobalComponent } from './productglobal/productglobal.component';
import { GlobalproductupdateComponent } from './globalproductupdate/globalproductupdate.component';
import { GlobalproductdeleteComponent } from './globalproductdelete/globalproductdelete.component';
import { GlobalcheckedoutlistComponent } from './globalcheckedoutlist/globalcheckedoutlist.component';
import { GlobalcheckedoutupdateComponent } from './globalcheckedoutupdate/globalcheckedoutupdate.component';
import { GlobalcheckedoutdeleteComponent } from './globalcheckedoutdelete/globalcheckedoutdelete.component';
import { GloballocaluserlistComponent } from './globallocaluserlist/globallocaluserlist.component';
import { GloballocaluserupdateComponent } from './globallocaluserupdate/globallocaluserupdate.component';
import { GloballocaluserdeleteComponent } from './globallocaluserdelete/globallocaluserdelete.component';
const appRoutes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'product', component: ProductComponent, canActivate: [AuthguardService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthguardService] },
  { path: 'addproduct', component: AddproductComponent, canActivate: [AuthguardService] },
  { path: 'checkedout', component: CheckedoutitemComponent, canActivate: [AuthguardService] },
  { path: 'updateproduct', component: UpdateproductComponent, canActivate: [AuthguardService] },
  { path: 'deleteproduct', component: DeleteproductComponent, canActivate: [AuthguardService] },
  { path: 'adduser', component: UseraddComponent, canActivate: [AuthguardService] },
  { path: 'updateuser', component: UserupdateComponent, canActivate: [AuthguardService] },
  { path: 'deleteuser', component: UserdeleteComponent, canActivate: [AuthguardService] },
  { path: 'userlist', component: UserlistComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountlist', component: BusinessaccountlistComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountadd', component: BusinessaccountaddComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountupdate', component: BusinessaccounteditComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountdisable', component: BusinessaccountdisableComponent, canActivate: [AuthguardService] },
  { path: 'checkedoutbybusiness', component: CheckedoutitembybusinessComponent, canActivate: [AuthguardService] },
  { path: 'productglobal', component: ProductglobalComponent, canActivate: [AuthguardService] },
  { path: 'productglobalupdate', component: GlobalproductupdateComponent, canActivate: [AuthguardService] },
  { path: 'productglobaldelete', component: GlobalproductdeleteComponent, canActivate: [AuthguardService] },
  { path: 'globaluserlist', component: GloballocaluserlistComponent, canActivate: [AuthguardService] },
  { path: 'globalupdateuser', component: GloballocaluserupdateComponent, canActivate: [AuthguardService] },
  { path: 'globaldeleteuser', component: GloballocaluserdeleteComponent, canActivate: [AuthguardService] },



];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CheckoutComponent,
    AddproductComponent,
    CheckedoutitemComponent,
    LoginComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    UseraddComponent,
    UserupdateComponent,
    UserdeleteComponent,
    UserlistComponent,
    BusinessaccountlistComponent,
    BusinessaccountaddComponent,
    BusinessaccounteditComponent,
    BusinessaccountdisableComponent,
    CheckedoutitembybusinessComponent,
    ProductglobalComponent,
    GlobalproductupdateComponent,
    GlobalproductdeleteComponent,
    GlobalcheckedoutlistComponent,
    GlobalcheckedoutupdateComponent,
    GlobalcheckedoutdeleteComponent,
    GloballocaluserlistComponent,
    GloballocaluserupdateComponent,
    GloballocaluserdeleteComponent
    ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes
  ),
     BrowserAnimationsModule,
     MatTableModule,
     HttpClientModule,
     FormsModule,
     ExportAsModule,
     MatDatepickerModule,
     ReactiveFormsModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatRippleModule,
     MatNativeDateModule,
     MatSortModule,
     MatPaginatorModule
      ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
