import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent  // component add here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService], // service add here
  bootstrap: [AppComponent]
})
export class AppModule { }
