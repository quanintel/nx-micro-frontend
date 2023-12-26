import {Component, ElementRef, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

export interface AraMenuOption {
  loadRemote: () => Promise<void>,
  selector: string
}

@Component({
  selector: 'app-ara-menu',
  standalone: true,
  template: '',
})
export class AraMenuComponent implements OnInit, OnDestroy {
  @Input() options!: AraMenuOption

  private readonly elementRef = inject(ElementRef<HTMLElement>)
  private readonly route = inject(ActivatedRoute)
  element!: HTMLElement

  async ngOnInit() {
    const {loadRemote, selector} = this.options || this.route.snapshot.data as AraMenuOption
    await loadRemote()

    this.element = document.createElement(selector)
    this.elementRef.nativeElement.appendChild(this.element)
  }

  ngOnDestroy() {
    if (this.element) {
      this.elementRef.nativeElement.removeChild(this.element)
    }
  }
}
