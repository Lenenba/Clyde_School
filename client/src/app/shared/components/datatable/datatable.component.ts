import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../interfaces/student.interface';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort!: MatSort;
    @Input() public dataSource!:Student[]|null
    @Input() public displayedColumns: string[] = []
    public data: MatTableDataSource<Student> = new MatTableDataSource(this.dataSource!);

    constructor() {}

    ngOnInit(): void {
      setTimeout(() =>  this.data.data = this.dataSource!);
      setTimeout(() => this.data.paginator = this.paginator);
      setTimeout(() => this.data.sort = this.sort);
      // console.log(this.data)
    }

    ngAfterViewInit(): void {}

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.data.filter = filterValue.trim().toLowerCase();

      if (this.data.paginator) {
        this.data.paginator.firstPage();
      }
    }
  }
