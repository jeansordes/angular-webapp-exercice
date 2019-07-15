import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
<footer>
    <p>Site réalisé par <a href="https://www.jzs.fr">Jean Z. SORDES</a>
    dans le cadre d'un exercice <a href="/assets/exercice.pdf">(voir l'énoncé)</a> demandé par
    <a href="https://www.cgx-group.com">CGX Group</a> en Juillet 2019</p>
</footer>
`
})
export class FooterComponent { }
