import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "allstarbasketball32@gmail.com",
    pass: "zcuvlvpnpfrstpgl",
  },
  from: "allstarbasketball32@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  try {
    const mailOptions = {
      from: '"All-Star Basketball" allstarbasketball32@gmail.com',
      to,
      subject: "Código de verificación para tu cuenta",
      text: `Llegó tu código de verificación para All-Star Basketball.
                    El código para verificarte es : ${code}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo electronico enviado");
  } catch (error) {
    console.error("error al enviar el correo electronico", error);
  };
};
