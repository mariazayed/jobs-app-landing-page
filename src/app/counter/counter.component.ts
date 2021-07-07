import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: [ './counter.component.scss' ],
})
export class CounterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const counters = document.querySelectorAll('.value');
        const speed = 200;

        counters.forEach((counter: Element) => {
            const animate = () => {
                // @ts-ignore
                const value = +counter.getAttribute('maxValue');
                // @ts-ignore
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    // @ts-ignore
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    // @ts-ignore
                    counter.innerText = value;
                }
            };

            animate();
        });
    }
}
