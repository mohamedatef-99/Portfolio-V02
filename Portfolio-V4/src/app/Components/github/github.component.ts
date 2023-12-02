import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  repos!: any[];
  username: string = 'mohamedatef-99';

  constructor(private githubService: GithubServiceService) {}

  ngOnInit() {
    this.fetchRepos();
  }

  fetchRepos() {
    this.githubService.getRepos(this.username).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
