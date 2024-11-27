
console.log('hello world')
document.body.firstElementChild
// <div>Box1</div>
document.body.firstElementChild.childNodes
// [text ,div text ]
              



            //    container's chid
document.body.firstElementChild.children  
// [div.box,div,box,div.box]
//will get html element nodes
document.body.firstElementChild.children[1]
// =>div.box <div className='box'>Box 2</div>

document.body.firstElementChild.children[3].previousElementSibling
{/* <div>Box3</div> */}
// prev element 

document.body.firstElementChild.children[3].previousSibling
// text not element

