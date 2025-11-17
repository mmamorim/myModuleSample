import { getColorIterator } from "./utils/colors/color.js"
import blob from "./utils/blob/blob.js"
import sample from "./examples/widget09.js"

function widget(key, draw) {

    //let nextColor = getColorIterator(key)
//
    ////console.log("key: ",key);
    //for (let i = 0; i < 10; i++) {
    //    let x = key.next()
    //    let y = key.next()
    //    let w = 100 + key.next() % 200
    //    //let h = 100 + key.next() % 200
    //    //if(i%2 == 0) {
    //    //    draw.rect().size(w, h).move(x, y).fill(nextColor())
    //    //} else {
    //    //    draw.rect().size(w, h).move(x, y).fill(nextColor())
    //    //}
    //    let b = blob(key.next())
    //    b.fill(nextColor()).move(x, y).size(w)
    //    b.addTo(draw)
    //}

    // Descomente linha abaixo para ver exemplo 0
    sample(key,draw)
}

export default widget