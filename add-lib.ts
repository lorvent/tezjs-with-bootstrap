import { addScript,addLib } from "@tezjs/js"

export default addLib({
    afterUserInteraction:[addScript("/@/node_modules/bootstrap/dist/js/bootstrap.min.js"),addScript("/@/node_modules/jquery/dist/jquery.min.js")],  
})