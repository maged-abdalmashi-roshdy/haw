'use strict';


/* section one  */
const stickyElem = document.querySelector(".flex-container");
const section1 = document.querySelector('.aa');
const section2 = document.querySelector('.ab');
const section3 = document.querySelector('.ac');
const underLine1 = document.querySelector('.underLine1' );
const underLine2 = document.querySelector('.underLine2');
const underLine3 = document.querySelector('.underLine3');

section1.addEventListener('click', function () {
  section1.style.color= "#1d1d1f";
  underLine1.style.display= 'block';
  section2.style.color= "gray";
  underLine2.style.display= 'none';
  section3.style.color= "gray";
  underLine3.style.display= 'none';
  }
);
section2.addEventListener('click', function () {
  section2.style.color= " #1d1d1f";
  underLine2.style.display= 'block';
  section1.style.color= "gray";
  underLine1.style.display= 'none';
  section3.style.color= "gray";
  underLine3.style.display= 'none';
  }
);
section3.addEventListener('click', function () {
  section3.style.color= "#1d1d1f";
  underLine3.style.display= 'block';
  section2.style.color= "gray";
  underLine2.style.display= 'none';
  section1.style.color= "gray";
  underLine1.style.display= 'none';
  }
);

	const currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
	window.onscroll = function() {
		if(window.pageYOffset > currStickyPos) {
			stickyElem.style.position = "fixed";
			stickyElem.style.top = "0px";
		} else {
			stickyElem.style.position = "relative";
			stickyElem.style.top = "initial";
		}
	};


/* section three  */
const ownForms1778 = document.querySelector('.ownForms1778');
const ownForms1779 = document.querySelector('.ownForms1779');
const ownForms1789 = document.querySelector('.ownForms1789');
const ownForms1820= document.querySelector('.ownForms1820');
const ownForms1830= document.querySelector('.ownForms1830');
const bulletsForms1778 = document.getElementById('bulletsForms1778');
const bulletsForms1779 = document.getElementById('bulletsForms1779');
const bulletsForms1789 = document.getElementById('bulletsForms1789');
const bulletsForms1820 = document.getElementById('bulletsForms1820');
const bulletsForms1830 = document.getElementById('bulletsForms1830');

bulletsForms1778.addEventListener('click', function () {
  ownForms1778.style.display= 'block';
  ownForms1779.style.display= 'none';
  ownForms1789.style.display= 'none';
  ownForms1820.style.display= 'none';
  ownForms1830.style.display= 'none';
});
bulletsForms1779.addEventListener('click', function () {
  ownForms1778.style.display= 'none';
  ownForms1779.style.display= 'block';
  ownForms1789.style.display= 'none';
  ownForms1820.style.display= 'none';
  ownForms1830.style.display= 'none';
});
bulletsForms1789.addEventListener('click', function () {
  ownForms1778.style.display= 'none';
  ownForms1779.style.display= 'none';
  ownForms1789.style.display= 'block';
  ownForms1820.style.display= 'none';
  ownForms1830.style.display= 'none';
});
bulletsForms1820.addEventListener('click', function () {
  ownForms1778.style.display= 'none';
  ownForms1779.style.display= 'none';
  ownForms1789.style.display= 'none';
  ownForms1820.style.display= 'block';
  ownForms1830.style.display= 'none';
});
bulletsForms1830.addEventListener('click', function () {
  ownForms1778.style.display= 'none';
  ownForms1779.style.display= 'none';
  ownForms1789.style.display= 'none';
  ownForms1820.style.display= 'none';
  ownForms1830.style.display= 'block';
});


/* section four  */
const sec4img4 = document.querySelector('.sec4img4');
const imgBox1 = document.querySelector('.imgBox1');
const imgBox2 = document.querySelector('.imgBox2');
const imgBox3 = document.querySelector('.imgBox3');
const imgBox4 = document.querySelector('.imgBox4');


imgBox1.addEventListener('click', function () {
  sec4img4.src = "images/3.jpg";
  imgBox1.style.filter ='grayscale(100%)';
  imgBox2.style.filter ='none';
  imgBox3.style.filter ='none';
  imgBox4.style.filter ='none';
});


imgBox2.addEventListener('click', function () {
  sec4img4.src = "images/4.jpg";
  imgBox2.style.filter ='grayscale(100%)';
  imgBox1.style.filter ='none';
  imgBox3.style.filter ='none';
  imgBox4.style.filter ='none';
});


imgBox3.addEventListener('click', function () {
  sec4img4.src = "images/5.jpg";
  imgBox3.style.filter ='grayscale(100%)';
  imgBox2.style.filter ='none';
  imgBox1.style.filter ='none';
  imgBox4.style.filter ='none';
});


imgBox4.addEventListener('click', function () {
  sec4img4.src = "images/6.jpg";
  imgBox4.style.filter ='grayscale(100%)';
  imgBox2.style.filter ='none';
  imgBox3.style.filter ='none';
  imgBox1.style.filter ='none';
});
