<input id="txt1" type="text" onchange="SetDefault($(this));" onpaste="this.onchange();" 
oninput="this.onchange();">
<br>    
    
  <input id="txt2" type="text" onchange="SetDefaultSecond();" onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();">
  
  <script type="text/javascript">
  function SetDefault(Text){
  alert(Text.val());
}
function SetDefaultSecond(){
      alert("Change");
}
</script>
