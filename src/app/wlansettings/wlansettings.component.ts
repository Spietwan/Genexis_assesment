import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wlansettings',
  templateUrl: './wlansettings.component.html',
  styleUrls: ['./wlansettings.component.css']
})
export class WlansettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('WPSButton').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('WPS button clicked');
    });
    const switchButton = (<HTMLInputElement>document.getElementById('myonoffswitch')); // Enable Wifi on/off button
    const wifiIcon = (<HTMLInputElement>document.getElementById('wifiIcon')); // Wifi icon indicating wifi on/off
    const WPSButton = (<HTMLInputElement>document.getElementById('WPSButton')); // Virtual WPS button
    WPSButton.style.visibility = 'hidden'; // initial state of virtual WPS should be dynamically generated, depending on actual state of Wifi radio network
    switchButton.addEventListener('click', () => {
      if (switchButton.checked) {
        console.log('checkbox checked');
        wifiIcon.className += 'wifiOn'; // *code addition: should only appear after Wifi network is fully initialized
        WPSButton.style.visibility = 'visible'; // *code addition: should only appear after Wifi network is fully initialized
      } else if (!switchButton.checked) {
        console.log('checkbox NOT checked');
        wifiIcon.className = wifiIcon.className.replace(/\bwifiOn\b/g, '');
        WPSButton.style.visibility = 'hidden';
      }
    });

    // ****** Collect information gathered in settings form on page ******
    const selectCountry = (<HTMLInputElement>document.getElementById('SelectCountry'));
    const selectBand = (<HTMLInputElement>document.getElementById('SelectBand'));
    const selectBandwith = (<HTMLInputElement>document.getElementById('SelectBandwith'));
    const selectChannel = (<HTMLInputElement>document.getElementById('SelectChannel'));
    const selectMode = (<HTMLInputElement>document.getElementById('SelectMode'));
    const selectName = (<HTMLInputElement>document.getElementById('SelectName'));
    const selectSSID = (<HTMLInputElement>document.getElementById('SelectSSID'));
    const selectAuthentication = (<HTMLInputElement>document.getElementById('SelectAuthentication'));
    const selectKey = (<HTMLInputElement>document.getElementById('SelectKey'));

    // Wireless.set
    // {
    //   "jsonrpc":	"2.0",
    //   "method":	"wireless.set",
    //   "params":
    //   {
    //     "sessionid":	"ed5a9efd896fc9b328828751d14356eda5a9efd896fc9b328828751d1435699991",
    //     "country":	"nl",
    //     "radio":
    //       [{
    //         "enable":	true,
    //         "channel":	0,
    //         "bandwidth":	20,
    //         "mode":	"b,g,n"
    //       },
    //       {
    //         "enable":	true,
    //         "channel":	0,
    //         "bandwidth":	40,
    //         "mode":	"n,ac"
    //       }],
    //       "interfaces":
    //       [{
    //         "name":	"wlan1",
    //         "ssid":	"GNX5ABE8A",
    //         "wpapsk":	"Y7DYQERHKA2N",
    //         "wps":	false,
    //         "enable":	false,
    //         "broadcast":	true,
    //         "security_mode":	"wpa-wpa2"
    //       },
    //       {
    //         "name":	"wlan2",
    //         "ssid":	"GNX5ABE8A",
    //         "wpapsk":	"Y7DYQERHKA2N",
    //         "wps":	false,
    //         "enable":	false,
    //         "broadcast":	true,
    //         "security_mode":	"wpa2"
    //       }]
    //     },
    //     "id":1 }
    //   }
  }
}
