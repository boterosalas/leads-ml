import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthUsecaseService } from './domain/usecase/auth-usecase.service';
import { AuthGatewayService } from './domain/gateway/auth.service';
import { AuthService } from './infrastructure/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  providers: [
    AuthUsecaseService,
    { provide: AuthGatewayService, useClass: AuthService },
  ],
})
export class AuthModule {}
