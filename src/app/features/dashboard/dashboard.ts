import { Component } from '@angular/core';
import { DataTable } from '../../shared/components/data-table/data-table';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  imports: [DataTable, StatCard, Sidebar, Navbar],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
