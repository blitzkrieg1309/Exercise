import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { ServantClassService } from '../../services/servant-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruler',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ruler.component.html',
  styleUrl: './ruler.component.css',
})
export class RulerComponent implements OnInit {
  ruler: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getRuler().subscribe((data: any) => {
      this.ruler = data;
    });
  }

  goToProductDetail(ProductId: string): void {
    this.router.navigate(['servants', ProductId]);
  }
}
