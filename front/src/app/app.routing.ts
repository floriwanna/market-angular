import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { BackofficeComponent } from "./backoffice/backoffice.component";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { ShopComponent } from "./shop/shop.component";


const routes: Routes = [
    { path: 'admin/login', pathMatch: "full", component: AdminLoginComponent },
    {//ADMIN
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
    { path: 'login', pathMatch: "full", component: CustomerLoginComponent },
    // {
    //     path: "",
    //     redirectTo: "home",
    //     pathMatch: "full",
    // },
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
];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false,
        }),
    ],
    exports: [],
})
export class AppRoutingModule { }
