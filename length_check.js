var seqNames=["intro","unhappy","childhood","fantasy","reality","decision","end"];
var seqInfo={"intro":["010","020","030","040"],"unhappy":["010","015","020","030","040","050","060","070","090","095","100","110","120","130","140","150"], "childhood":["010","020","030","040","050","060","070","080","090","100","105","110","120","122","124","126","128","130"],"fantasy":["010","020","030","040","050"],"reality":["010","020","030","040","060","070","080","090","100","105","110","115","120","130","140","170","180","190"],"decision":["010","020","030","040","050","055","060","070"],"end":["050","010","020","030","040","045","050"]};


window.onload = function() {
	//generateShots();
	WriteFile();
}

function WriteFile()
{

   var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
   var fh = fso.CreateTextFile("c:\\Test.txt", true); 
   fh.WriteLine("Some text goes here..."); 
   fh.Close(); 

}

//helper methods
function n2px(n) { return n + "px"; }
function px2n(px) { return parseInt(px); }
function $(tar) { return document.getElementById(tar);}
function $$(tar) { return document.querySelectorAll(tar);}

//parse the videos and get the length
function getClassDuration() {
			var c = $$('.v');
			for (var i=0; i<c.length;i++) {
				console.log(c[i].duration);
				var fh = fopen("c:\\MyFile.txt", 3);
			}
}

//generate the video blocks in shots div
function generateShots() {
	var shotsDiv = $("shots");
	for (var i=1; i<1+1; i++) {
	//for (var i=1; i<seqNames.length+1; i++) {
		console.log(i);
		
		for (var ii=0;ii<seqInfo[seqNames[i-1]].length;ii++) {
			seq=seqInfo[seqNames[i-1]][ii];
			var videoItem = document.createElement("video");
			videoItem.className="v";
			var base = "seq_"+i+"_"+seqNames[i-1]+"_"+seq+"0";
			console.log(base);
			videoItem.src=base+"\\"+base+"_playblast.mov";
			console.log(videoItem.src);
			videoItem.controls="controls";
			shotsDiv.appendChild(videoItem);
			//console.log(videoItem.duration);
		}
		
	}
}
