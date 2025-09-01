import { Component, OnInit, inject } from '@angular/core';
import { AuthUsecaseService } from '../../../domain/usecase/auth-usecase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  private _authUsecaseService = inject(AuthUsecaseService);
  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.listenToCode();
  }

  listenToCode() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const code = params['code'] || null;
      console.log('Code recibido:', code);
      // TODO: Después de obtener el código se debe llamar el servicio del login
    });
  }

  getCode() {
    this._authUsecaseService.getCode('8315944344732576');
  }
}
