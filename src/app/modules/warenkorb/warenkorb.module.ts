import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarenkorbComponent } from "./components/warenkorb.component";
import { WarenkorbRoutingModule } from "./warenkorb-routing.module";


@NgModule({
    imports: [
        CommonModule,
        WarenkorbRoutingModule
    ],
    declarations: [
        WarenkorbComponent
    ]
})
export class WarenkorbModule {}