# Tezjs with Bootstrap

- Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.

- We can use Bootstrap with the Tezjs through the below steps.

- Create a fresh Tezjs project.
```
 npm create tez@latest
```
- Install package for bootstrap.
```
npm install bootstrap
```
- Now add Bootstrap CSS libraries to **/assets/index.css** file. See the below code for reference.
```
/assets/index.css

@import '/@/node_modules/bootstrap/dist/css/bootstrap.css';

```
- To add bootstrap js libraries to the project create one add-lib.ts file in the root folder. Then import addScript and addLib functions from @tezjs/js library. Then pass the bootstrap js libraries to the addScript function. See the below code for reference.
```
import { addScript,addLib } from "@tezjs/js"

export default addLib({
    afterUserInteraction:[addScript("/@/node_modules/bootstrap/dist/js/bootstrap.min.js"),addScript("/@/node_modules/jquery/dist/jquery.min.js")],  
})  
```
- It's done with tezjs. Now, you can use it inside your project.
- In the current project all components and pages are designed with a bootstrap framework.
- To know more about bootstrap refer to https://getbootstrap.com/