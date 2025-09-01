import { Component, inject } from '@angular/core';
import { AuthUsecaseService } from '../../../domain/usecase/auth-usecase.service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private _authUsecaseService = inject(AuthUsecaseService);

  getCode() {
    this._authUsecaseService.getCode('8315944344732576');
  }
}
