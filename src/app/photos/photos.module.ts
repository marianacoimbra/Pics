import { HttpClientModule } from "@angular/common/http";
import { NgModule, OnInit } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoService } from "./photo/photo.service";
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listFromUser("flavio").subscribe((p) => {
      this.photos = p;
    });
  }
}
