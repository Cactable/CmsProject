
var path = "";
var href = document.location.href;
var s = href.split("/");
for (var i=3;i<(s.length-1);i++) {
    path+="<A HREF=\""+href.substring(0,href.indexOf("/"+s[i])+s[i].length+1)+"/\">"+s[i]+"</A> / ";
}
i=s.length-1;
path+="<A HREF=\""+href.substring(0,href.indexOf(s[i])+s[i].length)+"\">"+s[i]+"</A>";
var url =  path;
document.writeln(url);