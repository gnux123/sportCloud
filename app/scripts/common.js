//防止被 iframe
if (top.location != self.location && document.referrer.search("ettoday.net") < 0) {
	top.location.href = window.location.href
}

//複製網頁時產生原文連結(Tynt)==========================================
if(document.location.protocol=='http:'){
 var Tynt=Tynt||[];Tynt.push('bGee2M3Q0r4iaCacwqm_6r');Tynt.i={"ap":"原文網址:","st":true,"w":"ETtodaynet","f":"ETtoday"};
 (function(){var s=document.createElement('script');s.async="async";s.type="text/javascript";s.src='http://tcr.tynt.com/ti.js';var h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})();
}

//Google流量統計碼 (通用 Analytics) ==========================================
if (window.location.href.indexOf("3q4fd7") > 0) {//RF

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-25690501-10', 'auto');
	ga('dalemon.require', 'displayfeatures');
	ga('send', 'pageview');
} else {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	//全網
	ga('create', 'UA-25690501-1', 'auto', {'name': 'AllWeb'});
	ga('AllWeb.require', 'displayfeatures');
	ga('AllWeb.set', 'dimension1', '體育');
	ga('AllWeb.send', 'pageview');
	ga('AllWeb.send', 'event', '新聞分類', '體育', 'From 運動雲電腦版', {'nonInteraction': 1});//追蹤新聞分類

	//運動雲
	ga('create', 'UA-45704966-12', 'auto', {'name': 'Sports'});
	ga('Sports.require', 'displayfeatures');
	ga('Sports.send', 'pageview');

}
