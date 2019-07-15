import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
<footer>
    <p>Angular web app made by <a href="https://www.jzs.fr">Jean Z. SORDES</a>
    for a test <a href="./assets/exercice.pdf">(see the requirements here)</a> for
    <a href="https://www.cgx-group.com">CGX Group</a>, made in less than a weekend, in July 2019</p>
</footer>
`
})
export class FooterComponent { }
