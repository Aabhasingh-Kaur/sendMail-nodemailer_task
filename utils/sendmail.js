const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "ankibha20@gmail.com",
            pass: "ouwuabldapieuwyz",
        },
    });

    const mailOptions = {
        from: "ankibha<ankibha20@gmail.com>",
        to: req.body.email,
        subject: "EMAIL SUBSCRIPTION",
        html: `<h1>Welcome to XYZ .</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, earum.</p>
<button>Explore More</button>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err)  return console.log(err);
        console.log(info);
        return res.send(
            " <h1>Email sent successfully</h1>"
        );
    });
};