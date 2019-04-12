var SORT_COLUMN_INDEX;

function sortables_init() {
    // Find all tables with class sortable and make them sortable
    if (!document.getElementsByTagName) return;
    tbls = document.getElementsByTagName("table");
    for (ti=0;ti<tbls.length;ti++) {
        thisTbl = tbls[ti];
        if (((' '+thisTbl.className+' ').indexOf("sortable") != -1) && (thisTbl.id)) {
            //initTable(thisTbl.id);
            ts_makeSortable(thisTbl);
        }
    }
}

function ts_makeSortable(table) {
    if (table.rows && table.rows.length > 0) {
        var firstRow = table.rows[0];
    }
    if (!firstRow) return;
    
    // We have a first row: assume it's the header, and make its contents clickable links
    for (var i=0;i<firstRow.cells.length;i++) {
        var cell = firstRow.cells[i];
        var txt = ts_getInnerText(cell);
        cell.innerHTML = '<a href="javascript:;" class="sortheader" '+ 'onclick="ts_resortTable(this, '+i+');return false;" style="width:100%">' + txt+'<span class="sortarrow"></span></a>';
    }
}

function ts_getInnerText(el) {
 if (typeof el == "string") return el;
 if (typeof el == "undefined") { return el };
 if (el.innerText) return el.innerText; //Not needed but it is faster
 var str = "";
 
 var cs = el.childNodes;
 var l = cs.length;
 for (var i = 0; i < l; i++) {
  switch (cs[i].nodeType) {
   case 1: //ELEMENT_NODE
    str += ts_getInnerText(cs[i]);
    break;
   case 3: //TEXT_NODE
    str += cs[i].nodeValue;
    break;
  }
 }
 return str;
}

function ts_resortTable(lnk,clid) {
    // get the span
    var span;
    for (var ci=0;ci<lnk.childNodes.length;ci++) {
        if (lnk.childNodes[ci].tagName && lnk.childNodes[ci].tagName.toLowerCase() == 'span') span = lnk.childNodes[ci];
    }
    var spantext = ts_getInnerText(span);
    var td = lnk.parentNode;
    var column = clid || td.cellIndex;
    var table = getParent(td,'TABLE');
    
    // Work out a type for the column
    if (table.rows.length <= 1) return;
    var itm = ts_getInnerText(table.rows[1].cells[column]);
    sortfn = ts_sort_caseinsensitive;
    if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)) sortfn = ts_sort_date;
    if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)) sortfn = ts_sort_date;
    if (itm.match(/^[?]/)) sortfn = ts_sort_currency;
    if (itm.match(/^[\d\.]+$/)) sortfn = ts_sort_numeric;
    SORT_COLUMN_INDEX = column;
    var firstRow = new Array();
    var newRows = new Array();
    for (i=0;i<table.rows[0].length;i++) { firstRow[i] = table.rows[0][i]; }
    for (j=1;j<table.rows.length;j++) { newRows[j-1] = table.rows[j]; }

    newRows.sort(sortfn);

    if (span.getAttribute("sortdir") == 'down') {
        ARROW = '<img src="../../images/up.gif" border=0>';
        newRows.reverse();
        span.setAttribute('sortdir','up');
    } else {
        ARROW = '<img src="../../images/down.gif" border=0>';
        span.setAttribute('sortdir','down');
    }
    
    // We appendChild rows that already exist to the tbody, so it moves them rather than creating new ones
    // don't do sortbottom rows
    for (i=0;i<newRows.length;i++) { if (!newRows[i].className || (newRows[i].className && (newRows[i].className.indexOf('sortbottom') == -1))) table.tBodies[0].appendChild(newRows[i]);}
    // do sortbottom rows only
    for (i=0;i<newRows.length;i++) { if (newRows[i].className && (newRows[i].className.indexOf('sortbottom') != -1)) table.tBodies[0].appendChild(newRows[i]);}
    
    // Delete any other arrows there may be showing
    var allspans = document.getElementsByTagName("span");
    for (var ci=0;ci<allspans.length;ci++) {
        if (allspans[ci].className == 'sortarrow') {
            if (getParent(allspans[ci],"table") == getParent(lnk,"table")) { // in the same table as us?
                allspans[ci].innerHTML = '';
            }
        }
    }
        
    span.innerHTML = ARROW;
}

function getParent(el, pTagName) {
 if (el == null) return null;
 else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase()) // Gecko bug, supposed to be uppercase
  return el;
 else
  return getParent(el.parentNode, pTagName);
}
function ts_sort_date(a,b) {
    // y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
    if (aa.length == 10) {
        dt1 = aa.substr(6,4)+aa.substr(3,2)+aa.substr(0,2);
    } else {
        yr = aa.substr(6,2);
        if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
        dt1 = yr+aa.substr(3,2)+aa.substr(0,2);
    }
    if (bb.length == 10) {
        dt2 = bb.substr(6,4)+bb.substr(3,2)+bb.substr(0,2);
    } else {
        yr = bb.substr(6,2);
        if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
        dt2 = yr+bb.substr(3,2)+bb.substr(0,2);
    }
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
}

function ts_sort_currency(a,b) { 
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
    return parseFloat(aa) - parseFloat(bb);
}

function ts_sort_numeric(a,b) { 
    aa = parseFloat(ts_getInnerText(a.cells[SORT_COLUMN_INDEX]));
    if (isNaN(aa)) aa = 0;
    bb = parseFloat(ts_getInnerText(b.cells[SORT_COLUMN_INDEX])); 
    if (isNaN(bb)) bb = 0;
    return aa-bb;
}

function ts_sort_caseinsensitive(a,b) {
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).toLowerCase();
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).toLowerCase();
    if (aa==bb) return 0;
    if (aa<bb) return -1;
    return 1;
}

function ts_sort_default(a,b) {
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
    if (aa==bb) return 0;
    if (aa<bb) return -1;
    return 1;
}


function addEvent(elm, evType, fn, useCapture)
// addEvent and removeEvent
// cross-browser event handling for IE5+,  NS6 and Mozilla
// By Scott Andrew
{
  if (elm.addEventListener){
    elm.addEventListener(evType, fn, useCapture);
    return true;
  } else if (elm.attachEvent){
    var r = elm.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("Handler could not be removed");
  }
} 


function changebgcolor(obj)//鼠标焦点的表格颜色改变
{
	//obj.style.backgroundColor='#F5FBFF';
	for(i=0;i<obj.cells.length;i++)
	{
	obj.cells[i].style.backgroundColor='#F0F6FF';
	}
}
function backbgcolor(obj)//鼠标焦点的表格颜色改变
{
	for(i=0;i<obj.cells.length;i++)
	{
	obj.cells[i].style.backgroundColor='';
	}
}

function setleftmenu()//设置左菜单的隐藏和显示
{
	if(document.all.leftmenu.style.display=='')
	{
	document.all.leftmenu.style.display='none';
	document.all.sizeimages.src='images/setbig.gif';
	}
	else if (document.all.leftmenu.style.display=='none')
	{
	document.all.leftmenu.style.display='';
	document.all.sizeimages.src='images/setsmall.gif';
	}
}

function expand(obj,imgobj,folderimgobj,folderimg1,folderimg2)//改变树结构
{
	if (obj.style.display=="none")
	{
		obj.style.display="";
		imgobj.src="../../images/-.gif";
		folderimgobj.src=folderimg1
	}
	else if (obj.style.display=="")
	{
		obj.style.display="none";
		imgobj.src="../../images/+.gif";
		folderimgobj.src=folderimg2
	}
}



