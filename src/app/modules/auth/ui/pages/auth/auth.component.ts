import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { AuthUsecaseService } from '../../../domain/usecase/auth-usecase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProxyRequest } from '../../../domain/models/proxy.model';
import { environments } from '../../../../../../environments/environments';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  private _authUsecaseService = inject(AuthUsecaseService);
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _location = inject(Location);
  private authForm!: FormGroup;
  public clientIdControl = new FormControl(null, Validators.required);
  public clientSecretControl = new FormControl(null, Validators.required);

  ngOnInit(): void {
    this.initForm();
    this.listenToCode();
  }

  private initForm() {
    this.authForm = new FormGroup({
      clientId: this.clientIdControl,
      clientSecret: this.clientSecretControl,
    });
  }

  private listenToCode() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const code = params['code'] || null;
      if (code) {
        this.reInitUrl();
        this.getAccessToken(code);
      }
    });
  }

  private getAccessToken(code: string) {
    this._authUsecaseService.getAccessToken(code).subscribe((token) => {
      localStorage.setItem('token', JSON.stringify(token));
      this._router.navigateByUrl('/leads');
    });
  }

  private reInitUrl() {
    this._location.replaceState(this._router.url.split('?')[0]);
  }

  connect() {
    if (this.authForm.valid) {
      const keys = {
        clientId: this.clientIdControl.value,
        clientSecret: this.clientSecretControl.value,
      };
      localStorage.setItem('keys', JSON.stringify(keys));
      this._authUsecaseService.getCode(`${this.clientIdControl.value}`);
    }
  }
}
