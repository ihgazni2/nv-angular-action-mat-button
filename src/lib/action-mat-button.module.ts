import { NgModule, ModuleWithProviders } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { ActionMatButtonComponent } from './action-mat-button.component';



@NgModule({
  imports: [CommonModule,MatButtonModule ],
  declarations: [ActionMatButtonComponent],
  exports: [ActionMatButtonComponent],
})
export class ActionMatButtonModule {
  public static forRoot(): ModuleWithProviders<ActionMatButtonModule> {
    return {
      ngModule: ActionMatButtonModule,
      providers: []
    };
  }

  public static forChild(): ModuleWithProviders<ActionMatButtonModule> {
    return {
      ngModule: ActionMatButtonModule,
      providers: []
    };
  }
}
