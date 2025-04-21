import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../services/servant-class.service';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';

@Component({
  selector: 'app-saber',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './saber.component.html',
  styleUrl: './saber.component.css',
})
export class SaberComponent implements OnInit {
  saber: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit() {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getSaber().subscribe((data: any) => {
      this.saber = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
