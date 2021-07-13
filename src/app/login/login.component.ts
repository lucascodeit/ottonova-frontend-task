import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from 'src/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public isLoading: boolean = false;
  public isAuth: Observable<boolean> = of(false);

  constructor(
    private readonly fb: FormBuilder,
    public readonly authService: AuthService,
    private router: Router
  ) {
    this.isAuth = authService.isAuthenticated$;
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public async onSubmit() {
    if (!this.formLogin.valid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.formLogin.getRawValue());
  }

  private whenLoginSuccess() {
    this.authService.auth$.subscribe((val) => {
      this.isLoading = false;
      if (val) {
        this.router.navigate(['/chat-bot']);
      }
    });
  }

  ngOnInit() {
    this.whenLoginSuccess();
  }
}
