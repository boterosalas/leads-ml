import { Component, OnInit, inject } from '@angular/core';
import { AuthUsecaseService } from '../../../domain/usecase/auth-usecase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  private _authUsecaseService = inject(AuthUsecaseService);
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _location = inject(Location);

  ngOnInit(): void {
    this.listenToCode();
  }

  getCode() {
    this._authUsecaseService.getCode('8315944344732576');
  }

  private listenToCode() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const code = params['code'] || null;
      if (code) {
        // TODO: Después de obtener el código se debe llamar el servicio del login
        this.reInitUrl;
        this.getToken(code);
      }
    });
  }

  private getToken(code: string) {
    this._authUsecaseService.getToken(code).subscribe((data) => {
      console.log({ data });
    });
  }

  private reInitUrl() {
    this._location.replaceState(this._router.url.split('?')[0]);
  }
}
