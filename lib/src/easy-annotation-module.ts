import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EasyAnnotationComponent} from './components/easyannotation.component';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [
        EasyAnnotationComponent,
    ],
    exports: [
        EasyAnnotationComponent
    ]
})
export class EasyAnnotationModule {}
