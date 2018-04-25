import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WarenkorbComponent } from "./components/warenkorb/warenkorb.component";

const WarenkorbRoutes: Routes = [
    { path: 'warenkorb', component: WarenkorbComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(WarenkorbRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WarenkorbRoutingModule {}