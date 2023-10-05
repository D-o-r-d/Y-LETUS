// DNoH.js  (Display Navigation on Header)
// Get courses for navigation of LETUS and Display it on header.


// Get courses
var elems = [[]];
var mycourse_TUS = document.getElementsByClassName('type_unknown depth_3 contains_branch')[0];
// ↓時間で変化するようにしたい
// 0: 通年  1: 前期  2: 後期  3: 統合コース
var now = new Date();
if(now.getMonth() < 9-1){
    var targetlist = [0,1];
} else {
    var targetlist = [0,2];
}

var items = ["通年","前期","後期","統合コース"];
for(var i=0;i<targetlist.length;i++){
    var mcli = mycourse_TUS.getElementsByClassName('type_unknown depth_4 contains_branch')[targetlist[i]];
    var mcls = mcli.getElementsByClassName('type_course depth_6 contains_branch');
    console.log(i,mcls.length);
    for(var j=0;j<mcls.length;j++){
        var mca = mcls[j].querySelectorAll('a')[0];
        console.log(i,j,elems.length-1,mca.innerHTML);
        elems[elems.length-1].push([mca.innerHTML,mca.getAttribute('href')]);
    }
    elems.push([]);
}
console.log(elems);

// Display
var text = "<div id='addon-topmenu'>";
for(var i=0;i<elems.length-1;i++){
    text += "<div class='addon-topmenu-title'>" + items[targetlist[i]] + "</div>\
    <div class='addon-topmenu-outline'>";
    for(var j=0;j<elems[i].length;j++){
        text += "\
        <div class='addon-topmenu-box'>\
            <a href='" + elems[i][j][1] + "' class='addon-topmenu-link'>" + elems[i][j][0] + "</a>\
        </div>";
    }
    text += "</div>";
}
text += "</div>";
var header = document.getElementById("page-header");
header.innerHTML += text;


// Design style
var style = "<style>\
    #addon-topmenu{\
        margin:0 auto;\
        padding:0 1em;\
    }\
    .addon-topmenu-title{\
        \
    }\
    .addon-topmenu-outline{\
        display:flex;\
        flex-wrap: wrap;\
        font-size: calc(0.90375rem + 0.045vw);\
    }\
    .addon-topmenu-box{\
        margin:1em;\
        width: 10em;\
        border: 1px solid rgba(0,0,0,.125);\
        border-radius: .25rem;\
    }\
    .addon-topmenu-link{\
        width:100%;\
        height:100%;\
        padding: 0.4em;\
        display: block;\
        word-break: break-all;\
    }\
</style>";
var head = document.querySelector('head');
head.insertAdjacentHTML('beforeEnd', style);