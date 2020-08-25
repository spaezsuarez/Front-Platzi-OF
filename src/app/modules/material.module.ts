import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list';

const modules = [MatToolbarModule,MatIconModule,MatCardModule,
                MatInputModule,MatButtonModule,MatListModule];

@NgModule({
    imports:modules,
    exports:modules
})
export class MaterialModule{}