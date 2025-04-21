import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../services/servant-class.service';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';

@Component({
  selector: 'app-lancer',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './lancer.component.html',
  styleUrl: './lancer.component.css',
})
export class LancerComponent implements OnInit {
  lancer: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getLancer().subscribe((data: any) => {
      this.lancer = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
