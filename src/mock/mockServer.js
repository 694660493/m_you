import category from "./category.json"
import msite from "./msite.json"
import shiwu from "./shiwu.json"
import Mock from "mockjs"

Mock.mock("/msite",{code:200,data:msite})
Mock.mock("/category",{code:200,data:category})
Mock.mock("/shiwu",{code:200,data:shiwu})
