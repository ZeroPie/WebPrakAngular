import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { MatTableModule, MatFormField, MatFormFieldModule, MatPaginatorModule, MatFormFieldControl, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule } from "@angular/material";


@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule {}