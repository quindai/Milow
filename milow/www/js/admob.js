//var admobid = window.plugins.AdMob;
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3555053502455169/7025065330',
        interstitial: 'ca-app-pub-3555053502455169/5548332138'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3555053502455169/7025065330',
        interstitial: 'ca-app-pub-3555053502455169/5548332138'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-3555053502455169/7025065330',
        interstitial: 'ca-app-pub-3555053502455169/5548332138'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            isTesting: false,
            overlap: true,
            autoShow : true
        });
        AdMob.prepareInterstitial({
            adId:admobid.interstitial,
            autoShow:true
        });

    }
}
document.addEventListener('deviceready', initApp, false);
//document.addEventListener('resume',AdMob.showInterstitial());