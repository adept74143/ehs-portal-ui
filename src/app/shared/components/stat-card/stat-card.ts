import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-stat-card',
  styleUrl: './stat-card.css',
  templateUrl: './stat-card.html',
})
export class StatCard {
  @Input() title = '';

  @Input() value = '';

  @Input() icon = '';

  @Input() percentage = '';

  @Input() trendText = '';

  @Input() trendType = 'up';

  @Input() color = 'purple';
}
