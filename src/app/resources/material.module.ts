import { NgModule } from '@angular/core';
//import { MdCheckboxButton, MdButtonModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button'; 

const modules = [MatButtonModule];

@NgModule({
    imports:modules,
    exports:modules
})
export class MaterialModule{
    
}