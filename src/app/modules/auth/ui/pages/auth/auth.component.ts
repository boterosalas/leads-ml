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
    this._authUsecaseService.getCode();
  }

  private listenToCode() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const code = params['code'] || null;
      if (code) {
        // TODO: Después de obtener el código se debe llamar el servicio para obtener access_token
        this.reInitUrl();
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
    console.log('reInitUrl');
    this._location.replaceState(this._router.url.split('?')[0]);
  }

  callProxy() {
    const request: ProxyRequest = {
      method: 'POST',
      url: 'https://api.mercadolibre.com/oauth/token',
      data: {
        code: 'TG-68b8f5346421e700011698d2-2651263697',
        grant_type: 'authorization_code',
        redirect_uri: environments.redirectUri,
        client_id: '8315944344732576',
        client_secret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this._authUsecaseService.callProxy(request).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error('Error desde proxy:', err);
      },
    });
  }
}
