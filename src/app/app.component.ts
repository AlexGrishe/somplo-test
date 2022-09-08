import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {ImageService} from "./image.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title: string = 'Odessa-test';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  imageInfos?: Observable<any>;
  animatedOne: any = false;
  animatedTwo: any = false;
  animatedThree: any = false;
  width: any = 200;
  height: any = 200;
  bottom: any = 0;
  right: any = 0;
  locationX: any = 0;
  locationY: any = 0;
  htmlFile: any;

  constructor(private imageService: ImageService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.imageInfos = this.imageService.getFiles();
  }

  showAllHtml() {
    alert(this.elementRef.nativeElement
      .querySelector('.main-page')
      .outerHTML
    )
  }

  showImgBlockHtml() {
    alert(this.elementRef.nativeElement
      .querySelector('.upload-image-block__add-photo')
      .outerHTML
    )
  }

  //Improve the function with the ability to download code in html format
  // getHTML() {
  //   this.htmlFile = this.elementRef.nativeElement
  //     .querySelector('.upload-image-block__location-photo')
  //     .outerHTML
  // }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.preview = '';
        this.currentFile = file;
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result)
          this.preview = e.target.result;
        };
        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  clickAnimationOne() {
    this.animatedOne = !this.animatedOne
  }

  clickAnimationTwo() {
    this.animatedTwo = !this.animatedTwo
  }

  clickAnimationThree() {
    this.animatedThree = !this.animatedThree
  }

  imageWidth() {
    this.width = document.getElementById('y')
    this.right = document.getElementById('y')
    this.right = (this.right.value - 200) / 2
    this.width = this.width.value
  }

  imageHeight() {
    this.height = document.getElementById('x')
    this.bottom = document.getElementById('x')
    this.bottom = (this.bottom.value - 200) / 2
    this.height = this.height.value
  }

  imageLocationX() {
    this.locationX = document.getElementById('xLocation')
    this.locationX = this.locationX.value
  }

  imageLocationY() {
    this.locationY = document.getElementById('yLocation')
    this.locationY = this.locationY.value
  }

}
