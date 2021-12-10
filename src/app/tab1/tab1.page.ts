import {Component} from '@angular/core';
import Config from 'easyannotation/dist/typings/Config';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    config: Config;

    constructor() {
        this.config = {
            fillStyles: {
                text: {
                    color: '#000'
                }
            }
        } as Config;
    }

    onSaveImage(imageData: string) {

    }
}