document.write('<div id="tipslayer" style="position:absolute; z-index:101; filter:alpha(opacity=90); left: 341px; top: 119px; display:none;"><table border="0" cellpadding="0" cellspacing="0" style="background-color:#B9FCFF; border:1px solid #006666; width:120px;"><tr><td style="background-color:00CCFF" height="10"></td></tr><tr><td style="background-color:#B9FCFF;color:#003366; padding:5px;" id="icontips"></td></tr><tr><td style="background-color:00CCFF" height="10"></td></tr></table></div>');
function showicontips(text)//跟随鼠标提示窗口
{
	document.all.tipslayer.style.display="none";
	document.all.icontips.innerHTML=text;
	moveicontips();
}
function moveicontips()//跟随鼠标提示窗口
{
	if (event.clientX-130<0)
	{
		document.getElementById('tipslayer').style.pixelLeft=event.clientX+10;
		document.getElementById('tipslayer').style.pixelTop=event.clientY-63;
	}
	else 
	{
		document.getElementById('tipslayer').style.pixelLeft=event.clientX-130;
		document.getElementById('tipslayer').style.pixelTop=event.clientY-63;
	}
	//document.onmousemove = moveicontips();
	//setTimeout("moveicontips();",100)
}
function hideicontips()//跟随鼠标提示窗口
{
	document.all.tipslayer.style.display="none";
	clearTimeout(setTimeout("0")-1);
	window.clearTimeout();
}
document.onmousemove = moveicontips;



function sAlert(str){//自定义提示窗口
	var msgw,msgh,bordercolor;
	msgw=400;//提示窗口的宽度
	msgh=100;//提示窗口的高度
	titleheight=25 //提示窗口标题高度
	bordercolor="#336699";//提示窗口的边框颜色
	titlecolor="#99CCFF";//提示窗口的标题颜色
	
	var sWidth,sHeight;
	sWidth=document.body.offsetWidth;
	sHeight=screen.height;
	
	var bgObj=document.createElement("div");
	bgObj.setAttribute('id','bgDiv');
	bgObj.style.position="absolute";
	bgObj.style.top="0";
	bgObj.style.background="#777";
	bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
	bgObj.style.opacity="0.6";
	bgObj.style.left="0";
	bgObj.style.width=sWidth + "px";
	bgObj.style.height=sHeight + "px";
	bgObj.style.zIndex = "10000";
	document.body.appendChild(bgObj);
	
	var msgObj=document.createElement("div")
	msgObj.setAttribute("id","msgDiv");
	msgObj.setAttribute("align","center");
	msgObj.style.background="white";
	msgObj.style.border="1px solid " + bordercolor;
	msgObj.style.position = "absolute";
	msgObj.style.left = "50%";
	msgObj.style.top = "60%";
	msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
	msgObj.style.marginLeft = "-225px" ;
	msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
	msgObj.style.width = msgw + "px";
	msgObj.style.height =msgh + "px";
	msgObj.style.textAlign = "center";
	msgObj.style.lineHeight ="25px";
	msgObj.style.zIndex = "10001";
	
	var title=document.createElement("h4");
	title.setAttribute("id","msgTitle");
	title.setAttribute("align","right");
	title.style.margin="0";
	title.style.padding="3px";
	title.style.background=bordercolor;
	title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
	title.style.opacity="0.75";
	title.style.border="1px solid " + bordercolor;
	title.style.height="18px";
	title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
	title.style.color="white";
	title.style.cursor="pointer";
	title.innerHTML="关闭";
	title.onclick=function(){
		document.body.removeChild(bgObj);
		document.getElementById("msgDiv").removeChild(title);
		document.body.removeChild(msgObj);
		}
	document.body.appendChild(msgObj);
	document.getElementById("msgDiv").appendChild(title);
	var txt=document.createElement("p");
	txt.style.margin="1em 0"
	txt.setAttribute("id","msgTxt");
	txt.innerHTML=str;
	document.getElementById("msgDiv").appendChild(txt);
}

function expandTree(treesub) {
	
	if (treesub.style.display == "none") {
		
		treesub.style.display = "";  
	} else {
		
		
		treesub.style.display = "none";
		
	}
	
}
