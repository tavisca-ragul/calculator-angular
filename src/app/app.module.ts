import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HistoriesComponent } from './histories/histories.component';
import { HistoryComponent } from './history/history.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { OperandKeyComponent } from './operand-key/operand-key.component';
import { OperatorKeyComponent } from './operator-key/operator-key.component';
import { CalculatorService } from './services/calculator.service';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HistoriesComponent,
    HistoryComponent,
    KeyboardComponent,
    OperandKeyComponent,
    OperatorKeyComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
