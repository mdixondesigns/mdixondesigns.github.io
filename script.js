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
  document.body.classList.add("print-ready");
  
	window.print();

  document.body.classList.remove("print-ready");
}

window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-ready');
});

function addClassAndPrint() {
  return new Promise((resolve, reject) => {
      try {
          // Add class to the body element
          document.body.classList.add('print-ready');
          resolve();
      } catch (error) {
          reject(error);
      }
  }).then(() => {
      // Call the window.print function
      window.print();
  }).catch((error) => {
      console.error('An error occurred:', error);
  });
}


function printThisThree() {
  document.body.classList.add('print-ready');

  setTimeout(()=>{
    window.print();
  }, 100 );
}

setTimeout(addPrintClass, 3000 );

function addPrintClass() {
  document.body.classList.add('print-ready');
}