function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue)))
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

function toggleMenu() {
    var extendedItems = document.getElementsByClassName("extended");
    var nav = document.getElementsByTagName("nav");

    if(extendedItems.length > 0){
        var navItems = document.getElementsByClassName("navlink");
        nav[0].classList.remove("extendnav");
        for (i = 0; i < navItems.length; i++){
            navItems[i].classList.remove("extended");
        }
    }
    else {
        var navItems = document.getElementsByClassName("navlink");
        nav[0].classList.add("extendnav");
        for (i = 0; i < navItems.length; i++){
            navItems[i].classList.add("extended");
        }
    }
}

function checkScrollBars() {
  var clientHeight = document.getElementById('container').clientHeight;
  var normalw = 0;
  var scrollw = 0;
  console.log('Scroll height: ' + clientHeight + ' height: ' + document.body.clientHeight);
  if(clientHeight > document.body.clientHeight){
    console.log('Hello');
      document.getElementById('lastnav').style.marginRight = '-13px';
  }
}