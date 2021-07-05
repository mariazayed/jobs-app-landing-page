import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-feature-list',
    templateUrl: './feature-list.component.html',
    styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
    @Input() iconBgColor: string = ''
    @Input() iconColor: string = ''
    @Input() icon: string = ''
    @Input() title: string = ''
    @Input() description: string = ''

    constructor() {
    }

    ngOnInit(): void {
    }

}
