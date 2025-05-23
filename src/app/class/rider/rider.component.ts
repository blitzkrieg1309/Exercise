import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { Router } from '@angular/router';
import { ServantClassService } from '../../services/servant-class.service';

@Component({
  selector: 'app-rider',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './rider.component.html',
  styleUrl: './rider.component.css',
})
export class RiderComponent implements OnInit {
  rider: any[] = [];

  constructor(
    private servantClassService: ServantClassService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getRider().subscribe((data: any) => {
      this.rider = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
