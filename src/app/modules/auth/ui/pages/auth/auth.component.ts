import { Component, OnInit, inject } from '@angular/core';
import { AuthUsecaseService } from '../../../domain/usecase/auth-usecase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProxyRequest } from '../../../domain/models/proxy.model';
import { environments } from '../../../../../../environments/environments';

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
    // this.callProxy();
  }

  getCode() {
    console.log('getCode desde el componente');
    this._authUsecaseService.getCode();
  }

  private listenToCode() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const code = params['code'] || null;
      if (code) {
        // TODO: Después de obtener el código se debe llamar el servicio para obtener access_token
        console.log('code', code);
        this.reInitUrl();
        this.getAccessToken(code);
      }
    });
  }

  private getAccessToken(code: string) {
    this._authUsecaseService.getAccessToken(code).subscribe((data) => {
      console.log({ data });
    });
  }

  private reInitUrl() {
    console.log('reInitUrl');
    this._location.replaceState(this._router.url.split('?')[0]);
  }
}
