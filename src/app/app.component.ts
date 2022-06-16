import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  ngOnInit( ): void {
    this.dropdown()
    
  }

  dropdown(){

    const content = (document.getElementById('dropdown-custom') as HTMLDivElement).style ;
    content.display != "none" ? content.display = "none" : content.display = "flex"

  }

}



