import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightNumber]',
})
export class HighlightNumberDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const info = this.elementRef.nativeElement.innerText;
    const numericArray = info.match(/\b\d+\b/g);
    const index = info.indexOf(numericArray);

    const openingTag = '<span style="color:red">';
    const closingTag = '</span>';

    if (numericArray !== null) {
      const numeric = numericArray.toString();
      const length = numeric.length;

      const newHTML =
        info.slice(0, index) +
        openingTag +
        `${numericArray}` +
        closingTag +
        info.slice(index + length);
      this.elementRef.nativeElement.innerHTML = newHTML;
    }
  }
}
