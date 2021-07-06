import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WavesComponent } from './waves/waves.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { WaveComponent } from './wave/wave.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent,
    FeatureBoxComponent,
    FeatureListComponent,
    WaveComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
