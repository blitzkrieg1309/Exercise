import { Component, OnInit } from '@angular/core';
import { ServantClassService } from '../../services/servant-class.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';

@Component({
  selector: 'app-archer',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './archer.component.html',
  styleUrl: './archer.component.css',
})
export class ArcherComponent implements OnInit {
  archer: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getArcher().subscribe((data: any) => {
      this.archer = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
