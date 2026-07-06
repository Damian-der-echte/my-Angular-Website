import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';


@Component({
  selector: 'app-header',
  imports: [MatToolbar, RouterLink, MatIcon, MatIconButton, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
