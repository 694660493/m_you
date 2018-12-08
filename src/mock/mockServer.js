import category from "./category.json"
import msite from "./msite.json"
import shiwu from "./shiwu.json"
import shiwu_02 from "./shiwu_02.json"
import shiwu_03 from "./shiwu_03.json"
import Mock from "mockjs"

Mock.mock("/msite",{code:200,data:msite})
Mock.mock("/category",{code:200,data:category})
Mock.mock("/shiwu?tab=1",{code:200,data:shiwu})
Mock.mock("/shiwu?tab=2",{code:200,data:shiwu_02})
Mock.mock("/shiwu?tab=3",{code:200,data:shiwu_03})
