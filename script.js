// Grab DOM elements for picture and glasses
const avatar = document.getElementById("avatar-container");

// Add event listener
avatar.addEventListener("click", dealwithit);

function dealwithit() {
  avatar.classList.toggle("deal-with-it");
}

function printThis(){
	var prtContent = document.getElementById("print-me");
	var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
	// WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.write('<html><head><title>Print</title>');
	WinPrint.document.write('<style>');
	WinPrint.document.write('body { font-family: Arial, sans-serif; }'); // Example style
	WinPrint.document.write('#print-me { background-color: #f0f0f0; padding: 20px; }'); // Example style
  WinPrint.document.write('.social-list li svg { display: inline-block; margin-right: 10px; vertical-align: middle; width: 32px;}');
	WinPrint.document.write('</style>');
	WinPrint.document.write('</head><body>');
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.write('</body></html>');
	WinPrint.document.close();
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();
}

function printThisTwo(){
  document.body.classList.add("print-only");
  
	window.print();

  document.body.classList.remove("print-only");
}