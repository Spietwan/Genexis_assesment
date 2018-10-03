import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wlansettings',
  templateUrl: './wlansettings.component.html',
  styleUrls: ['./wlansettings.component.css']
})
export class WlansettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("WPSButton").addEventListener('click', () => console.log('WPS button clicked'));
    let switchButton = (<HTMLInputElement>document.getElementById("myonoffswitch")); // Enable Wifi on/off button
    let wifiIcon = (<HTMLInputElement>document.getElementById("wifiIcon")); // Wifi icon indicating wifi on/off
    let WPSButton = (<HTMLInputElement>document.getElementById("WPSButton")); // Virtual WPS button
    WPSButton.style.visibility = "hidden"; // initial state of virtual WPS should be dynamically generated, depending on actual state of Wifi radio network
    switchButton.addEventListener('click', () => {
      if(switchButton.checked) {
        console.log('checkbox checked');
        wifiIcon.className += "wifiOn"; // *code addition: should only appear after Wifi network is fully initialized
        WPSButton.style.visibility = "visible"; // *code addition: should only appear after Wifi network is fully initialized
      } else if (!switchButton.checked) {        
        console.log('checkbox NOT checked');        
        wifiIcon.className = wifiIcon.className.replace(/\bwifiOn\b/g, "");
        WPSButton.style.visibility = "hidden";
      }
    });

    // ****** Collect information gathered in settings form on page ******
    let selectCountry = (<HTMLInputElement>document.getElementById("SelectCountry"));
    let selectBand = (<HTMLInputElement>document.getElementById("SelectBand"));
    let selectBandwith = (<HTMLInputElement>document.getElementById("SelectBandwith"));
    let selectChannel = (<HTMLInputElement>document.getElementById("SelectChannel"));
    let selectMode = (<HTMLInputElement>document.getElementById("SelectMode"));
    let selectName = (<HTMLInputElement>document.getElementById("SelectName"));
    let selectSSID = (<HTMLInputElement>document.getElementById("SelectSSID"));
    let selectAuthentication = (<HTMLInputElement>document.getElementById("SelectAuthentication"));
    let selectKey = (<HTMLInputElement>document.getElementById("SelectKey"));
}

}
