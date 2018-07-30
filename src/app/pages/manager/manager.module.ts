import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ManagerComponent } from './manager.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ManagerComponent
  ],
})
export class ManagerModule { }
