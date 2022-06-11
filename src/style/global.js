import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, .App {
    
    font-family: 'Rubik', sans-serif;
    background-image: linear-gradient(to left bottom, #1e1e1e, #262627, #2e2e2f, #363639, #3e3e42);

}

.App {

  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: space-between;

}

button {

    cursor: pointer;
    
}



:root {

    --blue   : #007acc;
    --grey   : #3e3e42;
    --grey50 : #2d2d30;
    --black  : #252526;
    --black50: #1e1e1e;

}





* {
    scrollbar-width: auto;
    scrollbar-color: var(--brown) #ffffff;
  }

 
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: white;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--brown);
    border-radius: 10px;
    border: 0 solid #ffffff;
  }


/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



`