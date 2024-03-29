import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoading!: boolean;
  showList = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  downloadResume() {
    const link = document.createElement('a');
    const resume =
      'https://drive.google.com/file/d/13jtcjb0Pe5D9N5UPX08mrusCV0lr63Nd/view?usp=sharing';
    link.setAttribute('href', resume);
    link.setAttribute('download', 'resume.pdf');
    link.setAttribute('target', '_blank');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.burger-menu')) {
      this.showList = false;
    }
  }
}
