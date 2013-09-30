var epaCore={printAsIs_Date_URL:function(){if(!document.getElementById("footer")){return}var h=document.getElementById("footer");var a=document.createElement("p");a.id="printAsIs";var c=document.createElement("a");c.href="#";c.title="Print this page as-is.";c.onclick=function(){epaCore.print_preview();return false};c.appendChild(document.createTextNode("Print As-Is"));a.appendChild(c);h.appendChild(a);var b=document.createElement("p");b.id="url";b.appendChild(document.createTextNode(window.location.href));h.insertBefore(b,a);if(document.lastModified==""){var g=new Date()}else{var g=new Date(document.lastModified)}var f="Last updated on "+g.toLocaleDateString();var e=document.createElement("p");e.id="date";e.appendChild(document.createTextNode(f));h.insertBefore(e,b)},print_preview:function(){var a=document.getElementsByTagName("link");for(var b=0;b<a.length;b++){var c=a[b].getAttribute("href");if(c=="http://www.epa.gov/epafiles/s/print.css"){a[b].removeAttribute("href");a[b].href="http://www.epa.gov/epafiles/s/epa.css"}}epaCore.add_preview_message()},add_preview_message:function(){var b=document.getElementById("footer");var a=document.createElement("p");a.innerHTML="<b>This document will now print as it appears on screen when you use the File &raquo; Print command.</b><br>Use View &raquo; Refresh to return to original state.";b.appendChild(a)},newIcon:function(){if(!document.getElementById("content")){return}if(!document.getElementsByTagName("ins")){return}var g=document.getElementById("content").getElementsByTagName("ins");for(var e=0;e<g.length;e++){if(!g[e].getAttribute("datetime")){continue}var l=g[e].getAttribute("datetime");var k=new Array();k=l.split("-");var c=(Date.UTC(k[0],k[1],k[2],0,0,0))/86400000;var m=new Date();var h=new Date(m.toGMTString());var d=(Date.UTC(epaCore.takeYear(h),h.getMonth(),h.getDate(),0,0,0))/86400000;var f=c-(d+1);if(f<31&&f>0){var j=document.createElement("img");j.alt="&iexcl;Nuevo!";j.src="http://www.epa.gov/epafiles/images/new-es.gif";j.width="34";j.height="16";g[e].appendChild(j)}}},takeYear:function(b){var a=b.getYear();var c=a%100;c+=(c<38)?2000:1900;return c},notice:function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://www.epa.gov/epahome/notice.js";document.getElementsByTagName("body")[0].appendChild(a)},addClass:function(b,a){if(!b.className){b.className=a}else{b.className+=" ";b.className+=a}},stripeTables:function(){if(!document.getElementsByTagName("table")){return}var d=document.getElementsByTagName("table");for(var c=0;c<d.length;c++){if(d[c].className.match("zebra")){var a=d[c].getElementsByTagName("tr");for(var b=1;b<a.length;b=b+2){epaCore.addClass(a[b],"tint")}}}},showHideSwap:function(c,b){var d=document.getElementById(c);var a=document.getElementById(b);if(d.className=="hide"&&a.className=="post"){d.className="show";a.className="postFrame"}else{d.className="hide";a.className="post"}},articleShare:function(a){var d=encodeURIComponent(window.location.href);var c=encodeURIComponent(document.title);var b="";switch(a){case"facebook":epaCore.postPopUp("http://www.facebook.com/sharer.php?u="+popURL+"&t="+c,"facebook","height=436,width=646,scrollbars=yes,resizable=yes");break;case"reddit":epaCore.postPopUp("http://www.reddit.com/submit?url="+popURL,"reddit","height=450,width=650,scrollbars=yes,resizable=yes");break;case"twitter":epaCore.postPopUp("https://twitter.com/share?text="+c+"&url="+popURL+"&via=EPA&count=none&lang=en","twitter","height=375,width=550,scrollbars=yes,resizable=yes");break;case"whatisthis":window.location="http://www.epa.gov/epahome/bookmarks.html";break}},postPopUp:function(b,a,d){var c=window.open(b,a,d)},addPostItem:function(b,c,d,e){var a=document.createElement("li");a.className=c;var f=document.createElement("a");f.setAttribute("href",d);f.innerHTML=e;a.appendChild(f);b.appendChild(a)},writePost:function(){if(!document.getElementById("footer")){return}if(document.getElementById("aara")){return}var e=document.getElementById("footer");var d=document.createElement("ul");d.id="bookmarkList";var c=document.createElement("li");c.className="post";c.setAttribute("id","post");var a=document.createElement("a");a.setAttribute("href","#");a.onclick=function(){epaCore.showHideSwap("postList","post");return false};a.innerHTML="Bookmark";c.appendChild(a);var b=document.createElement("ul");b.setAttribute("id","postList");b.className="hide";epaCore.addPosts(b);c.appendChild(b);d.appendChild(c);e.appendChild(d)},addPosts:function(b){var a;if(typeof(b)=="string"){a=document.getElementById(b)}else{if(typeof(b)=="object"){a=b}else{return false}}epaCore.addPostItem(a,"facebook","javascript:epaCore.articleShare('facebook');","Facebook");epaCore.addPostItem(a,"reddit","javascript:epaCore.articleShare('reddit');","reddit");epaCore.addPostItem(a,"twitter","javascript:epaCore.articleShare('twitter');","Twitter");epaCore.addPostItem(a,"whatisthis","javascript:epaCore.articleShare('whatisthis');","What is this?")}};function addEvent(c,b,a){if(document.getElementById&&document.createTextNode){if(c.addEventListener){c.addEventListener(b,a,false)}else{if(c.attachEvent){c["e"+b+a]=a;c[b+a]=function(){c["e"+b+a](window.event)};c.attachEvent("on"+b,c[b+a])}}}}addEvent(window,"load",epaCore.printAsIs_Date_URL);addEvent(window,"load",epaCore.newIcon);addEvent(window,"load",epaCore.notice);addEvent(window,"load",epaCore.stripeTables);addEvent(window,"load",epaCore.writePost);var _gaq=_gaq||[];function loadtracking(){window._gaq.push(["_setAccount","UA-32633028-1"]);window._gaq.push(["_trackPageview"]);window._gaq.push(["_trackPageLoadTime"]);window._gaq.push(["_setDomainName","epa.gov"]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})()}loadtracking();