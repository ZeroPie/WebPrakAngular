import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarenkorbComponent } from "./components/warenkorb/warenkorb.component";
import { WarenkorbRoutingModule } from "./warenkorb-routing.module";
import { MatTableModule, MatFormField, MatFormFieldModule, MatPaginatorModule, MatFormFieldControl, MatInputModule } from "@angular/material";


@NgModule({
    imports: [
        CommonModule,
        WarenkorbRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        WarenkorbComponent
    ]
})
export class WarenkorbModule {}