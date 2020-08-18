import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-component',
  templateUrl: './camera-component.component.html',
  styleUrls: ['./camera-component.component.css']
})
export class CameraComponentComponent implements OnInit {
  photos = ['img1', 'img2', 'img3', 'img4', 'img5'];
  title = 'Camera PWA Section';

  constructor() { }

  ngOnInit(): void {
    
  }

  activeCamera(camera) {
    camera.click();
  }

  onChange(evt, photo) {
    // Create url object and show Photo from BLOB Object.
    photo.src = URL.createObjectURL(evt.target.files[0]);
    // Create Http Request Instance.
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) console.log(xhttp.responseText);
    };
    // Create Data Form Instance.
    const formData = new FormData();
    // Add blob object into instance.
    formData.append("photo", evt.target.files[0]);
    // Open and send data to endpoint /upload
    /*xhttp.open('POST', window.location.href + 'upload', true);
    xhttp.send(formData)*/
  }

}
