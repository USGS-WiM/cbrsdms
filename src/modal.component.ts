import { Component, Inject, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    template: '<ng-content></ng-content>'
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element;
    private className = 'modal-open';

    constructor(private modalService: ModalService, private el: ElementRef, @Inject(DOCUMENT) private document) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.document.body.appendChild(this.element);

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        this.document.body.className ?
            this.document.body.className += ' ' + this.className :
            this.document.body.className += this.className;
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        this.document.body.className = this.document.body.className.replace(this.className, '');
    }
}
