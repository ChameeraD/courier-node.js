const express = require("express");
const router = express.Router();
const courier =  require("@trycourier/courier");

const courierClient = courier.CourierClient({ authorizationToken: "YOUR_API_KEY" });

router.post("/notification", (req, res) => {
    res = courierClient.send({
        message: {
            to: {
            user_id: "chameera",
            courier: {
                channel: "chameera",
            },
            },
            template: "7VXRCME1234EK7MFCW1STCC3HP34",
            data: {
            message: "Hello",
            recipientName: "User",
            },
        },
    });
    console.log(res)

});

module.exports = router;