import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from './mat-select-search/ngx-mat-select-search.module';

import { AppComponent } from './app.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {UserDataService} from './examples/02-multiple-selection-example/user-data.service';


/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule,
    MatSelectInfiniteScrollModule,
    MatSlideToggleModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [
    AppComponent,
    MultipleSelectionExampleComponent,
    ServerSideSearchExampleComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserDataService]
})
export class AppModule {}
