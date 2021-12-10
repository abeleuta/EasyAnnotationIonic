import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import  { AnnotatorContainer, Config, ExportType } from 'easyannotation';

@Component({
    selector: 'easyannotation',
    templateUrl: './easyannotation.component.html',
    styleUrls: ['./easyannotation.component.scss'],
})
export class EasyAnnotationComponent implements OnInit, OnDestroy {

    /**
     * Image src.
     */
    @Input() src: string;

    @Input() format: ExportType;

    @Input() config: Config;

    /**
     * Called when user press save.
     */
    @Output() onSave: EventEmitter<string> = new EventEmitter();

    private annotator: AnnotatorContainer;

    componentID: string = '';

    ngOnInit(): void {
        this.componentID = 'comp_' + Math.ceil(Math.random() * 1000000);
        setTimeout(() => {
            this.annotator = new AnnotatorContainer(
                document.querySelector('#' + this.componentID),
                this.config);
            this.annotator.show(imageData => {
                this.onSave.emit(imageData);
            }, this.format);
        }, 500);
    }

    ngOnDestroy(): void {
        this.annotator.close();
    }

    save(callbackHandler?: (imageData: string) => void) {
        this.annotator.save(imageData => {
            if (callbackHandler) {
                callbackHandler(imageData);
            }
            this.onSave.emit(imageData);
        });
    }

}