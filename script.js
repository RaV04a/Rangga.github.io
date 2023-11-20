const htmlbar = document.querySelector('html')
const cssbar = document.querySelector('css')
const jsbar = document.querySelector('javascript')
const phpbar = document.querySelector('PHP')

var tl = new TimelineLite()

tl.fromTo(htmlbar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(30% - 6px)', ease: power4.easeout})
.fromTo(cssbar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px)', ease: power4.easeout})
.fromTo(jsbar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(20% - 6px)', ease: power4.easeout})
.fromTo(phpbar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(30% - 6px)', ease: power4.easeout})