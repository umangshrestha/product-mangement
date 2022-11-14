import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ["./start-rating.component.scss"],
})
export class StarRatingComponent implements OnChanges {

  @Input() rating = 0;

  cropWidth = 75;

  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void { 
    this.ratingClicked.emit(`Rating {this.rating} was clicked`)
  }

}
