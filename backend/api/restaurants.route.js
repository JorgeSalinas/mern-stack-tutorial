import express from "express"
import RestaurantsCtrl from "./restaurants.contoller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router