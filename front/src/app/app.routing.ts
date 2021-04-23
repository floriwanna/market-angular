import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AppComponent } from "./app.component";
import { BackofficeComponent } from "./backoffice/backoffice.component";
import { CurrentPermissionResolve } from "./login/current-permissions.resolve";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { ShopComponent } from "./shop/shop.component";
import { ShopModule } from "./shop/shop.module";


const routes: Routes = [
    // {
    //     path: "",
    //     component: ShopComponent,
    //     pathMatch: "full",
    //     // canActivate: [AuthGuardService],
    // },
    // {
    //     path: "admin",
    //     redirectTo: "admin/users",
    //     pathMatch: "full",
    //     // canActivate: [AuthGuardService],
    // },
    // {
    //     path: "login",
    //     component: LoginPageComponent,
    // },
    // {
    //     path: "",
    //     redirectTo: "index",
    //     pathMatch: "full",
    // },
    { path: 'login', pathMatch: "full", component: CustomerLoginComponent },
    { path: 'admin/login', pathMatch: "full", component: AdminLoginComponent },
    {
        path: "",
        component: ShopComponent,
        children: [
            {
                path: "",
                loadChildren: () =>
                    import("./shop/shop.module").then((x) => x.ShopModule),
            },
        ],
    },
    {
        path: "admin",
        component: BackofficeComponent,
        children: [
            {
                path: "",
                resolve: {
                    // currentPermissions: CurrentPermissionResolve,
                },
                loadChildren: () =>
                    import("./backoffice/backoffice.module").then(
                        (x) => x.BackofficeModule
                    ),
            },
        ],
        // canActivate: [AuthGuardService]
    },
];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false,
        })
    ],
    exports: [],
})
export class AppRoutingModule { }
