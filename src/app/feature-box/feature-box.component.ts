import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-feature-box',
    templateUrl: './feature-box.component.html',
    styleUrls: [ './feature-box.component.scss' ],
})
export class FeatureBoxComponent implements OnInit {
    @Input() icon: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() iconBgColor: string = '';
    @Input() iconColor: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

}
