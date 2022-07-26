import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
  }
}
