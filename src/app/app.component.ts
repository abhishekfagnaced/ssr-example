import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe({
        next: (response) => {
          console.log(response);
          // handle the response data here
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
  title = 'example';
}
