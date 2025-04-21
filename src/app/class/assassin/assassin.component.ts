import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { Router } from '@angular/router';
import { ServantClassService } from '../../services/servant-class.service';

@Component({
  selector: 'app-assassin',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './assassin.component.html',
  styleUrl: './assassin.component.css',
})
export class AssassinComponent implements OnInit {
  assassin: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getAssassin().subscribe((data: any) => {
      this.assassin = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['servants', ProductId]);
  }
}
