function gumar(){
   const inp1 = document.getElementById("gum").value
   const inp2 = document.getElementById("han").value
   document.getElementById("pat").value = Number(inp1) + Number(inp2);
}
function hanum(){
   const inp1 = document.getElementById("gum").value
   const inp2 = document.getElementById("han").value
   document.getElementById("pat").value = Number(inp1) - Number(inp2);
}
function bazm(){
   const inp1 = document.getElementById("gum").value
   const inp2 = document.getElementById("han").value
   document.getElementById("pat").value = Number(inp1) * Number(inp2);
}
function baj(){
   const inp1 = document.getElementById("gum").value
   const inp2 = document.getElementById("han").value
   document.getElementById("pat").value = Number(inp1) / Number(inp2);
}
function ac(){
   document.getElementById("gum").value = 0;
   document.getElementById("pat").value = 0;
   document.getElementById("han").value = 0;
}
