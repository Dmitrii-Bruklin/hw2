import "./index.css";
import MY_IMAGE from './assets/js.png';


const head1= document.createElement('h1');
head1.textContent = "I love JavaScript";

const img = document.createElement("img");
img.className = "js-image";
img.src = MY_IMAGE;

document.body.append(head1,img);

