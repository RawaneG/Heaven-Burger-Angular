import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.scss']
})
export class BoissonsComponent implements OnInit
{
  @Input() maBoisson : any;
  @Output() myOutputValue = new EventEmitter();
  beureukh : number = 0;
  somme = 0;
  quantiteActuelle = 0;
  bsonChoisie : any[] = [];

  constructor(private sanitaire : DomSanitizer) { }

  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }

  laBansson(product : any)
  {
      if (!this.bsonChoisie.includes(product))
      {
        this.bsonChoisie.push(product);
        localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
      }
      else
      {
        const index = this.bsonChoisie.indexOf(product);
        if (index > -1)
        {
          this.bsonChoisie.splice(index, 1);
          localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
        }
      }
  }
  incremente()
  {
    this.beureukh++;
    let input = document.querySelectorAll('.span');
    input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
    this.quantiteActuelle++;
    this.myOutputValue.emit(this.quantiteActuelle);
    this.quantiteActuelle = 0;
  }

  decremente()
  {
    if(this.beureukh > 0)
    {
      this.beureukh--;
      let input = document.querySelectorAll('.span');
      input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
      this.quantiteActuelle--;
      this.myOutputValue.emit(this.quantiteActuelle);
      this.quantiteActuelle = 0;
    }
    else
    {
      return;
    }
  }
  ngOnInit(): void
  {
  }

}
