var pages = {};
pages.index = {
  path: '/',
  body: '<div class="header"><div class="container"><div class="header-info"><div class="logo"><a href="#"><img src="images/logo.png" alt="" class="img-responsive"/></a></div><div class="header-right"><div class="menu"><span class="menu">MENU</span><ul class="navigatoin"><li><a href="#Home" class="scroll">Главная</a></li><li><a href="#About" class="scroll">Узнать больше</a></li><li><a href="#Services" class="scroll">Услуги</a></li><li><a href="#Features" class="scroll">Примеры</a></li><li><a href="#Price" class="scroll">Цены</a></li><li><a href="#Contact" class="scroll">Контакты</a></li><a href="#small-dialog2" class="signup play-icon popup-with-zoom-anim">Войти</a></ul></div></div><!-- script-nav--><script>$("span.menu").click(function(){\n  $("ul.navigatoin").slideToggle("slow" , function(){\n  });\n});</script><script type="text/javascript">jQuery(document).ready(function($) {\n  $(".scroll").click(function(event){\n    event.preventDefault();\n    $(\'html,body\').animate({scrollTop:$(this.hash).offset().top},1000);\n  });\n});</script><div class="clearfix"></div><!-- /script-nav--><div class="clearfix"></div></div><!-- pop-up-box--><script type="text/javascript" src="js/modernizr.custom.min.js"></script><link href="css/popuo-box.less" rel="stylesheet" type="text/css" media="all"/><script src="js/jquery.magnific-popup.js" type="text/javascript"></script><!-- //pop-up-box--><div id="small-dialog2" class="mfp-hide"><div class="signup"><h3>Login</h3><h4><a href="#">let\'s get started</a></h4><input type="text" placeholder="Email" required="" class="email"/><input type="password" placeholder="Password" required=""/><input type="submit" value="Login"/></div></div><script>$(document).ready(function() {\n  $(\'.popup-with-zoom-anim\').magnificPopup({\n    type: \'inline\',\n    fixedContentPos: false,\n    fixedBgPos: true,\n    overflowY: \'auto\',\n    closeBtnInside: true,\n    preloader: false,\n    midClick: true,\n    removalDelay: 300,\n    mainClass: \'my-mfp-zoom-in\'\n  });\n});</script></div><div id="Home" class="header-bottom"><div class="container"><div class="clo-sm-4 h-left"><span></span></div><div class="col-sm-8 h-right"><h1>Маршрутизатор вашего бизнеса.</h1><p>Lollipop liquorice lollipop ice cream cheesecake halvah jelly-o. Gummies\nlollipop macaroon marshmallow icing. Cookie chupa chups cake dessert\nlollipop marzipan donut apple pie. Cookie cotton candy oat cake sweet roll\ntopping apple pie marzipan.</p><div class="buttons"><input type="button" value="НАЧАТЬ СЕЙЧАС"/><input type="button" value="УЗНАТЬ БОЛЬШЕ" class="act"/></div></div></div><div class="clearfix"></div></div></div><!-- /header--><!-- about--><div id="About" class="about"><div class="container"><div class="about-info"><div class="col-md-8 about-left"><h2>Работает на вас</h2><p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p><div class="sc-icons"><a href="#"><span class="icon1"></span></a><a href="#"><span class="icon2"></span></a><a href="#"><span class="icon3"></span></a><a href="#"><span class="icon4"></span></a></div></div><div class="col-md-4 about-right"><img src="images/carry-bags.png" alt="" class="img-responsive"/></div><div class="clearfix"></div></div></div></div><div id="Services" class="services"><div class="container"><div class="services-grids"><div class="col-md-4 grids-info"><i class="icon1"></i><h3>Title Goes Here</h3><p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p></div><div class="col-md-4 grids-info"><i class="icon2"></i><h3>Title Goes Here</h3><p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p></div><div class="col-md-4 grids-info"><i class="icon3"></i><h3>Title Goes Here</h3><p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p></div><div class="clearfix"></div></div></div></div><!-- /services--><!-- Features--><div id="Features" class="Features"><div class="container"><div class="Features-info"><div class="Features-info-top"><h3>Lorem Ipsum Dolor Sit Amet</h3><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p></div><div class="slider"><ul id="slider1" class="rslides"><li><img src="images/slider.png" alt=""/></li><li><img src="images/slider.png" alt=""/></li><li><img src="images/slider.png" alt=""/></li></ul></div></div></div></div><!-- /Features--><!-- price--><div id="Price" class="price"><div class="container"><div class="price-info"><h3>SELECT THE PRICE THAT YOU LIKE</h3><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\nsuscipit lobortis nisl ut aliquip ex ea commodo consequat.</p></div><div class="price-grid"><div class="price-column"><div class="price-col-top"><h4>ECONOMY</h4><div class="price-col-bottom"><h5>5$</h5><span class="p-line"></span><ul class="pr-list"><li>2 GB</li><li>200MB</li><li>UNLIMITED</li><li>1 Members</li><li>1 e-Mail accounts</li></ul><a href="#">SIGN UP</a></div></div><div class="clearfix"></div></div><div class="price-column"><div class="price-col-top-in"><h4>PERSONAL</h4><div class="price-col-bottom-in"><h3>15$</h3><span class="p-line"></span><ul class="pr-list"><li>5 GB</li><li>500MB</li><li>UNLIMITED</li><li>2 Members</li><li>2 e-Mail accounts</li></ul><a href="#">SIGN UP</a></div></div><div class="clearfix"></div></div><div class="price-column"><div class="price-col-top-inn"><h4>BUSINESS</h4><div class="price-col-bottom-inn"><h6>20$</h6><span class="p-line"></span><ul class="pr-list"><li>10 GB</li><li>1 GB</li><li>UNLIMITED</li><li>5 Members</li><li>5 e-Mail accounts</li></ul><a href="#">SIGN UP</a></div></div><div class="clearfix"></div></div><div class="clearfix"></div></div></div></div><!-- /price--><!-- contact--><div id="Contact" class="contact"><div class="container"><h3>CONTACT US</h3><div class="contact-us"><div class="col-md-6 contact-info"><ul class="icon-menu"><li class="ion"><a href="#"><img src="images/01.png"/></a></li><li class="fon"><p>7 Street, Block 15B No.1C Polda I Beringin Raya Bandar Lampung</p></li></ul><form><input type="text" value="Your name" onfocus="this.value = \'\';" onblur="if (this.value == \'\') {this.value = \'First name...\';}" class="text"/><input type="text" value="Your email" onfocus="this.value = \'\';" onblur="if (this.value == \'\') {this.value = \'Last name...\';}" class="text"/><div class="dropdown-button"><select tabindex="9" data-settings="{&quot;wrapperClass&quot;:&quot;flat&quot;}" class="dropdown"><option value="0">Choose your Subject</option><option value="1">ullamcorper</option><option value="2">placerat</option><option value="3">sollemnes</option><option value="4">accumsan</option><option value="5">autem</option><option value="6">nostrud</option><option value="7">sequitu</option><option value="8">Mirum</option></select></div></form></div><div class="col-md-6 contact-intro"><div class="contact-information"><ul class="contact-in"><li class="iod"></li><li class="ion"><a href="#"><img src="images/02.png"/></a></li><li class="elt"><p>(0271) 123 - 456</p></li></ul></div><div class="contact-infor"><ul class="contact-is"><li class="iod-1"></li><li class="ion"><a href="#"><img src="images/03.png"/></a></li><li class="elt-1"><p><a href="mailto:info(at)sector.com">company-email@gmail.com</a></p></li></ul><textarea onfocus="if(this.value == \'Message...\') this.value=\'\';" onblur="if(this.value == \'\') this.value=\'Message...\';">Message...</textarea><input type="submit" value="SUBMIT"/></div></div><div class="clearfix"></div></div></div></div><!-- /contact--><!-- footer--><div class="footer"><div class="container"><div class="copy-rights"><p>Powered by<a href="http://MobileRoute.com/">MobileRoute.</a></p></div><script type="text/javascript">$(document).ready(function() {\n  /*\n   var defaults = {\n   containerID: \'toTop\', // fading element id\n   containerHoverID: \'toTopHover\', // fading element hover id\n   scrollSpeed: 1200,\n   easingType: \'linear\'\n   };\n   */\n  $().UItoTop({ easingType: \'easeOutQuart\' });\n});</script><a id="toTop" href="#" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a></div></div><!-- /footer-->',
  attributes:{ title: 'Mobile Route' }
};
pages.login = {
  path: '/login',
  body: '<p>1</p>',
  attributes:{ title: 'login'}
};
pages.dashboard = {
  path: '/dashboards',
  body: '<p>2</p>',
  attributes:{ title: 'dashboards'}
};
pages.map = {
  path: '/map',
  body: '<p>3</p>',
  attributes:{ title: 'Map' }
};
pages.tasks = {
  path: '/tasks',
  body: '<p>4</p>',
  attributes:{ title: 'Tasks'}
};
pages.calendar = {
  path: '/calendar',
  body: '<p>5</p>',
  attributes:{ title: 'Calendar'}
};
pages.privacy = {
  path: '/privacy',
  body: '<p>6</p>',
  attributes:{ title: 'Privacy Policy'}
};

module.exports = pages;
