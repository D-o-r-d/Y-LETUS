// DNoH.js  (Display Navigation on Header)
// Get courses for navigation of LETUS and Display it on header.


// Get courses
var elems = [];
var mycourse_TUS = document.getElementsByClassName('type_unknown depth_3 contains_branch')[0];
var targetlist = [2,3];  // 0: 通年  1: 前期  2: 後期  3: 統合コース

for($i=0;$i<targetlist.length;$i++){
    var mcli = mycourse_TUS.getElementsByClassName('type_unknown depth_4 contains_branch')[targetlist[$i]];
    var mcls = mcli.getElementsByClassName('type_course depth_6 contains_branch');
    for(var i=0;i<mcls.length;i++){
        var mca = mcls[i].querySelectorAll('a')[0];
        elems.push([mca.innerHTML,mca.getAttribute('href')]);
    }
}


// Display
var text = "<div id='addon-topmenu'>";
for(var i=0;i<elems.length;i++){
    text += "\
    <div class='addon-topmenu-box'>\
        <a href='" + elems[i][1] + "' class='addon-topmenu-link'>" + elems[i][0] + "</a>\
    </div>";
}
text += "</div>";
var header = document.getElementById("page-header");
header.innerHTML += text;


// Design style
var atttm = document.getElementById("addon-topmenu");
var atbs = document.getElementsByClassName("addon-topmenu-box");
var atls = document.getElementsByClassName("addon-topmenu-link");

atttm.style = "\
margin:0 auto;\
padding:0 1em;\
display:flex;\
flex-wrap: wrap;\
font-size: calc(0.90375rem + 0.045vw);";

for(var i=0;i<atbs.length;i++){
    atbs[i].style = "\
    margin:1em;\
    width: 10em;\
    border: 1px solid rgba(0,0,0,.125);\
    border-radius: .25rem; ";
}

for(var i=0;i<atls.length;i++){
    atls[i].style = "\
    width:100%;\
    height:100%;\
    padding: 0.4em;\
    display: block;\
    word-break: break-all";
}